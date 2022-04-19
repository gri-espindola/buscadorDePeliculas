import PeliculaItems from "./PeliculaItems";
import "./Columns-home.scss";


const ColumnsHome = ({titulo, cargando, peliculas, categoria, trailer}) =>{
            
    return(
        <>
            <div className="box-columns">
                        <article className="panel is-warning">
                            <p className="panel-heading titulo-columns">
                            <h3>{titulo}</h3>
                            </p>
                            <div className="movie">
                            {cargando && <p><h4>Esta cargando</h4></p>}
                            {peliculas?.map(detalle =>(
                                <PeliculaItems
                                id={detalle.id}
                                categoria={categoria}
                                titulo={detalle.title}
                                key={detalle.id}
                                imagen={detalle.poster_path}
                                trailer={trailer}
                                />
                            ))}
                            </div>
                        </article>
                    </div>
        </>
    )
}

export default ColumnsHome