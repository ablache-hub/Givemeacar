package fr.givemeacar.controller;
import fr.givemeacar.model.Utilisateur;
import fr.givemeacar.model.Agence;
import fr.givemeacar.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

public class UtilisateurController {

    @Autowired // instancie automatiquement le JPA
    private UtilisateurRepository utilisateurRepository;

    // Renvoie tous nos produits
    @GetMapping(value = "/Utilisateur")
    List<Utilisateur> allUtilisateurs() {

        return utilisateurRepository.findAll();
    }

    // Renvoie un item via son id
    @GetMapping(value = "/Utilisateur/{id}")
    public Optional<Utilisateur> utilisateurById(@PathVariable int id) {
        return utilisateurRepository.findById(id);

    }

    // Mettre à jour un item déjà existant
    @PutMapping(value = "/Utilisateur")
    public void updateUtilisateur(@RequestBody Utilisateur utilisateur) {


        utilisateurRepository.save(utilisateur);
    }

    // Supprimer un item via son Id
    @DeleteMapping(value = "/Utilisateur/{id}")
    public void deleteUtilisateur(@PathVariable int id) {


        utilisateurRepository.deleteById(id);
    }

    @PostMapping(value = "/Utilisateur")
    public void postUtilisateur(@RequestBody Utilisateur utilisateur) {


        utilisateurRepository.save(utilisateur);

    }

}
