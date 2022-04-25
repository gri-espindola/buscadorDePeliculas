import {Link} from "react-router-dom"
import 'bulma/css/bulma.min.css'
import blackImg from './img-logo/pink.png'
import './NavBar.scss';


const NavBar = () =>{

    return (
        <>
            <div>
                <nav className="navbar nav" aria-label="main navigation" role="navigation">
                    <div className="navbar-brand">
                        <Link className="nav-img" to="/">
                            <div width="150" height="80">
                            <img src= {blackImg} alt="Logo de página" className=""/>
                            </div>
                        </Link>
                    </div>
                
                    <div className="navbar-menu tabs is-boxed link-space">
                            <div className="navbar-end">
                                <Link className="navbar-item nav-link" to="/">
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