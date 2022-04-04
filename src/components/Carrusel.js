import { Row, Col } from "./Carrusel-libreria";
//import ReactDOM from "react-dom";
import RBCarousel from "react-bootstrap-carousel";
import { useEffect, useState } from "react";



const Carrusel =({img})=>{

//   const styles = { height: 400, width: "100%" };
 // const icon_glass = <span className="fa fa-glass" />;
//    const {peliculas} = useFetchPeliculas("popular", "tv")
   // const icon_music = <span className="fa fa-music" />;
   const iconArrowLeft = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
   <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
 </svg>;
    const iconArrowRight = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
  </svg>;

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
                src={`https://image.tmdb.org/t/p/original${imagen.poster_path}`}
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