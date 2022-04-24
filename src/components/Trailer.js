import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Trailer =()=>{

    const params = useParams ();
    console.log(params)
    const [trailer, setTrailer] = useState([])
    
    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${params.idPelicula}/videos?api_key=6a93319b2d78795675b8bd9aa0965a95&language=es-ES`)
        .then(res=> res.json())
        .then(data => { 
        setTrailer(data.results);
    });
}, []);


    return(
        <div>
            {!!trailer &&
                trailer.map( video => 
                    <iframe className="mb-10 h-[18rem] sm:h-[30rem]"
                    key={video.id}
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="videos promocionales"
                    />                        
                )}
        </div>
    )
}


export default Trailer