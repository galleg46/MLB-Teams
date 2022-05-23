import {Component, OnInit} from '@angular/core';
import { MlbTeamService } from "../../service/mlb-team-service/mlb-team.service";
import { MlbTeam } from "../../models/mlb-team";
import {MlbTeamPlayer} from "../../models/mlb-team-player";
import {MlbPlayerInfo} from "../../models/mlb-player-info";
import {MlbLeague} from "../../models/mlb-league";
import {MlbDivisions} from "../../models/mlb-divisions";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {map} from "rxjs";


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
  players: MlbTeamPlayer[] = [];
  playerInfo: MlbPlayerInfo | undefined;
  leagues: MlbLeague[] = [];
  divisions: MlbDivisions[] = [];
  columnsToDisplay = ['logo','name', 'leage', 'division', 'details'];

  datasource = new MatTableDataSource();
  dataSourceFilters = new MatTableDataSource();

  allDataFetched: boolean = false;

  constructor(private mlbTeamService: MlbTeamService, private router: Router) {
  }

  ngOnInit(): void {
    this.mlbTeamService.getAllTeams().subscribe(data => {
      this.teams = data;
      console.log(this.teams)
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

  getTeamPlayers(teamId: number): void{
    this.mlbTeamService.getTeamPlayers(teamId).subscribe(data => {
      this.players = data;
      this.allDataFetched = true;
    })

    console.log('row clicked: ', teamId);
    console.log(this.players);
  }

  getPlayerInfo(playerId: number): void{
    this.mlbTeamService.getPlayerInfo(playerId).subscribe(data => {
      this.playerInfo = data;
    })

    var x = document.getElementById("playerInfo");
    // @ts-ignore
    if(x.style.display == "none") {
      // @ts-ignore
      x.style.display = "block";
    }
    else {
      // @ts-ignore
      x.style.display = "none";
    }
  }

}
