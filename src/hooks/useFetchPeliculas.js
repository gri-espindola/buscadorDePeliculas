import { useState, useEffect } from "react"

const useFetchPeliculas = (categoria, tipo) =>{
    const [peliculas, setPeliculas] = useState([]);
    const [cargando, setCargando] = useState(false); 


    useEffect(()=> {
        setCargando(true);
        fetch(`https://api.themoviedb.org/3/${tipo}/${categoria}?api_key=07b7fbf0aa198d742f7f3020308675d2&language=es`)
        .then(res=> res.json())
        .then(data => { 
        setPeliculas(data.results);
        setCargando(false);
    });
}, []);

  return ({
    peliculas:peliculas, 
    cargando: cargando,
  })
}

export default useFetchPeliculas