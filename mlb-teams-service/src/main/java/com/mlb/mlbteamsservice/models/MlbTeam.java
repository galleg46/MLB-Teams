package com.mlb.mlbteamsservice.models;

public class MlbTeam {
    private int id;
    private String nickname;
    private String name;
    private String location;
    private String abbreviation;
    private String logo;
    private String league;
    private String division;

    public MlbTeam(int id, String nickname, String name, String location,
                   String abbreviation, String logo, String league, String division) {
        this.id = id;
        this.nickname = nickname;
        this.name = name;
        this.location = location;
        this.abbreviation = abbreviation;
        this.logo = logo;
        this.league = league;
        this.division = division;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getAbbreviation() {
        return abbreviation;
    }

    public void setAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public String getLeague() {
        return league;
    }

    public void setLeague(String league) {
        this.league = league;
    }

    public String getDivision() {
        return division;
    }

    public void setDivision(String division) {
        this.division = division;
    }
}
