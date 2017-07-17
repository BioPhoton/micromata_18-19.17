import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCounterService } from './shared-counter.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    SharedCounterService
  ]
})
export class MyLibModule {}
