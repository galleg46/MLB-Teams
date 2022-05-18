import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MlbTeam } from "../../models/mlb-team";

@Injectable()
export class MlbTeamService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8081';
  }

  public getAllTeams(): Observable<MlbTeam[]>{
    return this.http.get<MlbTeam[]>(this.url +"/teams/");
  }
}
