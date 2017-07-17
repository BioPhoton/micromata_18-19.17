import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showSpinner: boolean;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.events
      .filter((event) => event instanceof NavigationStart || event instanceof NavigationEnd || event instanceof NavigationCancel)
      .subscribe((nextEvent) => {
        this.showSpinner = !(nextEvent instanceof NavigationEnd || nextEvent instanceof NavigationCancel)
      });
  }

}
