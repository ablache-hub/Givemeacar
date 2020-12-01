package fr.givemeacar.model;

import lombok.Data;

import java.util.List;

@Entity // table sql
public @Data class Agence {

    // Id auto-incrémenté
    @Id
    @GeneratedValue(strategy = generationType.IDENTITY)        
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
