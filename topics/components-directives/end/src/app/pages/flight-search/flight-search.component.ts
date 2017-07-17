import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { FlightSelectionService } from '../../services/flight-selection.service';
import { IFlight } from '../../entities/IFlight';
import { ISelectList } from '../../entities/ISelectList';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

  get flights(): IFlight[] {
    return this.fss.flights;
  }

  get selectedFlightIds(): ISelectList {
    return this.fss.selectedFlightIds;
  }


  from: string;
  to: string;

  @ViewChild('selectList')
  selectList;

  constructor(private fs: FlightService, private fss: FlightSelectionService) {

  }

  ngOnInit() {
    this.fss.find('', '');
  }

  search(from, to) {
    this.fss.find(from, to);
  }

  deselectAll() {
    this.fss.deselectAll();
  }


}
