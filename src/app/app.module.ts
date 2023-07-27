import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { CoursesComponent } from './courses/courses.component';
import { AdminAddCoursesComponent } from './admin/admin-add-courses/admin-add-courses.component';
import { AuthBackendProvider } from './service/auth.interceptor';
import { CourseItemComponent } from './courses/course-item/course-item.component';
import { UserCoursesComponent } from './user/user-courses/user-courses.component';
import { CourseVideoComponent } from './courses/course-item/course-video/course-video.component';
import { StarRatingComponent } from './star-rating/star-rating.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    AdminComponent,
    AdminUsersComponent,
    CoursesComponent,
    AdminAddCoursesComponent,
    CourseItemComponent,
    UserCoursesComponent,
    CourseVideoComponent,
    StarRatingComponent
  ],
  imports: [
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule, 
    MatInputModule, 
    MatButtonModule, 
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    NgbModule
  ],
  providers: [AuthBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
