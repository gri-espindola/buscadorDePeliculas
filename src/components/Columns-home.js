import PeliculaItems from "./PeliculaItems";


const ColumnsHome = (titulo, cargando, peliculas) =>{
    
    return(
        <>
            <div>
                <p className="panel-heading">
                    <h3>{titulo}</h3>
                </p>
                {cargando && <p><h4>Esta cargando</h4></p>}
                {peliculas.map(detalle =>(
                    <PeliculaItems
                    titulo={detalle.name}
                    key={detalle.id}
                    imagen={detalle.poster_path}
                    />
                ))}
            </div>
            
        </>
    )
}

export default ColumnsHome