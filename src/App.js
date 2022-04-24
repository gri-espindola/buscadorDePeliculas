import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UltimosLanzamientos from "./components/UltimosLanzamientos";
import DetallesMovie from "./components/DetallesMovie";
import Populares from "./components/Populares";
import Buscador from "./components/Buscador";
import NavBar from "./components/NavBar";
import Trailer from "./components/Trailer"
import 'bulma/css/bulma.min.css'
import './App.css';



const App =()=>{

  

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/detalles-movie/:idPelicula" element={<DetallesMovie />} />
      <Route path="/trailer/:idPeliculas" element={<Trailer/>}/>
      <Route path="/ultimos-lanzamientos" element={<UltimosLanzamientos />}/>
      <Route path="/populares" element={<Populares/>}/>
      <Route path="/buscador" element={<Buscador/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
