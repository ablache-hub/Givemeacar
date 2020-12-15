import React from 'react'
import axios from 'axios'

export default function Agence() {

    const [dataAgence, setDataAgence] = useSate();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fecth(urldemonapi.com)
    //         const data = await response.json
    //         setDataImg(data[0].url)
    //     }
    //     fetchData();
    // }, [])

    const [dataAgence, setDataAgence] = useSate();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(reponse => {
                console.log(reponse)
                
                this.setState({posts: reponse.data.slice(0,6)}) // une fois les données récupérées, on modifie le state en remplissant notre array posts de nos données
            })
        }
        fetchData();
    }, [])


    return (
        <div>
            {/* recup nos data d'agence */}
        </div>
    )
}
