import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Agence() {

    //const [dataAgence, setDataAgence] = useSate();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fecth(urldemonapi.com)
    //         const data = await response.json
    //         setDataImg(data[0].url)
    //     }
    //     fetchData();
    // }, [])
    // .then(response => {
    //     console.log(reponse)
    //     const data = await response.json
    //     setDataAgence(data[0])

    const [dataAgence, setDataAgence] = useState({ agencies: [] });

    useEffect(() => {
        const result = axios.get('http://localhost:9090/Agence');
        setDataAgence(result.data)
    })




    return (
        <div>
            {dataAgence.agencies.map(current => (
                <h1>{current.localisation}</h1>
            ))}
            
            {/* recup nos data d'agence */}
        </div>
    )
}
