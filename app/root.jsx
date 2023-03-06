import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useCatch,
    Link,
} from '@remix-run/react'
import styles from '~/styles/index.css'
import { Header } from '~/components/header'
import { Footer } from '~/components/footer'
import { useState } from 'react'


export function meta(){
    return(
        {
            charset: 'utf-8',
            title: 'GuitarLA - Remix',
            viewport: 'width=device-width,initial-scale=1'
        }
    )
}

export function links(){
    return[
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: "true"
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Mulish:wght@800&family=Outfit:wght@400;700;900&display=swap'
        },
    ]
}

export default function App() {
    
    const [carrito, setCarrito] = useState([])

    const agregarCarito = guitarra => {
        if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
            // Iterar sobre el arreglo e identificar el elemento duplicado
            const carritoActualizado = carrito.map(guitarraState => {
                if(guitarraState.id === guitarra.id){
                    // Reescribir la cantidad
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
            // Añadir al carrido
            setCarrito(carritoActualizado)
        }else {
            // Registro nuevo, Agreggar al Carrito
            setCarrito([...carrito, guitarra])
        }
    }

    return(
        <Document>
            <Outlet
                context={{
                    agregarCarito
                }}
            />
        </Document>
    )
}

function Document({children}){
    return(
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>

            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>

        </html>
    )
}

/* Manejo de Errores */
export  function CatchBoundary(){
    const error = useCatch()
    return (
        <Document>
            <p className='error'><span>{error.status }</span> - {error.statusText}</p>
            <div className='error-enclace '>
                <Link className='link' to="/">Volver a la página principal</Link>
            </div>
        </Document>
    )
}

export function ErrorBoundary({error}) {
    return (
        <Document>
            <p className='error'><span>{error.status }</span> - {error.statusText}</p>
            <div className='error-enclace'>
                <Link className='link' to="/">Volver a la página principal</Link>
            </div>
        </Document>
    )
}