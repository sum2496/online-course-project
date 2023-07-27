import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserCoursesComponent } from './user-courses.component';

describe('UserCoursesComponent', () => {
  let component: UserCoursesComponent;
  let fixture: ComponentFixture<UserCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCoursesComponent],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(UserCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
