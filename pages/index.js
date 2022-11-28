import { Fragment } from "react";
import Hero from '../components/hero'
import FeaturedPost from "../components/featured-post";
import { getFeaturedPost } from '../helpers/post-util'

export default function HomePage({posts}) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={posts} />
    </Fragment>
  )
}


export async function getStaticProps () {
  const posts = getFeaturedPost()
  return {
    props: {
      posts: posts
    }
  }
}