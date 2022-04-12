import { useParams } from "react-router-dom";
//import { useState} from "react";
import useFetchTrending from "../hooks/useFetchTrending";


const CarruselDetalles =()=>{

    const params = useParams ()
    const detallesCarrusel = useFetchTrending(params)
    

    return (
        <>

            <div>
                <article key={detallesCarrusel.id}>
                    <h3>{detallesCarrusel.title}</h3>
                    <h4>Sinopsis</h4>
                    <p>{detallesCarrusel.overview}</p>
                    <h4>Genero</h4>
                    <p>{detallesCarrusel.genre}</p>
                </article>                
                
            </div>
        </>
    )
}





export default CarruselDetalles