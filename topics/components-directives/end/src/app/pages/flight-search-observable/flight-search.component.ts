import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightSelectionObservableService } from '../../services/flight-selection-observable.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;

  @ViewChild('selectList')
  selectList;

  constructor(private fsso: FlightSelectionObservableService) {

  }

  ngOnInit() {
    this.fsso.find('', '');
  }

  search(from, to) {
    this.fsso.find(from, to);
  }

  deselectAll() {
    this.fsso.deselectAll();
  }


}
