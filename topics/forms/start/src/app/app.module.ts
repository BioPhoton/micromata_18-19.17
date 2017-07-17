import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlightService } from './commons/services/flight.service';
import { FlightEditTemplateFormComponent } from './flight-edit/flight-edit-template-form/flight-edit-template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightEditTemplateFormComponent
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
