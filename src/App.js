import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UltimosLanzamientos from "./components/UltimosLanzamientos";
import Populares from "./components/Populares";
import Buscador from "./components/Buscador";
import NavBar from "./components/NavBar";
import PopularesYMejoresPuntadas from "./components/PopularesYMejoresPuntadas";
import DetallesUltimosLanzamientos from "./components/DetallesUltimosLanzamientos";
import './App.css';


const App =()=>{
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/:idPopularesYMejoresPuntadas" element={<PopularesYMejoresPuntadas />} />
      <Route path="/ultimos-lanzamientos" element={<UltimosLanzamientos />}/>
      <Route path="/ultimos-lanzamientos/:idDetallesUltimosLanzamientos" element={<DetallesUltimosLanzamientos />}/>
      <Route path="/populares" element={<Populares/>}/>
      <Route path="/buscador" element={<Buscador/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
