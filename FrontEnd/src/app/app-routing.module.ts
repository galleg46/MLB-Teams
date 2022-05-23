import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeamPageComponent} from "./components/team-page/team-page.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";

const routes: Routes = [
  {path: "", redirectTo: '/mlbTeams', pathMatch: 'full'},
  {path: "mlbTeams", component: LandingPageComponent},
  {path: "mlbTeams/:teamId", component: TeamPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
