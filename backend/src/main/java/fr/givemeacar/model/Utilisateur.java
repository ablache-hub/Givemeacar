package fr.givemeacar.model;

import java.util.ArrayList;

public class Utilisateur extends Account {

    String adresse;
    ArrayList<Vehicule> historique = new ArrayList<Vehicule>();

    public Utilisateur(int id, String mail, String password, String pseudo, String name, String firstName, String adresse) {
        super();
        this.adresse = adresse;

    }

}
