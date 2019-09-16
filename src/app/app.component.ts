import { Component } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tuto';
  message: '';

  constructor(private router: Router) {
    router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.navigate(event);
        }
      }
    );
  }

  doClick() {
    this.router.navigate(['']);
  }

  navigate(event) {
    this.message = event.url;
  }
}
