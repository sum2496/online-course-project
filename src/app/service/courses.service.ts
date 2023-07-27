import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Courses } from "../courses/courses.model";
import { NgForm } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courseLists : any[] = [];
  boughtCourse = false;
  courseByUser: any[] = [];

  constructor(private http: HttpClient) {}

  // checking whether a course has been enrolled by user.
  courseEnroll() {
    return this.boughtCourse;
  }
  
  // fetch all courses
  fetchedCourses() {
    return this.http.get<Courses[]>("http://localhost:4000/coursesList");
  }

// add course 
  addCourses(courseDetail: NgForm) {
    this.http.post<Courses>("http://localhost:4000/coursesList",courseDetail.form.value)
    .subscribe(res => alert("Course Added Successfully"));
  }

  fetchCourseItem(id: string) {
    return this.http.get<Courses>(`http://localhost:4000/coursesList/${id}`);
  }

  getCoursesId() {
    return this.courseByUser;
  }


  // fetch courses per user which have been enrolled
  fetchCourseByUser(user: string) {
    this.courseByUser = [];
    user = user.substring(1,user.length-1);
    
    this.http.get<any>(`http://localhost:5000/courseOrder`)
    .subscribe(data => {
      for(let i=0;i<data.length;i++) {
        if(data[i].emailId == user){
          this.courseByUser.push(data[i].courseId);
        }
      }
    });
  }

  // checking courses already bought by user
  alreadyBoughtCourse(user: string,courseId: string) {
    user = user.substring(1,user.length-1);
    courseId = courseId.substring(1,courseId.length-1);
    
    
    this.http.get<any>("http://localhost:5000/courseOrder")
    .subscribe({
      next: (orders) => {
        for(let i=0;i<orders.length;i++){
          if(orders[i].emailId == user && orders[i].courseId == courseId)
            this.boughtCourse = true;
        }
      }
    });
  }

  // submitting/ enrolling on course
  orderCourseItem(user: string,courseId: string) {
    user = user.substring(1,user.length-1);
    this.http.post<any>("http://localhost:5000/courseOrder",{"emailId": user,"courseId" : courseId})
    .subscribe(res => alert("Order Submitted Successfully"));
  }
}