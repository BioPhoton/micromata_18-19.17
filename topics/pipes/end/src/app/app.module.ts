import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { UppercasePipePipe } from './pipes/uppercase-pipe.pipe';
import { ToMsPipePipe } from './pipes/to-ms-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UppercasePipePipe,
    ToMsPipePipe,
  ],
  exports: [],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
