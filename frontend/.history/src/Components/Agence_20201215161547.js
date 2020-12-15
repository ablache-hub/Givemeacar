import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Agence() {

    
    const [dataAgence, setDataAgence] = useState({ hits: [] });

    useEffect(() => {

        async function fetchData(){
            const result = await axios('http://localhost:9090/Agence');
            setDataAgence(result.dataAgence)
        }
        fetchData();
    }, []);




    return (
        <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    )
}
