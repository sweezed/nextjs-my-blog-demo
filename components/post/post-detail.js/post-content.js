import PostHeader from "./post-header"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

// * dist/csj not esm becuase its done on server side
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import styles from '../../../styles/post-content.module.css'


export default function PostContent({post}) {
  const customRenderers = {
    p(paragraph){
      const { node } = paragraph

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    }
  }

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} imgFullPath={post.imgFullPath}/>
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}