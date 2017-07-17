import { CommonModule } from '@angular/common';
import { LeaveRouteWarningComponent } from './components/leave-route-warning/leave-route-warning.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LeaveRouteWarningComponent
  ],
  exports: [
    LeaveRouteWarningComponent,
    // prevent repetitive importing modules
    CommonModule
  ]
})
export class SharedModule {

}
