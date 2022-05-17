package com.mlb.mlbteamsservice.controllers;

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

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/teams")
public class MlbTeamsResource {
    @Value("${api-key}")
    private String apiKey;

    RestTemplate restTemplate = new RestTemplate();
    String url = "http://brew-roster-svc.us-e2.cloudhub.io/api";

    @RequestMapping("/")
    public String getAllTeams(){
        List<MlbTeam> allTeams = new ArrayList<>();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("api-key", apiKey);
        HttpEntity requestEntity = new HttpEntity<>(httpHeaders);

        ResponseEntity<String> response = restTemplate.exchange(url +"/teams", HttpMethod.GET, requestEntity, String.class);

        return response.getBody();
    }

    @RequestMapping("/{teamId}/players")
    public String getPlayers(@PathVariable("teamId") int teamId){
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("api-key", apiKey);
        HttpEntity requestEntity = new HttpEntity<>(httpHeaders);

        ResponseEntity<String> response = restTemplate.exchange(url +"/teams/" +teamId +"/players", HttpMethod.GET,
                                            requestEntity, String.class);

        return response.getBody();
    }
}
