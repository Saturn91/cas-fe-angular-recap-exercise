import { Component } from '@angular/core';
import { routeNames } from './app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo Manager';

  public routeList = routeNames;

  constructor(public router: Router) { }
}
