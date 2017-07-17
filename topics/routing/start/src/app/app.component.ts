import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showSpinner: boolean;

  constructor() {
    this.showSpinner = false;
  }

  ngOnInit(): void {

  }

}
