import AllPosts from "../../components/post/all-posts"
import Head from 'next/head'
import { getAllPost} from '../../helpers/post-util'

import styles from '../../styles/all-posts.module.css'

export default function AllPostPage({posts}) {
  return (
    <div className={styles.posts}>
        <Head>
          <title>All My Posts</title>
        </Head>
       <AllPosts posts={posts} />
    </div>
  )
}

export async function getStaticProps(){
  const posts = getAllPost()

  return ({
    props: {
      posts: posts
    }
  })
}