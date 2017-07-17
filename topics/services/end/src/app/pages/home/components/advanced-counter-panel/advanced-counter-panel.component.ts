import {Component, Inject} from '@angular/core'
import {AdvancedCounterService} from '../../../../core/services/advanced-counter.service'
import {CounterService} from '../../../../core/services/counter.service'
import {INITIAL_COUNT} from '../../../../core/tokens/counter-tokens'

@Component({
  selector: 'advanced-counter-panel',
  templateUrl: './advanced-counter-panel.component.html',
  providers: [
    {provide: CounterService, useClass: AdvancedCounterService},
    {provide: INITIAL_COUNT, useValue: 1}
  ]
})
export class AdvancedCounterPanelComponent {

  constructor(private cs: CounterService) {
  }

  actualCount() {
    return this.cs.getCount()
  }

  count() {
    this.cs.doCount();
  }

}
