import {Component, OnInit} from '@angular/core';
import {MlbTeamService} from "../../service/mlb-team-service/mlb-team.service";
import {MlbTeamPlayer} from "../../models/mlb-team-player";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {
  players: MlbTeamPlayer[] = [];
  isLoading = true;
  columnsToDisplay = ['name', 'details'];

  constructor(private route: ActivatedRoute, private mlbTeamService: MlbTeamService) {
  }

  ngOnInit(): void {
    let teamId = this.route.snapshot.params['teamId'];

    this.mlbTeamService.getTeamPlayers(teamId).subscribe(data => {
      console.log(data);
      this.players = data;
      this.isLoading = false;
    });
  }
}

