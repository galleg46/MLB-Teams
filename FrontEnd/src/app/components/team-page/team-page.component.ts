import {Component, OnInit, Output} from '@angular/core';
import {MlbTeamService} from "../../service/mlb-team-service/mlb-team.service";
import {MlbTeamPlayer} from "../../models/mlb-team-player";
import {ActivatedRoute} from "@angular/router";
import {MlbPlayerInfo} from "../../models/mlb-player-info";

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {
  players: MlbTeamPlayer[] = [];
  playerInfo: MlbPlayerInfo | undefined;
  columnsToDisplay = ['picture', 'number', 'name', 'primaryPosition', 'batSide', 'throwSide', 'originallyFrom'];

  constructor(private route: ActivatedRoute, private mlbTeamService: MlbTeamService) {
  }

  ngOnInit(): void {
    let teamId = this.route.snapshot.params['teamId'];

    this.mlbTeamService.getTeamPlayers(teamId).subscribe(data => {
      console.log(data);
      this.players = data;
    });
  }

  getPlayerInfo(playerId: number): void {
    this.mlbTeamService.getPlayerInfo(playerId).subscribe(data => {
      console.log(data);
      this.playerInfo = data;
    })
  }
}

