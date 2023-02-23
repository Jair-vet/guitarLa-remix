import { Navegacion } from "./navegacion"
import { Link } from '@remix-run/react'
import logo from '../../public/img/logo.svg'


export const Footer = () => {
    
    return (
        <footer className="footer">
           <div className="contenedor contenido">
                <Navegacion />

                <p className="copyright">{new Date().getFullYear() } Todos los derechos reservados©</p>
                <Link to="/">
                    <img src={logo} alt="Imagen Logo" className='logo'/>
                </Link>
           </div>
        </footer>
    )
}
