import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function ProfilManager() {

    const id = 7;
    const [dataUtilisateur, setDataUtilisateur] = useState([]);
    const [dataAgence, setDataAgence] = useState([]);


    useEffect(() => {

        async function fetchData() {

            const url1 = await axios('http://localhost:9090/Agence/' + id + '/Utilisateur');
            setDataUtilisateur(url1.data)
            const url2 = await axios('http://localhost:9090/Agence/' + id);
            setDataAgence(url2.data)
        }

        fetchData();
    }, []);


    return (
        <>
            <div className="card mx-5 mt-5 col-2 col-sm-4 col-md-4 col-lg-4 col-xl-4" align="center">
                <h5 className="card-title mt-3" style={{color: '#FA983A', fontSize: '2rem'}}>{dataAgence.name}</h5>
                <img
                    src="https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/171/172/171-172-202L-Black/Al-Pacino-as-Tony-Montana-in-Scarface--Vintage-Photography-Archive-Affiche-sous-cadre-standard.jpg"
                    className="card-img-top rounded-circle mx-auto d-block" alt="..."
                    style={{"width": "100px", "height": "100px"}}></img>
                <h5 className="card-title mt-3" style={{color: '#FA983A', fontSize: '1.5rem'}}>Monsieur Tony
                    Montana</h5>

                <div className="card rounded w-75 mb-4 mt-3 col align-self-center">
                    <h5 className="card-title mt-3" style={{color: '#FA983A', fontSize: '1rem'}}>Status du parc</h5>
                    <dl className="card-text ml-3 mt-3 mb-3">
                        <dd className=" card-text">
                            Nombre de vehicules: {dataAgence.nombreVehicules}
                        </dd>
                        <dd className=" card-text">
                            Vehicules disponibles: {dataAgence.vehiculeDispo}
                        </dd>
                        <dd className=" card-text">
                            Vehicules en révision: {dataAgence.vehiculeRevision}
                        </dd>
                    </dl>
                </div>

                <div className="card rounded w-75 mb-4 mt-2 col align-self-center">
                    <h5 className="card-title mt-3" style={{color: '#FA983A', fontSize: '1rem'}}>Clientèle</h5>
                    {/*<dl className=" card-text ml-3 mt-2 mb-3">*/}
                    <dl className="card-text ml-3 mt-3 mb-3">
                        {dataUtilisateur.map((current) => (
                            <dd className=" card-text">{current.id} - {current.firstName}&nbsp;{current.name}</dd>
                        ))}
                    </dl>

                </div>
                {/*<ul className=" list-group list-group-flush">
                    <li className=" list-group-item"></li>
                    <li className=" list-group-item">
                    </li>
                    <li className=" list-group-item">
                    </li>
                </ul>
                <div className=" card-body">
                    <a href="
            #" className="card-link">Card link
                    </a>
                    <a href="#" className="card-link">Another link</a>
                </div>*/}
            </div>
        </>)
}
