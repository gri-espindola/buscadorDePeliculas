import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";



const CarruselDetalles =()=>{

    const params = useParams ()
    
    const [detalle, setDetalle] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.idCarruselDetalles}?api_key=d2db916ed787e45a269779c746706c07&`)
        .then(res => res.json())
        .then(data => {
        setDetalle(data.results)
        })
    }, [])
    

    return (
        <>

            <div>
                <article key={detalle.id}>
                    <h3>{detalle.title}</h3>   
                    <h4>Sinopsis</h4>
                    <p>{detalle.overview}</p>
                    <h4>Genero</h4>
                    <p>{detalle.genre}</p>
                </article>                
                
            </div>
        </>
    )
}





export default CarruselDetalles