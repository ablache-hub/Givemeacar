package fr.givemeacar.controller;

import fr.givemeacar.model.Agence;
import fr.givemeacar.model.ContratLoc;
import fr.givemeacar.repository.ContratLocRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
public class ContratLocController {

    @Autowired
    private ContratLocRepository contratLocRepository;



    // Renvoie tous nos produits
    @GetMapping(value="/Contrat")
    List<ContratLoc> allContrat() {
        return contratLocRepository.findAll();
    }

    // Renvoie un item via son id
    @GetMapping(value="/Contrat/{id}")
    public Optional<ContratLoc> contratById(@PathVariable int id){


        return contratLocRepository.findById(id);


    }


    // Créer un item
    @PostMapping(value="/Contrat")
    public ResponseEntity<Void> createContrat(@RequestBody ContratLoc contratLoc ) {
        ContratLoc savedContrat = contratLocRepository.save(contratLoc); // on stock dans la var 'savedAgence' l'agence créée, de type Agence

        // On appelle la fonction getId de notre var savedAgence (qui fonctionne vu que c'est de type Agence donc elle a getId())
        // On injecte ensuite cette agence et son id dans notre URI (suite de l'URL)
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedContrat.getId()).toUri();

        // On return la création/build de notre URI
        return ResponseEntity.created(location).build();
    }

    // Mettre à jour un item déjà existant
    @PutMapping(value="/Contrat")
    public void updateContrat(@RequestBody ContratLoc contratLoc ) {
        contratLocRepository.save(contratLoc);
    }

    // Supprimer un item via son Id
    @DeleteMapping(value="/Contrat/{id}")
    public void deleteContrat(@PathVariable int id){

        contratLocRepository.deleteById(id);


    }

}
