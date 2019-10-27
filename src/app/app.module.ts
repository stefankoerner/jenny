import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AdsenseModule} from "ng2-adsense";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // shown passing global defaults (optional)
    AdsenseModule.forRoot({
      adClient: 'ca-pub-7925809755049590',
      adSlot: 4570773814,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
