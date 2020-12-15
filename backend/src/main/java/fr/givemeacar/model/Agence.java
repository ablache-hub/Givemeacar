package fr.givemeacar.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

//import fr.givemeacar.model.Vehicule;

import javax.persistence.*;
import java.util.List;


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

    @OneToMany(mappedBy = "agence")
    @JsonBackReference
    private List<Vehicule> stockVehicules; //todo

    @OneToMany(mappedBy = "agence")
    @JsonBackReference
    private List<Utilisateur> clientele;






    /* METHODS
    public void ajouterVehicule(){

    }

    public void supprimerVehicule(){

    }*/
}
