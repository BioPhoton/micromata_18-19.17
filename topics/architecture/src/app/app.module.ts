import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {CoreModule} from './core/core.module'
import {HomeModule} from './pages/home/home.module'
import {FightSearchModule} from './pages/fight-search/fight-search.module'
import {AppRoutingModule} from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    BrowserModule,
    CoreModule,
    HomeModule,
    AppRoutingModule,
    FightSearchModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
