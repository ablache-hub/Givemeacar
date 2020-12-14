package fr.givemeacar.services;

import fr.givemeacar.model.Vehicule;
import fr.givemeacar.repository.VehiculeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgenceServiceImpl implements AgenceService {


    /* On importe notre JPA et on utilise la fonction sur @Service pour nous retourner la fonction du JPA*/
    @Autowired
    VehiculeRepository vehiculeRepository;

    @Override
    public List<Vehicule> getStockVehicules(int id) {
        return vehiculeRepository.findByAgenceId(id);
    }
}
