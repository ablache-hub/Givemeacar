import Agence from './Components/Agence'
import Header from './Components/Header'
import AffichageAgence from './Components/AffichageAgence'
import AddVehiculePopup from './Components/AddVehiculePopup'
import './main.css'
import ProfilManager from "./Components/ProfilManager"
import ManagerInterface from './Pages/ManagerInterface'

function App() {
    return (
        <div className="App">
            {/* <Agence /> */}
            <Header/>
            <ManagerInterface/>
            {/*<AddVehiculePopup/>*/}

            {/*<ProfilManager/>*/}
        </div>
    );
}

export default App;
