import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { IFlight } from '../../entities/IFlight';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent {

  selectedFlightIds: { [id: string]: boolean } = {};

  private _flights: IFlight[] = [];
  get flights(): IFlight[] {
    return this._flights;
  }

  set flights(flights: IFlight[]) {
    this._flights = flights;
  }

  from: string;
  to: string;

  @ViewChild('selectList')
  selectList;

  constructor(private fs: FlightService) {

  }

  search(from, to) {
    console.log(this.fs.find(from, to));
    this.flights = this.fs.find(from, to);
  }

  toggleAll() {
    if (Object.keys(this.selectedFlightIds).length > 0) {
      this.deselectAll();
    } else {
      this.selectAll();
    }
  }

  deselectAll() {
    this.selectedFlightIds = {};
  }

  selectAll() {
    this.selectedFlightIds = this.flights
      .reduce((state, flight) => {
        state[flight.id] = true;
        return state
      }, {})
  }

  toggleSelected(id) {
    const newSelectedState = !this.selectedFlightIds[id];

    delete this.selectedFlightIds[id];
    if (newSelectedState) {
      this.selectedFlightIds[id] = true;
    }

  }


}
