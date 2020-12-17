import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function ProfilManager() {


    const [dataManager, setDataManager] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const result = await axios('http://localhost:9090/Agence/2');
            setDataManager(result.data)
            //console.log(result)
        }

        fetchData();
    }, []);


    return (
        <div className="card container round mx-5 mt-4 col-2 col-sm-4 col-md-4 col-lg-4 col-xl-4"
             align="center">
            <h5 className="card-title" style={{color: '#FA983A', fontSize: '2rem'}}>{dataManager.localisation}</h5>
            <img
                src="https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/171/172/171-172-202L-Black/Al-Pacino-as-Tony-Montana-in-Scarface--Vintage-Photography-Archive-Affiche-sous-cadre-standard.jpg"
                className="card-img-top rounded-circle mx-auto d-block" alt="..."
                style={{"width": "100px", "height": "100px"}}></img>
            <div className="card-body">
                <h5 className="card-title">{dataManager.id}</h5>
                <p className="card-text"></p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"></li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>

        </div>)
}
