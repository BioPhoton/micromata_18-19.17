import { NgModule } from '@angular/core';

import { FlightsRoutingModule } from './flights-routing.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightsComponent } from './flights.component';
import { FlightBookingsComponent } from './flight-bookings/flight-bookings.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { FlightEditGuard } from './flight-edit/guards/flight-edit-guard';
import { SharedModule } from '../../shared/shared.module';
import { FlightEditResolveService } from './flight-edit/resolver/flight-edit-resolve.service';
import { FlightService } from './services/flight.service';

@NgModule({
  imports: [
    SharedModule,
    FlightsRoutingModule
  ],
  declarations: [
    FlightSearchComponent,
    FlightEditComponent,
    FlightsComponent,
    FlightBookingsComponent
  ],
  providers: [
    AuthGuard,
    FlightEditGuard,
    FlightEditResolveService,
    FlightService
  ]
})
export class FlightsModule { }
