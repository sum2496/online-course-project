import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Courses } from 'src/app/courses/courses.model';
import { CoursesService } from 'src/app/service/courses.service';

@Component({
  selector: 'app-admin-add-courses',
  templateUrl: './admin-add-courses.component.html',
  styleUrls: ['./admin-add-courses.component.css']
})
export class AdminAddCoursesComponent {
  course: Courses = {
    "course_name" : "",
    "course_category": "",
    "course_desc" : "",
    "course_instructor": "",
    "course_price": 0,
    "course_review": 0,
    "course_video": "",
    "course_thumbnail": "",
  };

  constructor(private _coursesService: CoursesService) {}
  
  // adding courses to db
  submitCourseDetail(courseDetail: NgForm) {
    this._coursesService.addCourses(courseDetail);
  }
}
