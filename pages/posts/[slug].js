import PostContent from "../../components/post/post-detail.js/post-content"
import { getSpecificPost, getAllPostFileNames } from '../../helpers/post-util'

export default function PostDetailPage({post}) {
  return (
   <PostContent post={post} />
  )
}

export async function getStaticProps(context) {
  const {params} = context
  const slug = params.slug
  const post = getSpecificPost(slug)

  return ({
    props: {
      post: post
    }
  })
}

export async function getStaticPaths() {
  const fileNames = getAllPostFileNames()
  const paths = fileNames.map(fileName => ({
    params: {slug: fileName}
  }))

  return {
    paths: paths,
    fallback: false
  }
}