import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {HttpClientModule} from "@angular/common/http";
import {MlbTeamService} from "./service/mlb-team-service/mlb-team.service";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [MlbTeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
