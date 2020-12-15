import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AffichageAgence from './AffichageAgence'
export default function Agence() {


    const [dataAgence, setDataAgence] = useState({ hits: [] });

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
             {console.log(dataAgence)}
             <h1>
                 hello{dataAgence.hits.}
                 </h1>
             {/* <p>Hello {dataAgence.hits}</p> */}
         </div>
    )
}
