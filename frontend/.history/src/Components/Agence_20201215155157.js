import React, {useState, useEffect} from 'react'
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

    //const [dataAgence, setDataAgence] = useSate();

    useEffect(() => {
        axios.get('http://localhost:9090/Agence')
            .then(reponse => {
                console.log(reponse)
                setDataAgence = 
            })
        }
    )


    return (
        <div>
            
            {/* recup nos data d'agence */}
        </div>
    )
}
