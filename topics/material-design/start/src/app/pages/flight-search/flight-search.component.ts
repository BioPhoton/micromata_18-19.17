import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

  searchForm: FormGroup;

  constructor() {
  }

  ngOnInit() {

    this.searchForm = new FormGroup({
      from: new FormControl('Wien'),
      to: new FormControl('Graz'),
      date: new FormControl()
    });

  }

}
