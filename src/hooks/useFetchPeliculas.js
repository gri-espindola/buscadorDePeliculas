import { useState, useEffect } from "react"

const useFetchPeliculas = (categoria, tipo) =>{
    const [peliculas, setPeliculas] = useState([]);
    const [cargando, setCargando] = useState(false); 
    const [busqueda, setBusqueda] = useState("");


    useEffect(()=> {
        setCargando(true);
        fetch(`https://api.themoviedb.org/3/${tipo}/${categoria}?api_key=07b7fbf0aa198d742f7f3020308675d2&language=es`)
        .then(res=> res.json())
        .then(data => { 
        setPeliculas(data.results);
        setCargando(false);
        setBusqueda("")
    });
}, []);

  return ({
    peliculas:peliculas, 
    cargando: cargando,
    busqueda: busqueda
  })
}

export default useFetchPeliculas