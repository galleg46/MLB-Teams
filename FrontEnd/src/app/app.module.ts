import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TeamPageComponent } from './components/team-page/team-page.component';
import {MlbTeamService} from "./service/mlb-team-service/mlb-team.service";

import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { PlayerInfoPageComponent } from './components/player-info-page/player-info-page.component';
import {MatCardModule} from "@angular/material/card";
import {MatSortModule} from "@angular/material/sort";



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TeamPageComponent,
    PlayerInfoPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSortModule
  ],
  providers: [MlbTeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
