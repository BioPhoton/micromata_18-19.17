import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { FlightsHistoryComponent } from './general/components/flights-history/flights-history.component';
import { LeaveRouteWarningComponent } from './general/components/leave-route-warning/leave-route-warning.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //
    LeaveRouteWarningComponent,
    FlightsHistoryComponent
  ],
  exports: [],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
