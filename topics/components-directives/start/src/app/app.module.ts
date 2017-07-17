import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { FlightService } from './services/flight.service';
import { FlightSelectionService } from './services/flight-selection.service';
import { FlightSelectionObservableService } from './services/flight-selection-observable.service';

import { FlightEditComponent } from './pages/flight-edit/flight-edit.component';
import { FlightComponent } from './pages/flight-edit/components/flight/flight.component';

import { FlightSearchComponent } from './pages/flight-search/flight-search.component';
import { FlightCardComponent } from './pages/flight-search/components/flight-card/flight-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent,
    FlightComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    FlightService,
    FlightSelectionService,
    FlightSelectionObservableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
