import {Inject, Injectable} from '@angular/core';
import {OneWayCountService} from './one-way-count.service'
import {COUNT_FUNCTIONS} from '../tokens/multi-token'

@Injectable() //only needed if we have constructor params
export class AlternativeCounterService {

  count:number;

  constructor(@Inject(COUNT_FUNCTIONS) private countFunctions: Function[]) {
    this.count = 0;
  }

  getCount():number {
    return this.count;
  }

  doCount() {
    this.count = this.countFunctions[0](this.count)
  }

}
