import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AdminAddCoursesComponent } from './admin-add-courses.component';
import { FormsModule } from '@angular/forms';

describe('AdminAddCoursesComponent', () => {
  let component: AdminAddCoursesComponent;
  let fixture: ComponentFixture<AdminAddCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddCoursesComponent],
      imports: [HttpClientModule,FormsModule]
    });
    fixture = TestBed.createComponent(AdminAddCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
