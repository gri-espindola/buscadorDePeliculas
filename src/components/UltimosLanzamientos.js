import useFetchPeliculas from "../hooks/useFetchPeliculas"


const UltimosLanzamientos =()=>{

const peliculas = useFetchPeliculas("upcoming", "movie")


    return (
        <>
        <div>
            <h2 className="title is-2 is-spaced">Ultimos lanzamientos</h2>
            {peliculas.map(pelicula => (
                <article className="card-content">
                    <div className="card-image">
                        <figure className="image is-128x128">
                            <img 
                            src="https://www.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg"
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
        </>
    )
    
    }


//<h2>Ultimos lanzamientos</h2>
  //{peliculas.map (pelicula => (
    //<h3 key={pelicula.id}>{pelicula.title}</h3>
      //))}



export default UltimosLanzamientos