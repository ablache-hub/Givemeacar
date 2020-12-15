import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Agence() {

    state = 
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
