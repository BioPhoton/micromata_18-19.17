import { Component, OnInit } from '@angular/core';
import {OneWayCountService} from '../../core/services/one-way-count.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  oneWayCount: number

  constructor(private oc: OneWayCountService) {
    this.oneWayCount = 0
  }

  actualOneWayCount() {
    return this.oneWayCount
  }

  countOneWay() {
   this.oneWayCount = this.oc.countUp(this.oneWayCount)
  }

}
