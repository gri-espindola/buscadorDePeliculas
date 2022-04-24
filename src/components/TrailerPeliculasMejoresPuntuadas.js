import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
//import {Link} from "react-router-dom";
//import { AiFillCloseCircle } from "react-icons/ai";
import React from 'react';
//import YouTube from 'react-youtube';



const TrailerPeliculasMejoresPuntuadas =()=>{

    const params = useParams ()
    
    const [trailer, setTrailer] = useState([])


    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${params.idPeliculasMejoresPuntuadas}/${params.idTrailerPeliculasMejoresPuntuadas}/videos?api_key=6a93319b2d78795675b8bd9aa0965a95&language=es-ES`)
        .then(res=> res.json())
        .then(data => { 
        setTrailer(data.result);
    });
}, []);
    
// append_to_response: 'videos';
// const trailer = selecteMovie.videos.results.find(vid => vid.name === 'official trailer')

    //const backgroundImageURL =`https://image.tmdb.org/t/p/original${trailer.backdrop_path}`;
    /* const containerStyle = {backgroundImage:`url(${backgroundImageURL})`};
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    };
 */
   /*  _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      } */

    return (
        <>
            {/* <YouTube
            videoId={}                  // defaults -> ''
            id={trailer.key}                       // defaults -> ''
            className={}                // defaults -> ''
            containerClassName={}       // defaults -> ''
            containerStyle={}           // defaults -> {}
            title={trailer.title}                    // defaults -> ''
            loading={}                  // defaults -> undefined
            opts={opts}                        // defaults -> {}
            onReady={this._onReady}                    // defaults -> noop
            onPlay={}                     // defaults -> noop
            onPause={}                    // defaults -> noop
            onEnd={}                      // defaults -> noop
            onError={}                    // defaults -> noop
            onStateChange={}              // defaults -> noop
            onPlaybackRateChange={}       // defaults -> noop
            onPlaybackQualityChange={}    // defaults -> noop
            /> */}
        </>
    )
}





export default TrailerPeliculasMejoresPuntuadas