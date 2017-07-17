import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IFlight } from '../../entities/IFlight';
import { CityReactiveValidation } from '../../commons/validation/city-validation-reactive/city-validation-reactive';
import { CityAsyncReactiveValidation } from '../../commons/validation/city-async-validation-reactive/city-async-validation-reactive';
import { FlightService } from '../../commons/services/flight.service';

@Component({
  selector: 'flight-edit-reactive-form',
  templateUrl: './flight-edit-reactive-form.component.html',
  styleUrls: ['./flight-edit-reactive-form.component.scss']
})
export class FlightEditReactiveFormComponent implements OnInit {

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
        this.formGroup = this.createFromGroupBasic(this.flight);
      })
  }

  createFromGroupBasic(flight: IFlight) {

    return new FormGroup({
      'id': new FormControl(flight.id),
      'from': new FormControl(flight.from,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern(/[\d\wöäüßÖÄÜ]+/)
        ]),
      'to': new FormControl(flight.to),
      'date': new FormControl(flight.date)
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
          Validators.pattern(/[\d\wöäüßÖÄÜ]+/),
          CityReactiveValidation.validateCity
        ],
        [
          CityAsyncReactiveValidation.asyncCityValidation
        ]
      ],
      'to': [flight.to,
        [
          CityReactiveValidation.validateCityWithParams(['Wien', 'Graz', 'London'])
        ],
        [
          CityAsyncReactiveValidation.asyncCityValidationWithParam(['Wien', 'London'])
        ]
      ],
      'date': [flight.date]
    });
  }

}
