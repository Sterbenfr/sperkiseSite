'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import fetchById from '../../../utils/fetchById'
import type { ContentfulPost } from '../page'
import ReactMarkdown from 'react-markdown'
import styles from '../../../style/article.module.css'

const Article: React.FC = () => {
  const [post, setPost] = useState<ContentfulPost | null>(null)
  const [loading, setLoading] = useState(true)
  const { articleID } = useParams()

  useEffect(() => {
    if (articleID) {
      const getPost = async () => {
        try {
          const fetchedPost = await fetchById(articleID as string)
          setPost(fetchedPost)
        } catch (error) {
          console.error('Error fetching post:', error)
        } finally {
          setLoading(false)
        }
      }
      getPost()
    }
  }, [articleID])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.post}>
        <h1>{post.titre}</h1>
        {post.dateDePublication && (
          <h3>{new Date(post.dateDePublication).toLocaleDateString()}</h3>
        )}
        <div className={styles.textContent}>
          <ReactMarkdown>{post.texte}</ReactMarkdown>
        </div>
        {post.auteur && (
          <p className={styles.author}>By {post.auteur.fields?.nom}</p>
        )}
      </div>
    </div>
  )
}

export default Article

/*{post.imageDeCouverture && (
          <img
            alt={
              post.imageDeCouverture.fields?.description ||
              'No description available'
            }
            src={`https:${post.imageDeCouverture.fields?.file?.url}`}
            className={styles.postImage}
          />
        )}*/
