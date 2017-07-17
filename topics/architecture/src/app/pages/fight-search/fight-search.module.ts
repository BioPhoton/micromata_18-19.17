import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FightSearchRoutingModule } from './fight-search-routing.module';
import { FlightSearchComponent } from './container/flight-search/flight-search.component';
import { SearchBarComponent } from './componens/search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FightSearchRoutingModule
  ],
  declarations: [FlightSearchComponent, SearchBarComponent],
  exports: [FlightSearchComponent, SearchBarComponent]
})
export class FightSearchModule { }
