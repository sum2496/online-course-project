import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { CoursesService } from 'src/app/service/courses.service';

@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.css']
})
export class UserCoursesComponent {
  coursesBoughtId = [];
  courseBoughtByUser = [];
  courseBoughtSub: Subscription;
  
  constructor(private _courseService: CoursesService,
    private _authService: AuthService) {}

  ngOnInit() {
    this._courseService.fetchCourseByUser(this._authService.getUserEmail());

    setTimeout(() => {
      this.coursesBoughtId = this._courseService.getCoursesId();

      setTimeout(() => {
        for(let id of this.coursesBoughtId){
          this.courseBoughtSub = this._courseService.fetchCourseItem(id)
          .subscribe(data => this.courseBoughtByUser.push(data));
        }
      }, 100);
    }, 100);
  }

  ngOnDestroy() {
    this.courseBoughtSub.unsubscribe();
  }
}
