import { Component, OnInit } from '@angular/core';
import { SharedCounterService } from '../../../my-lib/shared-counter.service';

@Component({
  selector: 'flight-bookings',
  templateUrl: './flight-bookings.component.html',
  styleUrls: ['./flight-bookings.component.scss']
})
export class FlightBookingsComponent implements OnInit {

  constructor(private gs: SharedCounterService) { }

  ngOnInit() {
    console.log(this.gs.increment());
  }

}
