package fr.givemeacar.model;
import lombok.Data;

public @Data class Vehicule {
    private int Id;
    private String marque;
    private String modele;
    private int price;
    private boolean state;
    private int coordonneesGPS;

}
