'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { fetchEntries } from '../../utils/contentfulPosts' // Fetch Contentful entries
import ShortPosts from '../../components/ShortPosts' // Post component

export interface Image {
  fields: {
    file: {
      url: string
    }
    description?: string
  }
}
export interface Author {
  fields: {
    nom: string
  }
}
export interface ContentfulPost {
  metadata: {
    tags: {
      sys: {
        id: string
      }
    }[]
  }
  dateDePublication?: string
  auteur?: Author
  miniTexteDePrsentation?: string
  imageDeCouverture?: Image
  texte?: string
  titre: string
  sys: {
    id: string
  }
}

export interface Entry {
  fields: {
    imageDeCouverture?: Image
    texte?: string
    titre: string
    dateDePublication?: string
    auteur?: Author
    miniTexteDePrsentation?: string
  }
  metadata: {
    tags: { sys: { id: string } }[]
  }
  sys: {
    id: string
  }
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<ContentfulPost[]>([]) // State for blog posts
  const [loading, setLoading] = useState(true) // Loading state to track fetch status
  const router = useRouter()

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = (await fetchEntries()) as Entry[] | undefined
        console.log('Posts:', res)

        if (res) {
          const posts = res.map((entry: Entry) => ({
            ...entry.fields,
            metadata: entry.metadata,
            sys: entry.sys,
          }))

          // Filter out posts with the 'auteurs' tag
          const filteredPosts = posts.filter((post: ContentfulPost) => {
            console.log('post:', post.metadata)
            return !post.metadata?.tags.some(tag => tag.sys.id === 'auteurs')
          })

          setPosts(filteredPosts) // Set filtered posts
        }
      } catch (error) {
        console.error('Error fetching entries:', error)
      } finally {
        setLoading(false) // Stop loading state
      }
    }
    getPosts()
  }, [])

  const handleClick = (id: string) => {
    console.log('Clicked on post:', id)
    router.push(`/articles/${id}`)
  }

  if (loading) {
    return <div>Loading...</div> // Show loading indicator while fetching
  }

  return (
    <div>
      {posts.map((post, index) => (
        <ShortPosts
          key={post.sys.id}
          title={post.titre}
          image={post?.imageDeCouverture}
          miniText={post.miniTexteDePrsentation}
          author={post.auteur}
          date={post.dateDePublication}
          index={index}
          onClick={() => handleClick(post.sys.id)}
        />
      ))}
    </div>
  )
}

export default Home
