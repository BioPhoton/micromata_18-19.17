import { Component, OnInit } from '@angular/core';
import { IFlight } from '../../entities/IFlight';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightService } from '../../commons/services/flight.service';

@Component({
  selector: 'flight-edit-custom-control',
  templateUrl: './flight-edit-custom-control.component.html',
  styleUrls: ['./flight-edit-custom-control.component.scss']
})
export class FlightEditCustomControlComponent implements OnInit {


  formGroup: FormGroup;

  id: string;
  flight: IFlight;
  message: string;

  constructor(private fb: FormBuilder,
              private flightService: FlightService) {

  }

  save(fg) {
    console.log(fg);
    this.flight = Object.assign({}, this.flight, fg.value);
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
        this.formGroup = this.createFromGroupBuilder(this.flight);
      });
  }


  createFromGroupBuilder(flight: IFlight) {
    return this.fb.group({
      'id': [flight.id],
      'from': [flight.from,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          Validators.pattern(/[\d\wöäüßÖÄÜ]+/)
        ]],
      'to': [flight.to],
      'date': [flight.date]
    });
  }


}
