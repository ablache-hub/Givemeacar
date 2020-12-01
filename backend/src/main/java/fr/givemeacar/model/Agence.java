package fr.givemeacar.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import java.util.List;


@Entity // table sql
public @Data class Agence {


    // Id auto-incrémenté
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    private String name;
    private String localisation;
    private int nombreVehicules;
    private int vehiculeDispo;
    private int vehiculeRevision;


    //List<Vehicule> stock;
    //List<Client> clientele;



    //List<Vehicule> stock;
    //List<Client> clientele;


    /* METHODS
    public void ajouterVehicule(){

    }

    public void supprimerVehicule(){

    }*/
}
