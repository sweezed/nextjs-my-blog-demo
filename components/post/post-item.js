import Link from 'next/link'
import Image from 'next/image'

import styles from '../../styles/post-item.module.css'

export default function PostItem({post}) {
  const {title, imgFullPath, excerpt, date, slug} = post
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric' 
  })

  return (
    <li className={styles.post}>
      <Link href={`/posts/${slug}`}>
        <div className={styles.image}>
          <Image 
            src={imgFullPath} 
            alt={title} 
            width={300} height={200}
            layout='responsive'
          />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  )
}