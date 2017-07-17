import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FlightSelectionObservableService } from '../../../../services/flight-selection-observable.service';

@Component({
  selector: 'flight-basket',
  templateUrl: './flight-basket.component.html',
  styleUrls: ['./flight-basket.component.scss']
})
export class FlightBasketComponent {

  constructor(public fsso: FlightSelectionObservableService) {

  }

}
