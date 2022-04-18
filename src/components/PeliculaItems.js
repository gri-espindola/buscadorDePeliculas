import { Link } from "react-router-dom";
import "./Pelicula-items.scss";



const PeliculaItems = ({titulo, imagen})=>  {


    return(
        <> 
            <div className="is-flex">    
                <img
                    className="image is-32x32 img-movie"
                    src={`https://image.tmdb.org/t/p/original${imagen}`}
                    alt={titulo.title}/>
                    <div className="icon-title">
                    <h5 className="is-size-6 titulo">{titulo}</h5>
                        <Link 
                        to={`/Home/${titulo.id}`} 
                        className="panel-block is-active"
                        >
                        <span className="">
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </span>
                        </Link>
                    </div>
            </div>
        </>
    )
}

export default PeliculaItems