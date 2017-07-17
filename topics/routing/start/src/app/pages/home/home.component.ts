import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  redirectTo;

  constructor() {

  }

  ngOnInit() {

  }

  get isLoggedIn(): boolean {
    return false;
  }

  get userName(): string {
    return 'Not implemented'
  }

  login() {
    throw new Error('Not implemented');
  }


  logout() {
    throw new Error('Not implemented');
  }

}
