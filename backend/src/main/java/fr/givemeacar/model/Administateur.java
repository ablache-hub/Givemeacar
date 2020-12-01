package fr.givemeacar.model;

import lombok.Data;

public @Data class Administateur extends Account {

    public Administateur() {
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
