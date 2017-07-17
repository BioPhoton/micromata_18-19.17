import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IFlight} from "../../entities/IFlight";
import {Observable} from "rxjs/Observable";
import {CityAsyncReactiveValidation} from "../../commons/validation/city-async-validation-reactive/city-async-validation-reactive";
import {CityReactiveValidation} from "../../commons/validation/city-validation-reactive/city-validation-reactive";
import {IFormElement} from "../objects/dynamic-field-options";
import { FlightService } from '../../commons/services/flight.service';

@Component({
  selector: 'flight-edit-dynamic-form',
  templateUrl: './flight-edit-dynamic-form.component.html',
  styleUrls: ['./flight-edit-dynamic-form.component.scss']
})
export class FlightEditDynamicFormComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});

  id$: Observable<string>;
  flight: IFlight;
  message: string;

  config: IFormElement[] = [
    {
      controlType: "myControl",
      type: 'number',
      label: 'Id',
      name: 'id'
    },
    {
      type: 'text',
      label: 'From',
      name: 'from',
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern(/[\d\wöäüßÖÄÜ]+/),
        CityReactiveValidation.validateCity
      ],
      asyncValidators: [
        CityAsyncReactiveValidation.asyncCityValidation
      ]
    },
    {
      type: 'text',
      label: 'To',
      name: 'to',
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern(/[\d\wöäüßÖÄÜ]+/),
        CityReactiveValidation.validateCityWithParams(['Wien', 'Graz', 'Hamburg'])
      ],
      asyncValidators: [
        CityAsyncReactiveValidation.asyncCityValidationWithParam(['Wien', 'Graz'])
      ]
    },
    {
      type: 'date',
      label: 'Datum',
      name: 'date'
    }
  ];

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
        this.formGroup = this.createFromGroupFormConfig(this.flight);
      });

  }

  createFromGroupFormConfig(flight) {
    const group = this.fb.group({});
    this.config
      .forEach(control => {
          let value = flight[control.name];
          if (control.type === "date") {
            value = new Date(value);
            const y = value.getFullYear();
            const m = ( (value.getMonth() + 1) < 9) ? '0' + (value.getMonth() + 1) : (value.getMonth() + 1);
            const d = (value.getDate() < 9) ? '0' + value.getDate() : value.getDate();
            value = y + '-' + m + '-' + d;
          }
          group.addControl(control.name, this.fb.control(value, control.validators || null, control.asyncValidators || null));
        }
      );
    return group;
  }

}
