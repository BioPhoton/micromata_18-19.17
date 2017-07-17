import {Component, OnInit} from "@angular/core";
import { IFlight } from '../../entities/IFlight';

@Component({
  selector: 'flight-edit',
  templateUrl: './flight-edit.component.html',
})
export class FlightEditComponent implements OnInit {

  flight: IFlight = {} as IFlight;

  constructor() {
  }

  updateReference() {
      this.flight = {... this.flight}
  }

  ngOnInit(): void {
  }


}
