import { Link } from "@remix-run/react"
import { formatearFecha } from '~/utils/helpers';

export const Post = ({post}) => {

    const { contenido, imagen, titulo, url, publishedAt } = post

    return (
        <article className="post">
            <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={`Imagen Block ${titulo}`} />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="resumen">{contenido}</p>
                <Link className="enlace" to={`/posts/${url}`}>Leer Post</Link>
            </div>
        </article>
    )
}
