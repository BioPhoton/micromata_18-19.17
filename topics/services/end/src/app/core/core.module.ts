import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CounterService} from './services/counter.service'
import {OneWayCountService} from './services/one-way-count.service'
import {TwoWayCountService} from './services/two-way-count.service'
import {AdvancedCounterService} from './services/advanced-counter.service'
import {INITIAL_COUNT} from './tokens/counter-tokens'
import {CounterFactory} from './services/counter.factory'
import {COUNT_FUNCTIONS, CountOne, CountTwo} from './tokens/multi-token'
import {AlternativeCounterService} from './services/anlernative-conut.service'

const COUNT_FUNCTION_PROVIDERS = [
  {provide: COUNT_FUNCTIONS, useValue: CountOne, multi: true },
  {provide: COUNT_FUNCTIONS, useValue: CountTwo, multi: true }
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    OneWayCountService,
    TwoWayCountService,
    AdvancedCounterService,
    AlternativeCounterService,
    {provide: INITIAL_COUNT, useValue: 3},
    //{provide: CounterService, useFactory: CounterFactory},
    {provide: CounterService, useClass: AdvancedCounterService},
    COUNT_FUNCTION_PROVIDERS
  ]
})
export class CoreModule { }
