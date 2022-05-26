import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MlbTeamService} from "../../service/mlb-team-service/mlb-team.service";
import {MlbPlayerInfo} from "../../models/mlb-player-info";

@Component({
  selector: 'app-player-info-page',
  templateUrl: './player-info-page.component.html',
  styleUrls: ['./player-info-page.component.scss']
})
export class PlayerInfoPageComponent implements OnInit {

  playerInfo: MlbPlayerInfo | undefined;
  isLoading = true;
  delayContent = false;

  constructor(private route: ActivatedRoute, private mlbTeamService: MlbTeamService) { }

  ngOnInit(): void {
    let playerId = this.route.snapshot.params['playerId'];

    this.mlbTeamService.getPlayerInfo(playerId).subscribe(data => {
      this.playerInfo = data;
      this.isLoading = false;
      this.delayContent = true;
    })
  }

}
