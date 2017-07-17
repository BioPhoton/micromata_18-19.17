import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeModule} from './pages/home/home.module'
import {HomeComponent} from './pages/home/home.component'
import {FightSearchModule} from './pages/fight-search/fight-search.module'
import {FlightSearchComponent} from './pages/fight-search/container/flight-search/flight-search.component'

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
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    HomeModule,
    FightSearchModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
