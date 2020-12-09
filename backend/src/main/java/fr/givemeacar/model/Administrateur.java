package fr.givemeacar.model;

import fr.givemeacar.unuse.Manager;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class Administrateur extends Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    public Administrateur() {
        super();
    }



    // CREATION DES AGENCES & MANAGERS

    public Agence createAgencyAccount(){
        return null;
    }

    public Manager createManagerAccount(){
        return null;
    }

}
