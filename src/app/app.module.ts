import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {VerbService} from "./verb.service";
import { VerbPanelComponent } from './verb-panel/verb-panel.component';
import {Verb} from "./verb";


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
  providers: [VerbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
