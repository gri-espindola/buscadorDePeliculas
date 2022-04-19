import useFetchPeliculas from "../hooks/useFetchPeliculas";
import './Ultimos-lanzamientos.scss';
import {Link} from "react-router-dom";



const UltimosLanzamientos =()=>{

const peliculas = useFetchPeliculas("upcoming", "movie")



    return (
        <>
        <div className="box-lanzamientos">
            <h2 className="title is-2 is-spaced titulo">Ultimos lanzamientos</h2>
            <div className="is-flex is-flex-wrap-wrap">
                {peliculas.map(pelicula => (
                    <article style={{width:"300px"}} className="card-lanzamientos">
                        <div className="card-image">
                            <figure className="image">
                                <img 
                                className="img-lanzamientos"
                                style={{width:"100%", height:"420px"}}
                                src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                                alt= {pelicula.title}/>
                            </figure>
                        </div>
                        <div className="card-media card-descripcion">
                            <div className="media-content title-lanzamientos">
                                <h3 key={pelicula.id}>{pelicula.title}</h3>
                            </div>
                            <div className="icono-posicion">
                            <div className="icon icon-lanzamientos">
                                <Link className="fa fa-eye" to="/:idDetallesUltimosLanzamientos" >
                                </Link>
                            </div>
                            </div>
                        </div>
                    </article>
                    
                ))}
            </div>
        </div>
        </>
    )
    
    }


//<h2>Ultimos lanzamientos</h2>
  //{peliculas.map (pelicula => (
    //<h3 key={pelicula.id}>{pelicula.title}</h3>
      //))}
      
//<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
//<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
//<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg>
//
//
export default UltimosLanzamientos