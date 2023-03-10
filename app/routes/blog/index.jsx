import { useLoaderData } from '@remix-run/react';
import { getPosts } from '~/models/posts.server';
import { ListadoPosts } from '~/components/listado-posts';


export function meta() {
  return {
    title: 'GuitarLA - Blog',
    description: 'Blogs de musica'
  }
}


export async function loader(){
  const posts = await getPosts()
  return posts.data
}

function Block() {

    const posts = useLoaderData()

    return (
        <ListadoPosts 
            posts={posts}
        />
    )
}

export default Block
  