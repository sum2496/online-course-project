import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminAddCoursesComponent } from './admin/admin-add-courses/admin-add-courses.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthGuard } from './service/auth.guard';
import { CourseItemComponent } from './courses/course-item/course-item.component';
import { UserCoursesComponent } from './user/user-courses/user-courses.component';
import { CourseVideoComponent } from './courses/course-item/course-video/course-video.component';

const routes: Routes = [
  { path:'home',component: HomeComponent },
  { path: 'login',component: LoginComponent },
  { path: 'register',component: RegisterComponent },
  { path: 'about',component: AboutComponent },
  { path: 'courses',component: CoursesComponent },
  { path: 'courses/:id', component: CourseItemComponent },
  { path: 'courses/:id/video', component: CourseVideoComponent },
  { path: 'admin',component: AdminComponent,
    children: [
      {path: 'users',component: AdminUsersComponent},
      {path: 'addCourse', component: AdminAddCoursesComponent }
    ],
    canActivate : [AuthGuard]
  },
  { path: 'user', component: UserComponent,
    children: [
      {path: 'usercourses', component: UserCoursesComponent}
    ],
    canActivate : [AuthGuard] },
  { path: '',redirectTo: 'home', pathMatch: 'full'},
  { path: '**',redirectTo: 'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
