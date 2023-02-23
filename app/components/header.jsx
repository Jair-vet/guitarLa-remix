import { Link } from '@remix-run/react'
import logo from '../../public/img/logo.svg'


export const Header = () => {
  return (
    <header className="header">
        <div className="contenedor barra">
            <Link to="/">
                <img src={logo} alt="Imagen Logo" className='logo'/>
            </Link>
            <nav className="navegacion">
                <Link to="/">Inicio</Link>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/tienda">Tienda</Link>
                <Link to="/block">Block</Link>
            </nav>
        </div>
    </header>
  )
}
