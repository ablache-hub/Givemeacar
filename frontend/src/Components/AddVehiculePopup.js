import React from 'react'
import ReactDOM from 'react-dom'

export default function AddVehiculePopup() {
 
    const onSubmit  = () => {};
    
    return (
        <form class="row g-3 needs-validation">
        <h1>Ajouter un véhicule</h1>
        <label htmlFor="" > marque : </label>
        <input type="marque"/>
        <label htmlFor=""> type de voiture :  </label>
        <select name="type de voiture" id="">
        <option value="">Selectionnez type de voiture</option>
            <option value="">Citadine</option>
            <option value="">Berline</option>
        </select>

        <label for="formFileSm" class="form-label">photo du véhicule :</label>
  <input class="form-control form-control-sm" id="formFileSm" type="file"></input>

  <label for="validationTextarea" class="form-label">Commentaires :</label>
    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>

        <button> Submit </button>
        
        </form>
    )
}
