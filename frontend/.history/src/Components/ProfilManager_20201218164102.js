import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function ProfilManager() {

    const id = 7;
    const [dataManager, setDataManager] = useState([]);
    const [dataAgence, setDataAgence] = useState([]);


    useEffect(() => {

        async function fetchData() {

            const url1 = await axios('http://localhost:9090/agences/' + id + '/vehicules/');
            setDataManager(url1.data)
            const url2 = await axios('http://localhost:9090/Agence/' + id);
            setDataAgence(url2.data)
        }

        fetchData();
    }, []);


    return (
        <>
            <div className="card  mt-4  col-sm-4  text-center " >

                <h5 className="card-title" style={{color: '#FA983A', fontSize: '2rem'}}>{dataAgence.name}</h5>
                <img
                    src="https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/171/172/171-172-202L-Black/Al-Pacino-as-Tony-Montana-in-Scarface--Vintage-Photography-Archive-Affiche-sous-cadre-standard.jpg"
                    className="card-img-top rounded-circle mx-auto d-block" alt="..."
                    style={{"width": "100px", "height": "100px"}}></img>
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text"></p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"></li>
                    <li className="list-group-item">
                    </li>
                    <li className="list-group-item">{dataManager.map((current) => (
                        <div>
                            <dd>{current.marque}</dd>
                        </div>
                    ))}
                    </li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </>)
}
