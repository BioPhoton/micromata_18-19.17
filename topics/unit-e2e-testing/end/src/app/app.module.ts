import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {HttpModule} from '@angular/http'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms'

import {AppComponent} from './app.component'
import {E2eTestsComponent} from './pages/e2e-tests/e2e-tests.component'
import {MyControlComponent} from './pages/unit-tests/components/my-control/my-control.component'
import {MyHighlightDirective} from './pages/unit-tests/directives/my-highlight.directive'
import {MyDatePipe} from './pages/unit-tests/pipes/my-date.pipe'
import {FlightService} from './pages/unit-tests/services/flight.service'
import {SimpleService} from './pages/unit-tests/services/simple.service'
import {UnitTestsComponent} from './pages/unit-tests/unit-tests.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: 'unti-tests',
    pathMatch: 'full'
  },
  {
    path: 'unit-tests',
    component: UnitTestsComponent
  },
  {
    path: 'e2e-tests',
    component: E2eTestsComponent
  },
  {
    path: '**',
    redirectTo: 'unti-tests'
  },
]
@NgModule({
  declarations: [
    AppComponent,
    UnitTestsComponent,
    MyDatePipe,
    MyControlComponent,
    MyHighlightDirective,
    E2eTestsComponent
  ],
  exports: [],
  imports: [
    HttpModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    SimpleService,
    FlightService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
