package fr.givemeacar.controller;

import fr.givemeacar.model.Contrat;
import fr.givemeacar.repository.ContratRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
public class ContratController {

    @Autowired
    private ContratRepository contratRepository;



    // Renvoie tous nos produits
    @GetMapping(value="/Contrat")
    List<Contrat> allContrat() {
        return contratRepository.findAll();
    }

    // Renvoie un item via son id
    @GetMapping(value="/Contrat/{id}")
    public Optional<Contrat> contratById(@PathVariable int id){


        return contratRepository.findById(id);


    }

    // Créer un item
    @PostMapping(value="/Contrat")
    public ResponseEntity<Void> createContrat(@RequestBody Contrat contrat) {

        Contrat savedContrat = contratRepository.save(contrat);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedContrat.getId()).toUri();

        return ResponseEntity.created(location).build();
    }

    // Mettre à jour un item déjà existant
    @PutMapping(value="/Contrat")
    public void updateContrat(@RequestBody Contrat contrat) {
        contratRepository.save(contrat);
    }

    // Supprimer un item via son Id
    @DeleteMapping(value="/Contrat/{id}")
    public void deleteContrat(@PathVariable int id){

        contratRepository.deleteById(id);

    }

}
