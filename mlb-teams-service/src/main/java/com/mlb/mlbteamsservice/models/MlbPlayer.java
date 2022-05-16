package com.mlb.mlbteamsservice.models;

public class MlbPlayer {
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

    public MlbPlayer(int id, String firstName, String lastName, String picture, String primaryPosition, String batSide,
                     String throwSide, String number, String birthCity, String birthStateProvince, String birthCountry) {
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

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getPrimaryPosition() {
        return primaryPosition;
    }

    public void setPrimaryPosition(String primaryPosition) {
        this.primaryPosition = primaryPosition;
    }

    public String getBatSide() {
        return batSide;
    }

    public void setBatSide(String batSide) {
        this.batSide = batSide;
    }

    public String getThrowSide() {
        return throwSide;
    }

    public void setThrowSide(String throwSide) {
        this.throwSide = throwSide;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getBirthCity() {
        return birthCity;
    }

    public void setBirthCity(String birthCity) {
        this.birthCity = birthCity;
    }

    public String getBirthStateProvince() {
        return birthStateProvince;
    }

    public void setBirthStateProvince(String birthStateProvince) {
        this.birthStateProvince = birthStateProvince;
    }

    public String getBirthCountry() {
        return birthCountry;
    }

    public void setBirthCountry(String birthCountry) {
        this.birthCountry = birthCountry;
    }
}
