import { ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'onlineCourseApp';

  // constructor() {
  //   console.log("Constructor initialized");
  // }

  // ngOnInit() {
  //   console.log("ngOnInit Initialized");
  // }

  // ngOnChanges() {
  //   console.log("ngOnChanges initialized");
  // }

  // ngAfterViewInit() {
  //   console.log("ngAfterViewInit initialized");
  // }

  // ngDoCheck() {
  //   console.log("ngDoCheck initialized");
  // }

  // ngOnDestroy() {
  //   console.log("ngOnDestroy initialized");
  // }
}
