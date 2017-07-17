import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlightEditTemplateFormComponent } from './flight-edit/flight-edit-template-form/flight-edit-template-form.component';
import { FlightEditReactiveFormComponent } from './flight-edit/flight-edit-reactive-form/flight-edit-reactive-form.component';
import { FlightEditDynamicFormComponent } from './flight-edit/flight-edit-dynamic-form/flight-edit-dynamic-form.component';
import { FlightEditCustomControlComponent } from './flight-edit/flight-edit-custom-control/flight-edit-custom-control.component';
import { MyControlComponent } from './flight-edit/components/my-control/my-control.component';
import { CityValidationDirective } from './commons/validation/city-validation-directive/city-validation.directive';
import { CityAsyncValidationDirective } from './commons/validation/city-async-validation-directive/city-async-validation.directive';
import { RouteMultiValidatorDirective } from './commons/validation/route-multi-validator-directive/route-multi-validator.directive';
import { FlightService } from './commons/services/flight.service';

@NgModule({
  declarations: [
    AppComponent,
    FlightEditTemplateFormComponent,
    FlightEditReactiveFormComponent,
    FlightEditDynamicFormComponent,
    FlightEditCustomControlComponent,
    MyControlComponent,

    CityValidationDirective,
    CityAsyncValidationDirective,
    RouteMultiValidatorDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
