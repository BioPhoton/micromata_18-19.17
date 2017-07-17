import {Component} from '@angular/core'

@Component({
  selector: 'advanced-counter-panel',
  templateUrl: './advanced-counter-panel.component.html',
  providers: []
})
export class AdvancedCounterPanelComponent {

  constructor() {
  }

  actualCount() {
    return 0
  }

  count() {
    throw new Error('Not implemented')
  }

}
