import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsHistoryComponent } from './components/flights-history/flights-history.component';
import { SelectivePreloadingStrategyService } from './services/selective-preloading-strategy.service';
import { AuthService } from './services/auth.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule, HttpModule
  ],
  declarations: [FlightsHistoryComponent],
  exports: [FlightsHistoryComponent],
  providers: [
    AuthService,
    SelectivePreloadingStrategyService
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    console.log('CoreModlue: ', parentModule);
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
