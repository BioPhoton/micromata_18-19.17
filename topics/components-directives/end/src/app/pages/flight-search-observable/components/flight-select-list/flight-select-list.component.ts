import { Component } from '@angular/core';
import { FlightSelectionObservableService } from '../../../../services/flight-selection-observable.service';

@Component({
  selector: 'flight-select-list',
  templateUrl: './flight-select-list.component.html',
  styleUrls: ['./flight-select-list.component.scss']
})
export class FlightSelectListComponent {


  selectedFlightIds: { [id: string]: boolean } = {};

  constructor(public fsso: FlightSelectionObservableService) {
    this.fsso.selectedFlightIds$.subscribe((selectedFlightIds) => {
      this.selectedFlightIds = selectedFlightIds;
    });
  }

  toggleSelected(id) {
    this.fsso.toggleSelected(id);
  }

  toggleAll() {
    this.fsso.toggleAll();
  }

}
