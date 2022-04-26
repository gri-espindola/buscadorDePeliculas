import PeliculaItems from "./PeliculaItems";
import "./Columns-home.scss";


const ColumnsHome = ({titulo, cargando, peliculas, categoria}) =>{
            
    return(
        <>
            <div className="box-columns">
                        <article className="panel is-warning">
                            <p className="panel-heading titulo-columns">
                            <h3>{titulo}</h3>
                            </p>
                            <div className="movie">
                                {cargando && <progress className="progress is-danger" max="50">30%</progress>}
                                {peliculas?.map(detalle =>(
                                    <PeliculaItems
                                    id={detalle.id}
                                    categoria={categoria}
                                    titulo={detalle.title}
                                    key={detalle.id}
                                    imagen={detalle.poster_path}
                                    />
                                ))}
                            </div>
                        </article>
                    </div>
        </>
    )
}

export default ColumnsHome