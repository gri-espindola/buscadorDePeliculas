import { Row, Col } from "./Carrusel-libreria";
//import ReactDOM from "react-dom";
import RBCarousel from "react-bootstrap-carousel";
import { useEffect, useState } from "react";



const Carrusel =()=>{

//   const styles = { height: 400, width: "100%" };
//  const icon_glass = <span className="fa fa-glass" />;
//    const {peliculas} = useFetchPeliculas("popular", "tv")
    const icon_music = <span className="fa fa-music" />;

    const [elemento, setElemento] = useState([]) 
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=d2db916ed787e45a269779c746706c07`)
        .then(res => res.json())
        .then(data =>{
            setElemento(data.results)
        })
    }, [])

    console.log (elemento)
 return(
     <>
      <div className="container-fluid" style={{ paddingBottom: 20 }}>
        <Row>
          <Col span={12}>
            <RBCarousel
              autoplay="autoplay"
              slideshowSpeed={ 2500 }
              leftIcon={icon_music}
              rightIcon={icon_music}
              animation={true}
              pauseOnVisibility = {true}
            >
              {elemento.map (img =>
                {
              <div style={{ height: 400 }}>
                <img 
                src={`https://image.tmdb.org/t/p/original${img.poster_path}`}
                alt={`Poster de ${img.title}`}/>
              </div>
                })}
              
              </RBCarousel>
              </Col>
          </Row>
      </div>
     </>
 )
}

export default Carrusel