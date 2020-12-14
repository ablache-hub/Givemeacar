package fr.givemeacar.services;

import fr.givemeacar.model.Vehicule;
import fr.givemeacar.repository.VehiculeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AgenceServiceImpl implements AgenceService {


    /* On importe notre JPA et on utilise la fonction sur @Service pour nous retourner la fonction du JPA*/
    @Autowired
    VehiculeRepository vehiculeRepository;

    // GET stock vehicules
    @Override
    public List<Vehicule> getStockVehicules(int id) {
        return vehiculeRepository.findByAgenceId(id);
    }

    // GET vehicule dispo
    @Override
    public  List<Vehicule> getVehiculeDispo(boolean dispo) {
        return vehiculeRepository.findByDisponibilityLocation(dispo);

    }
}
