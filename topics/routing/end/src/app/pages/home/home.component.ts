import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginNeeded$: Observable<boolean>;

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.loginNeeded$ = this.route.params.pluck('loginNeeded');
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    return this.authService.userName;
  }

  login() {
    this.authService.login();
    this.router.navigate(['home'])
  }


  logout() {
    this.authService.logout();
  }

}
