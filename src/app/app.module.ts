import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { StandaloneComponent } from './standalone/standalone.component';

@NgModule({
  declarations: [
    StandaloneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [StandaloneComponent]
})
export class AppModule { }
