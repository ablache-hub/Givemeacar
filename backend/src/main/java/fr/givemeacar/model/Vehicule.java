package fr.givemeacar.model;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;

@Entity
//@Table(name="vehicule")
public @Data class Vehicule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;

    private String marque;
    private String modele;
    private int price;
    private boolean disponibilityLocation;
    private boolean inRevision;
    private int coordonneesGPS;


    @ManyToOne @JoinColumn // todo name
    @JsonManagedReference
    private Agence agence;
}
