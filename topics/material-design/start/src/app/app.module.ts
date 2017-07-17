// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {FlightSearchComponent} from './pages/flight-search/flight-search.component';

import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutComponent} from './pages/flex-layout/flex-layout.component';
import {CustomSnackbarComponent} from './components/custom-snackbar/custom-snackbar.component';
import {CustomDialogComponent } from './components/custom-dialog/custom-dialog.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flight-search',
    component: FlightSearchComponent
  },
  {
    path: 'flex-layout',
    component: FlexLayoutComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

@NgModule({
  exports: [],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    FlightSearchComponent,
    FlexLayoutComponent,
    CustomSnackbarComponent,
    CustomDialogComponent
  ],
  entryComponents: [],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
