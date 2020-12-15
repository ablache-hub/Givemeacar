import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AffichageAgence from './AffichageAgence'
export default function Agence() {


    const [dataAgence, setDataAgence] = useState({ hits: [] });

    useEffect(() => {

        async function fetchData() {
            const result = await axios('http://localhost:9090/Agence');
            console.log(result)
            setDataAgence(result.data)
        }
        fetchData();
    }, []);




    return (
         
    )
}
