import { Component, OnInit } from '@angular/core';
import { MlbTeamService } from "../../service/mlb-team-service/mlb-team.service";
import { MlbTeam } from "../../models/mlb-team";
import {MlbTeamPlayer} from "../../models/mlb-team-player";
import {MlbPlayerInfo} from "../../models/mlb-player-info";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  teams: MlbTeam[];
  players: MlbTeamPlayer[];
  playerInfo: MlbPlayerInfo | undefined;

  constructor(private mlbTeamService: MlbTeamService,) {
    this.teams = [];
    this.players = [];
  }

  ngOnInit(): void {
    this.mlbTeamService.getAllTeams().subscribe(data => {
      this.teams = data;
    });

  }

  getTeamPlayers(teamId: number): void{
    this.mlbTeamService.getTeamPlayers(teamId).subscribe(data => {
      this.players = data;
    })

    var x = document.getElementById("players");
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
