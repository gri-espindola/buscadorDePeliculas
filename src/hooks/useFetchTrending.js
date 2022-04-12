import { useEffect, useState } from "react";

const useFetch = () => {

    const [elemento, setElemento] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=d2db916ed787e45a269779c746706c07&language=es-Es&page=1`)
        .then(res => res.json())
        .then(data =>{
            setElemento(data.results)
        })

    }, [])

    console.log(elemento)
    
    return elemento
}

export default useFetch;