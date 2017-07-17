import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightsComponent } from './flights.component';
import { FlightBookingsComponent } from './flight-bookings/flight-bookings.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { FlightEditGuard } from './flight-edit/guards/flight-edit-guard';
import { FlightEditResolveService } from './flight-edit/resolver/flight-edit-resolve.service';

const routes: Routes = [
  {
    path: '',
    component: FlightsComponent,
    // canActivateChild: [AuthGuard],
    children: [
      {
        path: 'flight-search',
        component: FlightSearchComponent
      },
      {
        path: 'flight-edit/:id',
        component: FlightEditComponent,
        canDeactivate: [FlightEditGuard],
        resolve : {
          flight: FlightEditResolveService
        }
      },
      {
        path: 'flight-bookings',
        component: FlightBookingsComponent,
      }
    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsRoutingModule {
}
