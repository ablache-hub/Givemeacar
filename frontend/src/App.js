import Agence from './Components/Agence'
import AffichageAgence from './Components/AffichageAgence'
import AddVehiculePopup from './Components/AddVehiculePopup';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="App">
      <AddVehiculePopup/>
     <Agence />

    </div>
  );
}

export default App;
