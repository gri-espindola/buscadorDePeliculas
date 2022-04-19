import { Row, Col } from "./Carrusel-libreria";
//import ReactDOM from "react-dom";
import RBCarousel from "react-bootstrap-carousel";
import useFetchTrending from "../hooks/useFetchTrending";
import { Link } from "react-router-dom";
import "./Carrusel.scss";
import ColumnsHome from "./Columns-home";
import useFetchPeliculas from "../hooks/useFetchPeliculas";


const Carrusel =({img})=>{

  const iconArrowLeft = <span className="fa fa-angle-left"></span>;
  const iconArrowRight = <span className="fa fa-angle-right"></span>;
  const imagen = useFetchTrending()
  const { cargando, peliculas: peliculasPopulares } = useFetchPeliculas("popular","movie");
  const {cargando: cargandoMasPuntuadas,peliculas: peliculasMasPuntuadas} = useFetchPeliculas("top_rated", "movie");

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
                  <Link to={`/Home/${imagen.id}`}>
                    <button 
                  style={{
                    backgroundColor:"DarkKhaki",
                    color:"black",
                    borderRadius:"7px",
                    width:"160px",
                    border:"Olive, solid, 3px"}}>
                        Ver más
                    </button>
                  </Link>
                  </div>
              </div>
                )}
              
              </RBCarousel>
              </Col>
          </Row>
          <div className="container is-flex is-justify-content-center is-align-items-center">
            <ColumnsHome
            categoria= {"populares"}
            titulo={"Peliculas Populares"}
            cargando={cargando}
            peliculas={peliculasPopulares}/>
            <ColumnsHome
            categoria={"mejoresPuntuadas"}
            titulo={"Peliculas Mejores Puntuadas"}
            cargando={cargandoMasPuntuadas}
            peliculas={peliculasMasPuntuadas}/>
          </div>
      </div>
     </>
 )
}

export default Carrusel