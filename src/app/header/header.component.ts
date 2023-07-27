import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  isLoggedIn = false;   // to check whether user is logged in or not
  private authListenerSubscription: Subscription;
  
  constructor(private _authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this._authService.getIsAuth();
    this.authListenerSubscription = this._authService.getAuthStatus()
    .subscribe(isAuth => {
      this.isLoggedIn = isAuth;
    });
  }

  // display different side navigation bar in dashboard part for admin and user 
  getDashBoardRoute() {
    if(this._authService.getUserEmail())
      return "/user";
    return "/admin";
  }

  ngOnDestroy() {
    this.authListenerSubscription.unsubscribe(); 
  }

  onLogout() {
    this._authService.logoutUser();
  }
}
