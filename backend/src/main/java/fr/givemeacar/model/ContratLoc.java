package fr.givemeacar.model;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public @Data class ContratLoc {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int startLocation;
    private int endLocation;
    private int price;
    private Vehicule vehicule;
    private Utilisateur client;


}
