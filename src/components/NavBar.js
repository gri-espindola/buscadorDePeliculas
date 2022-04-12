import {Link} from "react-router-dom"
import 'bulma/css/bulma.min.css'
import blackImg from './img-logo/black.png'
import './NavBar.scss';


const NavBar = () =>{

    return (
        <>
            <div>
                <nav className="navbar nav" aria-label="main navigation" role="navigation">
                    <div className="navbar-brand">
                        <Link className="nav-img" to="/home">
                            <div width="150" height="80">
                            <img src= {blackImg} alt="Logo de página" className=""/>
                            </div>
                        </Link>
                    </div>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a href="./home" class="navbar-link" aria-expanded="false">
                        Menú
                        </a>

                        <div className="navbar-dropdown">
                            <Link className="navbar-item nav-link" to="/home">
                                Home
                            </Link>
                            <Link className="navbar-item nav-link" to="/ultimos-lanzamientos">
                                Últimos lanzamientos
                            </Link>
                            <Link className="navbar-item nav-link" to="/populares">
                                Populares
                            </Link>
                            <Link className="navbar-item nav-link" to="/buscador">
                                Buscar
                            </Link>
                        </div>
                    </div>

                    <div className="navbar-menu tabs is-boxed">
                                
                            <div className="navbar-end">
                                <Link className="navbar-item nav-link" to="/home">
                                    Home
                                </Link>
                                <Link className="navbar-item nav-link" to="/ultimos-lanzamientos">
                                    Últimos lanzamientos
                                </Link>
                                <Link className="navbar-item nav-link" to="/populares">
                                    Populares
                                </Link>
                                <Link className="navbar-item nav-link" to="/buscador">
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