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



  private _setFlightsById(flights: IFlight[]) {
    this._flightsById = flights.reduce((state, item: IFlight) => {
      state[item.id] = item;
      return state;
    }, {});
  }

}
