import React from 'react'

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
        const fetchData = async () => {
            const response = await fecth(urldemonapi.com)
            const data = await response.json
            setDataImg(data[0].url)
        }
        fetchData();
    }, [])


    return (
        <div>
            {/* recup nos data d'agence */}
        </div>
    )
}
