import { Link } from '@remix-run/react'


export const Header = () => {
  return (
    <header className="header">
        <div className="contenedor barra">
            <div className="logo">

            </div>
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
