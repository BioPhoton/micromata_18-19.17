import { Component, OnInit } from '@angular/core';
import {SimpleService} from './services/simple.service'
import {FlightService} from './services/flight.service'
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'app-home',
  templateUrl: './unit-tests.component.html'
})
export class UnitTestsComponent implements OnInit {

  currentDate: Date = new Date();

  divideResult: number;
  multiplyResultPromise: Promise<number>;
  flight$: Observable<any>;

  constructor(private simple:SimpleService, private afs:FlightService) {

  }

  ngOnInit() {
    this.divideResult = this.simple.divide(216,2);
    this.multiplyResultPromise = this.simple.multiply(21,2);

    this.flight$ = this.afs.findById('3');
  }

}
