import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent {
  userRegistered:any = [];

  constructor(private _authService: AuthService) {}

  // fetch details of registered users 
  ngOnInit() {
    this._authService.fetchUser(this.userRegistered);
  }
}
