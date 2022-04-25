import { Link } from "react-router-dom";
import "./Pelicula-items.scss";
import { BsFillArrowRightCircleFill } from "react-icons/bs";



const PeliculaItems = ({titulo, imagen, id})=>  {


    return(
        <> 
            <div className="is-flex items-movie">    
                <img
                    className="image is-32x32 img-movie"
                    src={`https://image.tmdb.org/t/p/original${imagen}`}
                    alt={titulo.title}/>
                    <div className="icon-title">
                        <h5 className="is-size-6 titulo">{titulo}</h5>
                        <Link 
                            to={`/detalles-movie/${id}`}
                            className="panel-block is-active"
                            >
                            <span className="">
                                <BsFillArrowRightCircleFill/>
                            </span>
                        </Link>
                    </div>
            </div>
        </>
    )
}

//<i className="fa fa-arrow-right" aria-hidden="true"></i>

export default PeliculaItems