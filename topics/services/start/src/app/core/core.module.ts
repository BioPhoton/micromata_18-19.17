import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OneWayCountService} from './services/one-way-count.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    OneWayCountService
  ]
})
export class CoreModule { }
