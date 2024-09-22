import { fetchEntries } from './contentfulPosts' // Fetch Contentful entries
import type { ContentfulPost, Entry } from '../app/articles/page'

const fetchById = async (id: string) => {
  try {
    const res = (await fetchEntries()) as Entry[] | undefined

    if (res) {
      const posts = res.map((entry: Entry) => ({
        ...entry.fields,
        metadata: entry.metadata,
        sys: entry.sys,
      }))

      // Filter out posts with the 'auteurs' tag and match the given id
      const filteredPosts = posts.filter((post: ContentfulPost) => {
        return (
          !post.metadata?.tags.some(tag => tag.sys.id === 'auteurs') &&
          post.sys.id === id
        )
      })

      return filteredPosts.length > 0 ? filteredPosts[0] : null
    }
  } catch (error) {
    console.error('Error fetching entries:', error)
  }
  return null
}

export default fetchById
