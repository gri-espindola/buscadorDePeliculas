import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./DetallesMovie.scss"




const DetallesMovie =()=>{

    const params = useParams ()
    
    const [detalle, setDetalle] = useState({})


    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${params.idPelicula}?api_key=07b7fbf0aa198d742f7f3020308675d2&language=es`)
        .then(res=> res.json())
        .then(data => { 
        setDetalle(data);
    });
}, []);
    
    const backgroundImageURL =`https://image.tmdb.org/t/p/original${detalle.backdrop_path}`;
    const containerStyle = {backgroundImage:`url(${backgroundImageURL})`};


    return (
        <>

            <div className="image is-fullwidth p-5" style={containerStyle}>
                <div 
                className="is-flex is-align-items-center is-justify-content-center m-5" 
                id="container-detalles-movie">
                    <figure className="img-detalle">
                        <img 
                        alt={`imagen de ${detalle.title}`}
                        src={`https://image.tmdb.org/t/p/original${detalle.backdrop_path}`}
                        className= "img"/>
                        <button className="button is-white is-large mt-5" id="button-detalles">
                            <Link className="fa fa-play" id="icon-img" to={`/trailer/${detalle.id}`}>
                                <span className="ml-3 subtitle is-6 " id="icon" >Ver trailer</span>
                            </Link>
                        </button>
                    </figure>
                    
                    <article key={detalle.id} className="card-content" id="descripcion">
                        <h3 
                        className="title is-2 text-aling-start titulo" 
                        id="title-detalles">{detalle.title}</h3>   
                        <h4 className="title is-6">Resumen</h4>
                        <p id="descripcion">{detalle.overview}</p>
                        <h4 className="title is-6 mt-4">Genero</h4>
                        {detalle?.genres?.map (elemento =>
                           <li id="generos">{elemento.name}</li>
                           )}
                    </article>                
                </div>
            </div>
        </>
    )
}





export default DetallesMovie;