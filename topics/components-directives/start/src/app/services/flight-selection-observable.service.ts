import { Injectable, OnInit } from '@angular/core';
import { IFlight } from '../entities/IFlight';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';
import { FlightService } from './flight.service';

@Injectable()
export class FlightSelectionObservableService implements OnInit {

  private _flightsById: { [id: number]: IFlight } = {};

  private _flights$: BehaviorSubject<IFlight[]> = new BehaviorSubject([]);
  readonly flights$: Observable<IFlight[]> = this._flights$.asObservable();

  private _selectedFlightIds$: BehaviorSubject<{ [id: string]: boolean }> = new BehaviorSubject({'1': true});
  readonly selectedFlightIds$: Observable<{ [id: string]: boolean }> = this._selectedFlightIds$.asObservable();

  readonly selectedFlights$: Observable<IFlight[]> = this._selectedFlightIds$
    .map(selectedFlightIds => Object.keys(selectedFlightIds))
    .map((flightIds: string[]) => {
      return flightIds.map((id) => {
        return this._flightsById[id]
      })
    });

  setFlights(flights: IFlight[]) {
    this._flights$.next(flights);
    this._setFlightsById(this._flights$.getValue());
  }

  constructor(private fs: FlightService) {
  }

  ngOnInit(): void {

  }

  find(from: string, to: string) {
    this.setFlights(this.fs.find(from, to))
  }

  toggleAll() {
    const selectedFlightIds = this._selectedFlightIds$.getValue();
    if (Object.keys(selectedFlightIds).length > 0) {
      this.deselectAll();
    } else {
      this.selectAll();
    }
  }

  deselectAll() {
    this._selectedFlightIds$.next({})
  }

  selectAll() {
    const newSelectedFlightIds = this._flights$.getValue()
      .reduce((state, flight) => {
        state[flight.id] = true;
        return state;
      }, {});

    this._selectedFlightIds$.next(newSelectedFlightIds)
  }

  toggleSelected(id) {
    const selectedFlightIds = this._selectedFlightIds$.getValue();
    const newSelectedState = !selectedFlightIds[id];

    delete selectedFlightIds[id];
    if (newSelectedState) {
      selectedFlightIds[id] = true;
    }

    this._selectedFlightIds$.next(selectedFlightIds);
  }

  private _setFlightsById(flights: IFlight[]) {
    this._flightsById = flights.reduce((state, item: IFlight) => {
      state[item.id] = item;
      return state;
    }, {});
  }

}
