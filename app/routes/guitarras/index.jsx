import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import { ListadoGuitarras } from '~/components/listado-guitarras'

export function meta() {
  return {
    title: 'GuitarLA - Tienda de Guitarras',
    descripcion: 'GuitarLA - Nuestra colección de guitarras'
  }
}

export async  function loader() {
  
  const guitarras = await getGuitarras()
  return guitarras.data
}

function Tienda() {

  const guitarras = useLoaderData()  // hook para traer informacion de una API

    return (
        <ListadoGuitarras 
          guitarras={guitarras}
        />
    )
}

export default Tienda