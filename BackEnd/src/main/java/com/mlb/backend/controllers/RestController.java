package com.mlb.backend.controllers;

import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@org.springframework.web.bind.annotation.RestController
public class RestController {

    @GetMapping(value ="/teams")
    public List<Object> getTeams() {
        String url = "http://brew-roster-svc.us-e2.cloudhub.io/api";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();

        Object[] teams = restTemplate.getForObject(url, Object[].class);

        return Arrays.asList(teams);
    }

}
