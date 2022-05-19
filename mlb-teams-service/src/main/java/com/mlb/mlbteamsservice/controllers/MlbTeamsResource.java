package com.mlb.mlbteamsservice.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/teams")
public class MlbTeamsResource {
    @Value("${api-key}")
    private String apiKey;

    RestTemplate restTemplate = new RestTemplate();
    String url = "http://brew-roster-svc.us-e2.cloudhub.io/api";

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/")
    public String getAllTeams(){
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("api-key", apiKey);
        HttpEntity requestEntity = new HttpEntity<>(httpHeaders);

        ResponseEntity<String> response = restTemplate.exchange(url +"/teams", HttpMethod.GET, requestEntity, String.class);

        return response.getBody();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/{teamId}/players")
    public String getTeamPlayers(@PathVariable("teamId") int teamId){
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("api-key", apiKey);
        HttpEntity requestEntity = new HttpEntity<>(httpHeaders);

        ResponseEntity<String> response = restTemplate.exchange(url +"/teams/" +teamId +"/players", HttpMethod.GET,
                                            requestEntity, String.class);

        return response.getBody();
    }
}
