package com.mlb.mlbteamsservice.models;

public class MlbPlayer {
    private int id;
    private String name;

    public MlbPlayer(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}