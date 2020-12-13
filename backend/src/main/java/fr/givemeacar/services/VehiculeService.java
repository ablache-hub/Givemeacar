package fr.givemeacar.services;

import fr.givemeacar.model.Vehicule;

import java.util.List;

public interface VehiculeService {

    // On créer une fonction qui va permettre de trouver l'agence
    public List<Vehicule> findByAgence(int id);
}
