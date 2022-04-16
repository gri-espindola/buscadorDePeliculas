import { Link } from "react-router-dom";
import "./Pelicula-items.scss";

const PeliculaItems = ({titulo, imagen})=>  {
    return(
        <div className="is-flex">
       
                <div className=" is-mobile columns-movie">
                    <div className="column">
                        <article className="panel is-warning">
                            <img
                            className="img-peliculas-items"
                            src={`https://image.tmdb.org/t/p/original${imagen}`}
                            alt={titulo.name}/>
                            <div className="movie">
                                <Link 
                                to={`/Home/${titulo.id}`} 
                                className="panel-block is-active item-movie"
                                >
                                <span className="panel-icon">
                                <i className="fas fa-book" aria-hidden="true"></i>
                                </span>
                                </Link>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
    )
}

export default PeliculaItems