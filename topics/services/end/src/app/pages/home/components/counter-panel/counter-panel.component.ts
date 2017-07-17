import {Component} from '@angular/core'
import {CounterService} from '../../../../core/services/counter.service'

@Component({
  selector: 'counter-panel',
  templateUrl: './counter-panel.component.html',
  providers: [
    CounterService
  ]
})
export class CounterPanelComponent {

  constructor(private cs: CounterService) {
  }

  actualCount() {
    return this.cs.getCount();
  }

  count() {
    this.cs.doCount();
  }

}
