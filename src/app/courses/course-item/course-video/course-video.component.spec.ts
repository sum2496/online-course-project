import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CourseVideoComponent } from './course-video.component';

describe('CourseVideoComponent', () => {
  let component: CourseVideoComponent;
  let fixture: ComponentFixture<CourseVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseVideoComponent],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(CourseVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
