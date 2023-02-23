import { Link, useLocation } from '@remix-run/react'
import logo from '../../public/img/logo.svg'


export const Header = () => {

    const location = useLocation()

  return (
    <header className="header">
        <div className="contenedor barra">
            <Link to="/">
                <img src={logo} alt="Imagen Logo" className='logo'/>
            </Link>
            <nav className="navegacion">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Inicio</Link>
                <Link to="/nosotros" className={location.pathname === '/nosotros' ? 'active' : ''}>Nosotros</Link>
                <Link to="/tienda" className={location.pathname === '/tienda' ? 'active' : ''}>Tienda</Link>
                <Link to="/block" className={location.pathname === '/block' ? 'active' : ''}>Block</Link>
            </nav>
        </div>
    </header>
  )
}
