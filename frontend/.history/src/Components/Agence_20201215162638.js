import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Agence() {

    
    const [dataAgence, setDataAgence] = useState({ hits: [] });

    useEffect(() => {

        async function fetchData(){
            const result = await axios('http://localhost:9090/Agence');
            setDataAgence(result.data)
        }
        fetchData();
    }, []);




    return (

        <div>
            {dataAgence.hits}
        </div>
    //     <ul>
    //     {dataAgence.hits.map(item => (
    //       <li>
    //         <a >{item.name}</a>
    //       </li>
    //     ))}
    //   </ul>
    )
}
