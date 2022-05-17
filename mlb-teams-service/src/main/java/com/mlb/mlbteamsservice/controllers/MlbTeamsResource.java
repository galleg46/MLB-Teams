package com.mlb.mlbteamsservice.controllers;

import com.mlb.mlbteamsservice.models.MlbPlayer;
import com.mlb.mlbteamsservice.models.MlbTeam;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@RestController
@RequestMapping("/teams")
public class MlbTeamsResource {
    @Value("${api-key}")
    private String apiKey;

    RestTemplate restTemplate = new RestTemplate();
    String url = "http://brew-roster-svc.us-e2.cloudhub.io/api";

    @RequestMapping("/")
    public MlbTeam getAllTeams(){
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("api-key", apiKey);
        HttpEntity requestEntity = new HttpEntity<>(httpHeaders);

        ResponseEntity<MlbTeam> response = restTemplate.exchange(url +"/teams", HttpMethod.GET, requestEntity, MlbTeam.class);

        return response.getBody();
    }

    @RequestMapping("/{teamId}/players")
    public List<MlbPlayer> getPlayers(@PathVariable("teamId") int teamId){
        List<MlbPlayer> teamPlayers = new ArrayList<>();

        //return a getRequest to the api with the above mapping with rest template.
        //
        return teamPlayers;
    }
}
