import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { FlightsHistoryComponent } from './core/components/flights-history/flights-history.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { FlightsModule } from './pages/flights/flights.module';
import { LazyPageModule } from './pages/lazy-page/lazy-page.module';
import { CoreModule } from './core/core.module';
import { AuthGuard } from './core/guards/auth.guard';
import { SharedModule } from './shared/shared.module';
import { MyLibModule } from './my-lib/my-lib.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flights',
    loadChildren: 'app/pages/flights/flights.module#FlightsModule',
    data: {preload: false},
    canLoad: [AuthGuard]
  },
  {
    path: 'lazy-page',
    loadChildren: 'app/pages/lazy-page/lazy-page.module#LazyPageModule',
    data: {preload: false},
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  },
  /* OUTLETS=================*/
  {
    path: 'flights-history/:id',
    component: FlightsHistoryComponent,
    outlet: 'bottom'
  }
];
const routerOptions: ExtraOptions = {
  // enableTracing: true,
  // useHash: true
  // preloadingStrategy:  PreloadAllModules // SelectivePreloadingStrategyService
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, routerOptions),
    CoreModule,
    FlightsModule,
    LazyPageModule,
    MyLibModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
