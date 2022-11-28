import PostHeader from "./post-header"
import ReactMarkdown from "react-markdown"

import styles from '../../../styles/post-content.module.css'


export default function PostContent({post}) {
  return (
    <article className={styles.content}>
      <PostHeader title={post.title} imgFullPath={post.imgFullPath}/>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  )
}