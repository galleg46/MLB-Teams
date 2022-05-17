import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { MlbTeam } from "../../models/mlb-team";

@Injectable()
export class MlbTeamService {

  private url: string;
  private headers: HttpHeaders;


  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8081/teams/';
    this.headers = new HttpHeaders().set("api-key", "0ca80ddc-63f6-476e-b548-e5fb0934fc4b");
  }

  public getAllTeams(): Observable<MlbTeam[]>{
    return this.http.get<MlbTeam[]>(this.url, {headers: this.headers});
  }
}
