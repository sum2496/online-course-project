import { Component } from '@angular/core';
import { CoursesService } from '../service/courses.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courseLists: any[] = [];
  searchedCourseLists: any[] = [];
  courseName = "";
  courseCategory = "";
  userInfo = "";
  isAuthorized = false;

  constructor(private _coursesService: CoursesService,
    private _authService: AuthService,
    private router: Router) {}

  // if logged in by user, enroll feature should be enabled only at that time
  // also to fetch all available courses from db
  ngOnInit() {
    this.userInfo = this._authService.getUserEmail() != null ? this._authService.getUserEmail() : "Admin";
    this.isAuthorized = this._authService.getIsAuth();
    
    this._coursesService.fetchedCourses()
    .subscribe(res => {
      res.forEach(course => {
        this.courseLists.push(course);
      });
      this.searchedCourseLists = this.courseLists;
    });
  }

  // filter function to search course either by name or category
  searchCourse() {
    let searchedCourse = this.courseName.toLocaleLowerCase();
    let searchedCategory = this.courseCategory.toLocaleLowerCase();

    this.searchedCourseLists = this.courseLists.filter(course => {
      return course.course_name.toLocaleLowerCase().includes(searchedCourse) && 
        course.course_category.toLocaleLowerCase().includes(searchedCategory);
    });
  }

  onEnroll(id: string) {
    if(!this._authService.getIsAuth()) {
      alert("Please Login for enrolling on the course");
      this.router.navigate(['/login']);
    }
    else if(this.userInfo == "Admin") {
      alert("Currently editing details are not possible!!");
      this.router.navigate(['/courses']);
    }
  }
}
