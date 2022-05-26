import {Component, OnInit} from '@angular/core';
import { MlbTeamService } from "../../service/mlb-team-service/mlb-team.service";
import { MlbTeam } from "../../models/mlb-team";

import {MlbLeague} from "../../models/mlb-league";
import {MlbDivisions} from "../../models/mlb-divisions";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Router} from "@angular/router";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class LandingPageComponent implements OnInit {

  teams: MlbTeam[] = [];
  leagues: MlbLeague[] = [];
  divisions: MlbDivisions[] = [];
  columnsToDisplay = ['logo','name', 'leage', 'division', 'details'];

  constructor(private mlbTeamService: MlbTeamService, private router: Router) {
  }

  ngOnInit(): void {
    this.mlbTeamService.getAllTeams().subscribe(data => {
      this.teams = data;
    });



    this.leagues = [
      {league: "American League", value: "American League"},
      {league: "National League", value: "National League"}
    ];

    this.divisions = [
      {division: "American League West"},
      {division: "American League Central"},
      {division: "American League East"},
      {division: "National League West"},
      {division: "National League Central"},
      {division: "National League East"}
    ];
  }
}
