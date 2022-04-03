import useFetchPeliculas from "../hooks/useFetchPeliculas"


const Populares = ()=>{

    const {peliculas, cargando} = useFetchPeliculas("popular", "tv")

    return (
        <>
            <div>
            <h1>Populares</h1> 
            {cargando && <p>esta cargando</p>}

            {peliculas.map(peliculasPopulares=>(
                <h3 key={peliculasPopulares.id}>{peliculasPopulares.name}</h3>
            )) }
            </div>
        </>
    )
    
}


export default Populares