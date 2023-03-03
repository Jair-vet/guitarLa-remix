import { useLoaderData } from '@remix-run/react';
import { getPosts } from '~/models/posts.server';
import styles from '~/styles/block.css'
import { ListadoPosts } from '../components/listado-posts';


export function meta() {
  return {
    title: 'GuitarLA - Block',
    description: 'Blogs de musica'
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
  ]
}

export async function loader(){
  const posts = await getPosts()
  return posts.data
}

function Block() {

    const posts = useLoaderData()

    return (
      <main className="contenedor">
        <ListadoPosts 
          posts={posts}
        />
      </main>
    )
}

export default Block
  