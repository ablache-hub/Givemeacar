import Agence from './Components/Agence'
import AffichageAgence from './Components/AffichageAgence'
import AddVehiculePopup from './Components/AddVehiculePopup'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfilManager from "./Components/ProfilManager"
import ManagerInterface from './Pages/ManagerInterface'

function App() {
    return (
        <div className="App">
            {/* <Agence /> */}
            <ManagerInterface/>
            {/*<AddVehiculePopup/>*/}

            {/*<ProfilManager/>*/}
        </div>
    );
}

export default App;
