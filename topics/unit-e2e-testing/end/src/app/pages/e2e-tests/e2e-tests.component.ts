import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'e2e-tests',
  templateUrl: './e2e-tests.component.html'
})
export class E2eTestsComponent {

  loginState = false;

  myForm: FormGroup = new FormGroup({
    username : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  })

  login() {
    this.loginState = true;
  }
}
