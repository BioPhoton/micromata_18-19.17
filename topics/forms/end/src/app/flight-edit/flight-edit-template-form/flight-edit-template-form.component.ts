import { Component, OnInit } from '@angular/core';
import { IFlight } from '../../entities/IFlight';
import { FlightService } from '../../commons/services/flight.service';

@Component({
  selector: 'flight-edit-template-form',
  templateUrl: './flight-edit-template-form.component.html',
  styleUrls: ['./flight-edit-template-form.component.scss'],
})
export class FlightEditTemplateFormComponent implements OnInit {

  id: string;
  flight: IFlight;
  message: string;

  constructor(private flightService: FlightService) {
  }

  save(f) {
    this
      .flightService
      .save(this.flight)
      .subscribe(
        flight => {
          this.flight = flight;
          this.message = 'Erfolgreich gespeichert!';
        },
        err => {
          this.message = 'Fehler: ' + err;
        }
      );
  }

  ngOnInit(): void {
    this.flightService.findById('6')
      .subscribe((flight) => {
          this.flight = flight;
        }
      )
  }


}
