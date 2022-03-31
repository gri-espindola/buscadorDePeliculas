import {Link} from "react-router-dom"
import 'bulma/css/bulma.min.css'

const NavBar = () =>{

    const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryh_Qnl6pGPl9BMlSMhg8Z3Tixv2phJuqOWUXxJlKNl17iZaQTdpV0QDBaGYN0qgamM0&usqp=CAU"
    return (
        <>
            <div>
                <nav className="navbar is-black">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="/home">
                            <figure className="nav-logo">
                            <img src= {img} alt="Logo de página" width="100" height="100"/>
                            </figure>
                        </Link>
                        <div className="navbar-burger" data-target="navbarExampleTransparentExample">
                            <span>Últimos lanzamientos</span>
                            <span>Populares</span>
                            <span>Buscar</span>
                        </div>
                    </div>
                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                            <div className="navbar-start">
                                <Link className="navbar-item" to="/home">
                                    Home
                                </Link>
                                <Link className="navbar-item" to="/ultimos-lanzamientos">
                                    Últimos lanzamientos
                                </Link>
                                <Link className="navbar-item" to="/populares">
                                    Populares
                                </Link>
                                <Link className="navbar-item" to="/buscador">
                                    Buscar
                                </Link>
                            </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavBar