import {Component} from '@angular/core'

@Component({
  selector: 'counter-panel',
  templateUrl: './counter-panel.component.html',
  providers: []
})
export class CounterPanelComponent {

  constructor() {
  }

  actualCount() {
    return 0
  }

  count() {
    throw new Error('Not implemented')
  }

}
