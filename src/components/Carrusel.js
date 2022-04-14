import { Row, Col } from "./Carrusel-libreria";
//import ReactDOM from "react-dom";
import RBCarousel from "react-bootstrap-carousel";
import useFetchTrending from "../hooks/useFetchTrending";
import { Link } from "react-router-dom";
import "./Carrusel.scss";
//import CarruselDetalles from "./Carrusel-detalles";


const Carrusel =({img})=>{

   const iconArrowLeft = <span className="fa fa-angle-left"></span>;
    const iconArrowRight = <span className="fa fa-angle-right"></span>;

    const imagen = useFetchTrending()

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
               {imagen.map (imagen => <div key={imagen.id} style={{ height: 500 }}>
                  <img 
                  src={`https://image.tmdb.org/t/p/original${imagen.backdrop_path}`}
                  alt={`Poster de ${imagen.title}`}/>
                  <div className="carousel-caption" style={{textShadow:"2px 2px 2px black"}}>              
                  <h3>{imagen.title}</h3>
                  <p>{imagen.overview}</p>
                  <Link to={`/Carrusel/${imagen.id}`}>
                    <button 
                  style={{backgroundColor:"DarkKhaki", color:"black", borderRadius:"7px", width:"160px", border:"Olive, solid, 3px"}}>
                        Ver más
                    </button>
                  </Link>
                  </div>
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