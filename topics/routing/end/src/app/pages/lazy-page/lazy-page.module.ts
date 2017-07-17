import { NgModule } from '@angular/core';

import { LazyPageRoutingModule } from './lazy-page-routing.module';
import { LazyComponent } from './lazy/lazy.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    LazyPageRoutingModule,
    SharedModule
  ],
  declarations: [LazyComponent],
  exports: [LazyComponent]
})
export class LazyPageModule {
}
