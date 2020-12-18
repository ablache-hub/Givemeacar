import Agence from './Components/Agence'
import Header from './Components/Header'
import AffichageAgence from './Components/AffichageAgence'
import AddVehiculePopup from './Components/AddVehiculePopup'
import ProfilManager from "./Components/ProfilManager"
import ManagerInterface from './Pages/ManagerInterface'
import './Style/style.scss'
import StockVehicule from '../.history/src/Components/StockVehicule_20201218153021';

function App() {
    return (
        <div className="App">
            {/* <Agence /> */}
            <Header/>
            <StockVehicule/>
            {/* <ManagerInterface/> */}
            {/* <AddVehiculePopup/> */}
            {/* <ProfilManager/> */}
        </div>
    );
}

export default App;
