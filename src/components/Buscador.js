//import { Link } from "react-router-dom";
import useFetchPeliculas from "../hooks/useFetchPeliculas";
import "./Buscador.scss";



const Buscador =()=>{



    const { busqueda } = useFetchPeliculas("popular","movie");

    //this.state = {value: ''}


    return (
        <>
        <div className="is-flex is-flex-direction-column">
            <div className="is-flex is-justify-content-center m-5">
            <h2 className="title is-2 is-spaced">Busca tu pelicula</h2>
            </div>
            <div className="">
                <div className="box-busqueda">
                <form className="input-busqueda">
                    <input 
                    className="input is-rounded"
                    type="text"
                    placeholder="Ingresa tu búsqueda aquí"
                    value={this.state.value}
                    onChange={this.handleChange}></input>
                </form>
                </div>
                {<div className="is-flex is-flex-wrap-wrap">
                    {busqueda.map(pelicula => (
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
                                    <Link className="fa fa-eye" to={`/detalles-movie/${pelicula.id}`} >
                                    </Link>
                                </div>
                                </div>
                            </div>
                        </article>
                        
                    ))}
                </div>}    
            </div>
        </div>
        </>
    )
    
    }


//<h2>Ultimos lanzamientos</h2>
  //{peliculas.map (pelicula => (
    //<h3 key={pelicula.id}>{pelicula.title}</h3>
      //))}




export default Buscador