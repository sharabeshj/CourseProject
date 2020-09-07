import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public currentRoute: string;
  constructor() {
    this.currentRoute = 'Shopping List';
  }

  public onRouteChange(data: {route: string}): void {
    this.currentRoute = data.route;
  }
}

