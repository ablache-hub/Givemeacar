package fr.givemeacar.controller;

import fr.givemeacar.model.Agence;
import fr.givemeacar.model.Utilisateur;
import fr.givemeacar.model.Vehicule;
import fr.givemeacar.repository.AgenceRepository;
import fr.givemeacar.services.AgenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@RestController // Controller qui permet de réaliser des requêtes Http CRUD -> Api Rest

public class AgenceController {
    
    @Autowired // instancie automatiquement le JPA
    private AgenceRepository agenceRepository;
    
    // Renvoie tous nos produits 
    @GetMapping(value="/Agence")
     List<Agence> allAgency() {
        return agenceRepository.findAll();
    }
    
    // Renvoie un item via son id  
    @GetMapping(value="/Agence/{id}")
    public Optional<Agence> agencyById(@PathVariable int id){
        return agenceRepository.findById(id);
    }
    
    // Créer un item 
    @PostMapping(value="/Agence")
    public ResponseEntity<Void> createAgency(@RequestBody Agence agence ) {
        Agence savedAgence = agenceRepository.save(agence); // on stock dans la var 'savedAgence' l'agence créée, de type Agence

        // On appelle la fonction getId de notre var savedAgence (qui fonctionne vu que c'est de type Agence donc elle a getId())
        // On injecte ensuite cette agence et son id dans notre URI (suite de l'URL)
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedAgence.getId()).toUri();

        // On return la création/build de notre URI
        return ResponseEntity.created(location).build();
    }

    // Mettre à jour un item déjà existant
    @PutMapping(value="/Agence")
    public void updateAgency(@RequestBody Agence agence ) {
         agenceRepository.save(agence);
    }

    // Supprimer un item via son Id
    @DeleteMapping(value="/Agence/{id}")
    public void deleteAgency(@PathVariable int id){
        agenceRepository.deleteById(id);
    }

    

    
}
