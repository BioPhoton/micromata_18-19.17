import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCounterService } from './shared-counter.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class MyLibModule {
  static forRoot(): ModuleWithProviders {
    return {
      providers: [
        SharedCounterService
      ],
      ngModule: MyLibModule
    };
  }
}
