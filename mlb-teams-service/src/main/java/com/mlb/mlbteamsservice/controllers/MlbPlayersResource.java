package com.mlb.mlbteamsservice.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/player")
public class MlbPlayersResource {
    @Value("${api-key}")
    private String apiKey;

    String url = "http://brew-roster-svc.us-e2.cloudhub.io/api";

    RestTemplate restTemplate = new RestTemplate();

    @RequestMapping("/{playerId}")
    public String getPlayer(@PathVariable("playerId") int playerId){
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("api-key", apiKey);
        HttpEntity requestEntity = new HttpEntity(httpHeaders);

        ResponseEntity<String> response = restTemplate.exchange(url +"/player/" +playerId, HttpMethod.GET,
                                            requestEntity, String.class);

        return response.getBody();
    }
}
