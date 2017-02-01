import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {VerbService} from "./verb.service";
import { VerbPanelComponent } from './verb-panel/verb-panel.component';
import {WindowRefService} from "./window.service";


@NgModule({
  declarations: [
    AppComponent,
    VerbPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [VerbService,  WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
