import React from 'react'
import ReactDOM from 'react-dom'

export default function AddVehiculePopup() {
 
    const onSubmit  = () => {};
    
    return (<div className="bg-primary">
<div class="mb-3 ">
        <nav className ="navbar navbar-expand-lg navbar-light bg-light">
     <div className ="container-fluid">
    <a className ="navbar-brand" href="#">Navbar</a>
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>




        

        
        <form className="d-flex align-items-center flex-column " >
        <h1 className="mb-auto p-2 bd-highlight">Ajouter un véhicule</h1>
        <label htmlFor="" className="form-label"  > marque : </label>
        <input type="marque" placeholder="ex:mercedes" className="form-control-sm " id="inputGroup-sizing-sm"/>
        <label htmlFor=""> type de voiture :  </label>
        <select name="type de voiture" id="">
        <option value="">Selectionnez type de voiture</option>
            <option value="">Citadine</option>
            <option value="">Berline</option>
        </select>

        <label for="formFileSm" className="form-label">photo du véhicule :</label>
  <input className="form-control_sm" id="formFileSm" type="file"></input>

  <label for="validationTextarea" className="form-label">Commentaires :</label>
    <textarea  className="form-control" id="validationTextarea" placeholder="ajouter un commentaire" required></textarea>

        <button className="btn btn-secondary" type = "button"> Ajouter </button>
        
        </form>
        </div>
        
        </div>
    )
}
