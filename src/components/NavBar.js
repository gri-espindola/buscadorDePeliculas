import {Link} from "react-router-dom"
import 'bulma/css/bulma.min.css'
import blackImg from './img-logo/black.png'

const NavBar = () =>{

    return (
        <>
            <div>
                <nav className="navbar is-black" aria-label="main navigation" role="navigation">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="/home">
                            <div width="150" height="80">
                            <img src= {blackImg} alt="Logo de página"/>
                            </div>
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