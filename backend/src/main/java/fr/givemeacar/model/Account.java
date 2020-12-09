package fr.givemeacar.model;

import lombok.Data;

public @Data class Account {

    private String mail;
    private String password;
    private String pseudo;
    private String name;
    private String firstName;
    private String role;

}