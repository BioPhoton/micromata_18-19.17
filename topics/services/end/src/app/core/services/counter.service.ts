import { Injectable } from '@angular/core';
import {OneWayCountService} from './one-way-count.service'

@Injectable() //only needed if we have constructor params
export class CounterService {

  count:number;

  constructor(private cs: OneWayCountService) {
    this.count = 0;
  }

  getCount():number {
    return this.count;
  }

  doCount() {
    this.count = this.cs.countUp(this.count)
  }

}
