import { useLoaderData } from '@remix-run/react';
import { getPosts } from '~/models/posts.server';
import { Post } from '~/components/post';
import styles from '~/styles/block.css'


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
        <h2 className="heading">Blog</h2>
        <div className="blog">
          {posts.map(post => (
            <Post 
              key={post.id}
              post={post.attributes}
            />
          ))}
        </div>
      </main>
    )
}

export default Block
  