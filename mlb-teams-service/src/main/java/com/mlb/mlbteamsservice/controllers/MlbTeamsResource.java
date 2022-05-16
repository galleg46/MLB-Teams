package com.mlb.mlbteamsservice.controllers;

import com.mlb.mlbteamsservice.models.MlbPlayer;
import com.mlb.mlbteamsservice.models.MlbTeam;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/teams")
public class MlbTeamsResource {

    @RequestMapping("/")
    public List<MlbTeam> getAllTeams(){
        List<MlbTeam> teams = new ArrayList<>();

        teams.add(new MlbTeam(133, "Athletics", "Oakland Athletics", "Oakland",
                                "OAK", "null", "American League", "American League West"));
        teams.add(new MlbTeam(158, "Brewers", "Milwaukee Brewers", "Milwaukee",
                "MIL", "null", "National League", "National League Central"));

        return teams;
    }

    @RequestMapping("/{teamId}/players")
    public List<MlbPlayer> getPlayers(@PathVariable("teamId") int teamId){
        //test variable to see if teamId matches the brewers
        int brewerId = 158;

        if (teamId == brewerId){
            return Collections.singletonList(
                    new MlbPlayer(592885, "Hardcoded Yelich")
            );
        }
        else
            return Collections.singletonList(
                    new MlbPlayer(0000, "nothing nothing")
            );
    }
}
