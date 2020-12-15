import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Agence() {

    
    const [dataAgence, setDataAgence] = useState({ hits: [] });

    useEffect(() => {

        async function fetchData(){
            const result = await axios('http://localhost:9090/Agence');
            setDataAgence(result.data[0].name)
        }
        fetchData();
    }, []);




    return (

        <div>
            <h1>{dataAgence}</h1>
        </div>

        // <div>
        //     {dataAgence.hits.map(item =>(
        //         <h1>{item.name}</h1>
        //     ))}
        // </div>
    //     <ul>
    //     {dataAgence.hits.map(item => (
    //       <li>
    //         <a >{item.name}</a>
    //       </li>
    //     ))}
    //   </ul>
    )
}
