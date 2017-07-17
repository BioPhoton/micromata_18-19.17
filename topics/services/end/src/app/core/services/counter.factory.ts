import {OneWayCountService} from './one-way-count.service'
import {TwoWayCountService} from './two-way-count.service'
import {CounterService} from './counter.service'
import { environment } from '../../../environments/environment'

export function CounterFactory(os:OneWayCountService, ts:TwoWayCountService) {
  let cs = os;

  if (environment.production) {
    cs = ts;
  }

  return new CounterService(cs);
}
