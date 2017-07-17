import {OneWayCountService} from './one-way-count.service'
import {Inject, Injectable} from '@angular/core'
import {TwoWayCountService} from './two-way-count.service'
import {INITIAL_COUNT} from '../tokens/counter-tokens'

@Injectable() //only needed if we have constructor params
export class AdvancedCounterService {

  count:number;

  constructor(@Inject(INITIAL_COUNT) private initialCount: number,
              private oneWayCount: OneWayCountService,
              private twoWayCount: TwoWayCountService) {
    this.count = initialCount;
  }

  getCount():number {
    return this.count;
  }

  doCount() {
    this.count = this.twoWayCount.countUp(this.count)
  }

  countOneWay() {
    this.count = this.oneWayCount.countUp(this.count)
  }

  countTwoWay() {
    this.count = this.twoWayCount.countUp(this.count)
  }

}
