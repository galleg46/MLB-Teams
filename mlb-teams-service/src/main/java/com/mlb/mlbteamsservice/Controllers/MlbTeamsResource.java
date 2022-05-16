package com.mlb.mlbteamsservice.Controllers;

import com.mlb.mlbteamsservice.models.MlbPlayer;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/teams")
public class MlbTeamsResource {

    @RequestMapping("/{teamId}/players")
    public List<MlbPlayer> getPlayers(@PathVariable("teamId") int teamId){
        //test variable to see if teamId matches the brewers
        int brewerId = 158;

        if (teamId == brewerId){
            return Collections.singletonList(
                    new MlbPlayer(592885, "Hardcoded", "Yelich",
                            "https://content.mlb.com/images/headshots/current/60x60/592885@4x.png", "LF",
                            "L", "R", "22", "Thousand Oaks", "CA", "USA")
            );
        }
        else
            return Collections.singletonList(
                    new MlbPlayer(0000, "nothing", "nothing",
                            "null", "bench", "R", "L", "0",
                            "the moon", "CA", "USA")
            );
    }
}
