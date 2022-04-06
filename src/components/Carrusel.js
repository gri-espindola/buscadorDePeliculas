import { Row, Col } from "./Carrusel-libreria";
//import ReactDOM from "react-dom";
import RBCarousel from "react-bootstrap-carousel";
import { useEffect, useState } from "react";


const Carrusel =({img})=>{

//   const styles = { height: 400, width: "100%" };
 // const icon_glass = <span className="fa fa-glass" />;
//    const {peliculas} = useFetchPeliculas("popular", "tv")
   // const icon_music = <span className="fa fa-music" />;
   const iconArrowLeft = <span className="fa fa-angle-left"></span>;
    const iconArrowRight = <span className="fa fa-angle-right"></span>;

    const [imagen, setImagen] = useState([]) 
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=d2db916ed787e45a269779c746706c07`)
        .then(res => res.json())
        .then(data =>{
            setImagen(data.results)
        })
    }, [])

    console.log (imagen)
 return(
     <>
      <div className="container-fluid">
        <Row>
          <Col span={12}>
            <RBCarousel
              autoplay="autoplay"
              slideshowSpeed={ 2500 }
              leftIcon={iconArrowLeft}
              rightIcon={iconArrowRight}
              animation={true}
              pauseOnVisibility = {true}
            >
               {imagen.map (imagen => <div style={{ height: 500 }}>
                <img 
                style={{ width: "100%", height: "100%" }}
                src={`https://image.tmdb.org/t/p/original${imagen.backdrop_path}`}
                alt={`Poster de ${imagen.title}`}/>
              </div>
                )}
              
              </RBCarousel>
              </Col>
          </Row>
      </div>
     </>
 )
}

export default Carrusel