import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  user: any;

  constructor(private router:Router) {}

  // side navigation toggling
  toggleSidenav() {
    this.sidenav.toggle();
  }

  onClickCourse() {
    this.router.navigate(['/user/usercourses']);
  }


  ngOnInit() {
    this.user = localStorage.getItem('userName');
  }
}
