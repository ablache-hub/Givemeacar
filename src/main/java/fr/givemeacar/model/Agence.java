package fr.givemeacar.model;

import lombok.Data;

import java.util.List;


public @Data class Agence {

    int id;
    String name;
    String Localisation;
    int nombreVehicules;
    int vehiculeDispo;
    int vehiculeRevision;

    List<Vehicule> stock;
    List<Client> clientele;


    // METHODS
    public void ajouterVehicule(){

    }

    public void supprimerVehicule(){

    }
}
