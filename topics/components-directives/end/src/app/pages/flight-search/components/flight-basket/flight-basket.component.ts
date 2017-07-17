import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FlightSelectionService } from '../../../../services/flight-selection.service';
import { IFlight } from '../../../../entities/IFlight';

@Component({
  selector: 'flight-basket',
  templateUrl: './flight-basket.component.html',
  styleUrls: ['./flight-basket.component.scss']
})
export class FlightBasketComponent implements OnChanges, OnInit, OnDestroy {

  constructor(private fss: FlightSelectionService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Basket OnChanges: ', changes);
    if ('flight' in changes) {
      console.log(`flight changed from ${JSON.stringify(changes.flight.previousValue)} to ${JSON.stringify(changes.flight.currentValue)}`);
    }

    if ('selected' in changes) {
      console.log(`selected state changed from ${changes.selected.previousValue} to ${changes.selected.currentValue}`);
    }
  }

  ngOnInit() {
    console.log('Basket OnInit');
  }


  ngOnDestroy(): void {
    // console.log('Basket OnDestroy');
  }

  getSelectedFlights(): IFlight[] {
    return this.fss.getSelectedFlights();
  }


}
