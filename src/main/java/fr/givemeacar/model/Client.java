package fr.givemeacar.model;

public class Client extends Account {

    String adresse;

    public Client(int id, String mail, String password, String pseudo, String name, String firstName, String adresse) {
        super();
        this.adresse = adresse;


    }

}
