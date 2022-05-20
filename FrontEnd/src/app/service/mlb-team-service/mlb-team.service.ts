import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MlbTeam } from "../../models/mlb-team";
import {MlbTeamPlayer} from "../../models/mlb-team-player";
import {MlbPlayerInfo} from "../../models/mlb-player-info";

@Injectable()
export class MlbTeamService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8081';
  }

  public getAllTeams(): Observable<MlbTeam[]>{
    return this.http.get<MlbTeam[]>(this.url +"/teams/");
  }

  public getTeamPlayers(teamId: number): Observable<MlbTeamPlayer[]>{
    return this.http.get<MlbTeamPlayer[]>(this.url +"/teams/" +teamId +"/players");
  }

  public getPlayerInfo(playerId: number): Observable<MlbPlayerInfo>{
    return this.http.get<MlbPlayerInfo>(this.url +"/player/" +playerId);
  }
}
