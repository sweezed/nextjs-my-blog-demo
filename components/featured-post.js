import PostGrid from './post/post-grid'

import styles from '../styles/featured-posts.module.css'

export default function FeaturedPost({posts}) {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  )
}