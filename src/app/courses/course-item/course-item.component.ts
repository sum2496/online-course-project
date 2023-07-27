import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/service/courses.service';
import { Courses } from '../courses.model';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent {
  courseItem: Courses = {
    "course_name" : "",
    "course_category": "",
    "course_desc" : "",
    "course_instructor": "",
    "course_price": 0,
    "course_review": 0,
    "course_video": "",
    "course_thumbnail": "",
  };

  hasBought = false;
  id = "";
  conf: any;
  courseSubscription: Subscription;

  constructor(private route: ActivatedRoute,
    private _coursesService: CoursesService,
    private _authService: AuthService,
    private router: Router) {}

  // fetch course by its unique id
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.courseSubscription = this._coursesService.fetchCourseItem(this.id)
    .subscribe(course => {
      this.courseItem = course;
    });
    
    // fetching courses enrolled by respective user through email
    if(this._authService.getUserEmail()){
      this._coursesService.alreadyBoughtCourse(this._authService.getUserEmail(),this.id);
      setTimeout(() => {
        this.hasBought = this._coursesService.courseEnroll();
      },100);
    }
  }

  ngOnDestroy() {
    this.courseSubscription.unsubscribe();
  }

  startVideo() {
    let url = `/courses/${this.id}/video`;
    this.router.navigate([url]);
  }

  onBuy() {
    this.conf = confirm("Are you sure you want to buy?");
    
    // if user confirms buy option, then only order should get executed
    if(this.conf) {
      this.hasBought = true;
      this._coursesService.orderCourseItem(this._authService.getUserEmail(),this.id);
    }
  }
}
