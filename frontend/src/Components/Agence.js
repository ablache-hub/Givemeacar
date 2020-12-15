import React, {useState, useEffect} from 'react'
import axios from 'axios'
import AffichageAgence from './AffichageAgence'
import './Agence.css'

export default function Agence() {


    const [dataAgence, setDataAgence] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const result = await axios('http://localhost:9090/Agence');
            setDataAgence(result.data)
            //console.log(result)
        }

        fetchData();
    }, []);


    return (
        <div>
            {dataAgence.map((current) => (
                <dl>
                    <dd>
                        <dd>Id</dd>
                        <dd>{current.id}</dd>
                    </dd>
                    <dd>
                        <dd>Lieu</dd>
                        <dd>{current.localisation}</dd>
                    </dd>
                    <dd>
                        <dd>Nombre de vehicules</dd>
                        <dd>{current.nombreVehicules}</dd>
                    </dd>
                    <dd>
                        <dd>Vehicules disponibles</dd>
                        <dd>{current.vehiculeDispo}</dd>
                    </dd>
                    <dd>
                        <dd>Vehicules en révision</dd>
                        <dd>{current.vehiculeRevision}</dd>
                    </dd>
                </dl>
            ))}
        </div>
    )
}
