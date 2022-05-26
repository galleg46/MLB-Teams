import {Component, OnInit} from '@angular/core';
import { MlbTeamService } from "../../service/mlb-team-service/mlb-team.service";
import { MlbTeam } from "../../models/mlb-team";




@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

  teams: MlbTeam[] = [];
  columnsToDisplay = ['logo','name', 'leage', 'division', 'details'];
  sortedTeams: MlbTeam[];

  constructor(private mlbTeamService: MlbTeamService) {
    this.sortedTeams = this.teams.slice();
  }

  ngOnInit(): void {
    this.mlbTeamService.getAllTeams().subscribe(data => {
      this.teams = data;
    });
  }
}
