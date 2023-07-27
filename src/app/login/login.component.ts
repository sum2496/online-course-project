import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseLogin } from './login';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  clogin = new CourseLogin();

  constructor(private _authService: AuthService) {
  }
  
  onLogin(loginForm: NgForm) {
    this._authService.loginUser(loginForm);
  }
}
