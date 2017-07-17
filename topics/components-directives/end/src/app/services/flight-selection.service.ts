import { Injectable, OnInit } from '@angular/core';
import { FlightService } from './flight.service';
import { IFlight } from '../entities/IFlight';

@Injectable()
export class FlightSelectionService implements OnInit {

  selectedFlightIds: { [id: string]: boolean } = {
    '1': true
  };

  private _flightsById: { [id: number]: IFlight } = {};

  private _flights: IFlight[] = [];
  get flights(): IFlight[] {
    return this._flights;
  }

  set flights(value: IFlight[]) {
    this._flights = value;
    this._setFlightsById(this._flights);
  }

  constructor(private fs: FlightService) {
  }

  ngOnInit(): void {

  }

  find(from: string, to: string) {
    this.flights = this.fs.find(from, to)
  }

  getSelectedFlights(): IFlight[] {
    return Object.keys(this.selectedFlightIds).map(id => {
      return this._flightsById[id]
    })
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
        return state;
      }, {})
  }

  toggleSelected(id) {
    const newSelectedState = !this.selectedFlightIds[id];

    delete this.selectedFlightIds[id];
    if (newSelectedState) {
      this.selectedFlightIds[id] = true;
    }

  }

  private _setFlightsById(flights: IFlight[]) {
    this._flightsById = flights.reduce((state, item: IFlight) => {
      state[item.id] = item;
      return state;
    }, {});
  }

}
