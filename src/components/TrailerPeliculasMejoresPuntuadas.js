import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";




const TrailerPeliculasMejoresPuntuadas =({id, categoria})=>{

    const params = useParams ()
    
    const [detalle, setDetalle] = useState([])


    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${params.PeliculasMejoresPuntuadas}/videos?api_key=6a93319b2d78795675b8bd9aa0965a95&language=es-ES`)
        .then(res=> res.json())
        .then(data => { 
        setDetalle(data.result);
    });
}, []);
    
    const backgroundImageURL =`https://image.tmdb.org/t/p/original${detalle.backdrop_path}`;
    const containerStyle = {backgroundImage:`url(${backgroundImageURL})`};


    return (
        <>

            <div className="image is-fullwidth p-5" style={containerStyle}>
                <div className="is-flex is-align-items-center is-justify-content-center m-5">
                        <button className="button is-white is-large mt-5">
                            <Link className="fa fa-play" id="icon-img" to={`/Home/${categoria}/${id}`}>
                                <AiFillCloseCircle/>
                            </Link>
                        </button>
                    
                    <article key={detalle.id} className="card-content">
                        <source src={detalle.id}></source>
                    </article>                
                </div>
            </div>
        </>
    )
}





export default TrailerPeliculasMejoresPuntuadas