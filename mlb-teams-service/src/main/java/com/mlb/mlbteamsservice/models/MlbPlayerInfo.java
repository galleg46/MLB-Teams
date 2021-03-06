package com.mlb.mlbteamsservice.models;

public class MlbPlayerInfo {
    private int id;
    private String firstName;
    private String lastName;
    private String picture;
    private String primaryPosition;
    private String batSide;
    private String throwSide;
    private String number;
    private String birthCity;
    private String birthStateProvince;
    private String birthCountry;

    public MlbPlayerInfo(int id, String firstName, String lastName, String picture, String primaryPosition, String batSide, String throwSide, String number, String birthCity, String birthStateProvince, String birthCountry) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.picture = picture;
        this.primaryPosition = primaryPosition;
        this.batSide = batSide;
        this.throwSide = throwSide;
        this.number = number;
        this.birthCity = birthCity;
        this.birthStateProvince = birthStateProvince;
        this.birthCountry = birthCountry;
    }

    public int getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPicture() {
        return picture;
    }

    public String getPrimaryPosition() {
        return primaryPosition;
    }

    public String getBatSide() {
        return batSide;
    }

    public String getThrowSide() {
        return throwSide;
    }

    public String getNumber() {
        return number;
    }

    public String getBirthCity() {
        return birthCity;
    }

    public String getBirthStateProvince() {
        return birthStateProvince;
    }

    public String getBirthCountry() {
        return birthCountry;
    }
}
