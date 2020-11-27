package fr.givemeacar.model;

import java.util.ArrayList;

public class Client extends Account {

    String adresse;
    ArrayList<Vehicule> historique = new ArrayList<Vehicule>();

    public Client(int id, String mail, String password, String pseudo, String name, String firstName, String adresse) {
        super();
        this.adresse = adresse;

    }

}
