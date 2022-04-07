import useFetchPeliculas from "../hooks/useFetchPeliculas"
import './Ultimos-lanzamientos.scss';


const UltimosLanzamientos =()=>{

const peliculas = useFetchPeliculas("upcoming", "movie")


    return (
        <>
        <div className="">
            <h2 className="title is-2 is-spaced">Ultimos lanzamientos</h2>
            <div className="is-flex is-flex-wrap-wrap">
                {peliculas.map(pelicula => (
                    <article style={{width:"300px"}}>
                        <div className="card-image">
                            <figure className="image">
                                <img 
                                style={{width:"100%", height:"420px"}}
                                src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                                alt= ""/>
                            </figure>
                        </div>
                        <div className="card-media">
                            <div className="media-content">
                                <h3 key={pelicula.id}>{pelicula.title}</h3>
                            </div>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                </svg>
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



export default UltimosLanzamientos