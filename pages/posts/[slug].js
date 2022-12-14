import Head from 'next/head'
import { Fragment } from 'react'
import PostContent from "../../components/post/post-detail.js/post-content"
import { getSpecificPost, getAllPostFileNames } from '../../helpers/post-util'

export default function PostDetailPage({post}) {
  return (
    <Fragment> 
      <Head>
        <title>{post.title}</title>
      </Head>
      <PostContent post={post} />
    </Fragment>
  )
}

export async function getStaticProps(context) {
  const {params} = context
  const slug = params.slug
  const post = getSpecificPost(slug)

  return ({
    props: {
      post: post
    }, 
    revalidate: 600
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