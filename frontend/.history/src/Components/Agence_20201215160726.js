import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Agence() {

    
    const [dataAgence, setDataAgence] = useState({ test: [] });

    useEffect(() => {
        const result = axios.get('http://localhost:9090/Agence');
        setDataAgence(result.data)
    });




    return (
        <div>
            {dataAgence.agencies.map(current => (
                <h1>{current.name}</h1>
            ))}
            
            {/* recup nos data d'agence */}
        </div>
    )
}
