package fr.givemeacar.model;
import lombok.Data;

public @Data class ContratDeLocation {

    private int startLocation;
    private int endLocation;
    private int price;
    private Vehicule vehicule;
    private Client client;


}
