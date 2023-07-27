import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from './register';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  cRegister = new Register();

  constructor(private _authService: AuthService) {}

  onRegister(registerForm : NgForm) {
    this._authService.registerUser(registerForm);
  }
}
