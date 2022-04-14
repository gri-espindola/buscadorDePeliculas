import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Carrusel from "./components/Carrusel";
import CarruselDetalles from "./components/Carrusel-detalles";
import TrailerCarrusel from "./components/TrailerCarrusel"
import DetallesPopulares from "./components/DetallesPopulares";
import TrailerPopulares from "./components/TrailerPopulares";
import UltimosLanzamientos from "./components/UltimosLanzamientos";
import DetallesMovie from "./components/DetallesMovie";
import TrailerMovie from "./components/TrailerMovie";
import Populares from "./components/Populares";
import Buscador from "./components/Buscador";
import DetalleBusqueda from "./components/DetalleBusqueda";
import TrailerBusqueda from "./components/TrailerBusqueda";
import NavBar from "./components/NavBar";
import PopularesYMejoresPuntadas from "./components/PopularesYMejoresPuntadas";
import DetallesUltimosLanzamientos from "./components/DetallesUltimosLanzamientos";
import 'bulma/css/bulma.min.css'
import './App.css';



const App =()=>{
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/:idCarrusel" element={<Carrusel />}/>
      <Route path="/Carrusel/:idCarruselDetalles" element={<CarruselDetalles/>}/>
      <Route path="/Carrusel/:idCarruselDetalles/:idTrailerCarrusel" element={<TrailerCarrusel />}/>
      <Route path="/:idPopularesYMejoresPuntadas" element={<PopularesYMejoresPuntadas />} />
      <Route path="/ultimos-lanzamientos" element={<UltimosLanzamientos />}/>
      <Route path="/ultimos-lanzamientos/:idDetallesUltimosLanzamientos" element={<DetallesUltimosLanzamientos />}/>
      <Route path="/ultimos-lanzamientos/:idDetallesUltimosLanzamientos/:idDetallesMovie" element={<DetallesMovie />}/>
      <Route path="/ultimos-lanzamientos/:idDetallesUltimosLanzamientos/:idDetallesMovie/:idTrailerUrl" element={<TrailerMovie/>}/>
      <Route path="/populares" element={<Populares/>}/>
      <Route path="/populares/:idDetallesPopulares" element={<DetallesPopulares/>}/>
      <Route path="/populares/:idDetallesPopulares/:idTrailerPopulares" element={<TrailerPopulares/>}/>
      <Route path="/buscador" element={<Buscador/>}/>
      <Route path="/buscador/:idDetallesBusqueda" element={<DetalleBusqueda/>}/>
      <Route path="/buscador/:idDetallesBusqueda/:idTrailerDetallesBusqueda" element={<TrailerBusqueda/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
