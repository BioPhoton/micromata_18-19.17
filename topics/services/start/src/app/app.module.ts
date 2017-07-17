import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import {CoreModule} from './core/core.module';
import { CounterPanelComponent } from './pages/home/components/counter-panel/counter-panel.component';
import { AdvancedCounterPanelComponent } from './pages/home/components/advanced-counter-panel/advanced-counter-panel.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterPanelComponent,
    AdvancedCounterPanelComponent,
  ],
  exports: [],
  imports: [
    CoreModule,
    CommonModule,
    BrowserModule,
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
