import {Link} from "react-router-dom"

const NavBar = () =>{
    return (
        <div>
            <ul>
                <li><Link to= "/">Home</Link></li>
                <li><Link to= "/ultimos-lanzamientos">Últimos lanzamientos</Link></li>
                <li><Link to= "/populares">Populares</Link></li>
                <li><Link to= "/buscador">Buscar</Link></li>

            </ul>
        </div>

    )
}

export default NavBar