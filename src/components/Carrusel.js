import { Row, Col } from "./Carrusel-libreria";
//import ReactDOM from "react-dom";
import RBCarousel from "react-bootstrap-carousel";

const Carrusel =()=>{

//   const styles = { height: 400, width: "100%" };
//  const icon_glass = <span className="fa fa-glass" />;
    const icon_music = <span className="fa fa-music" />;

  
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
              <div style={{ height: 400 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://www.w3schools.com/bootstrap/ny.jpg"
                  alt="imagen carrusel"
                />
              </div>
              <div style={{ height: 400 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://www.w3schools.com/bootstrap/ny.jpg"
                  alt="imagen carrusel"
                />
              </div>
              <div style={{ height: 400 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://www.w3schools.com/bootstrap/ny.jpg"
                  alt="imagen carrusel"
                />
              </div>
              </RBCarousel>
              </Col>
          </Row>
      </div>
     </>
 )
}

export default Carrusel