import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/service/courses.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-course-video',
  templateUrl: './course-video.component.html',
  styleUrls: ['./course-video.component.css']
})
export class CourseVideoComponent {
  videoUrl = "";

  constructor(private _coursesService: CoursesService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) {}
  
  // enable browser to play video
  getSafeVideoUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this._coursesService.fetchCourseItem(id)
    .subscribe(data => {
      this.videoUrl = data.course_video;
    });
    
  }
}
