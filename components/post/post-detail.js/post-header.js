import Image from "next/image"

import styles from '../../../styles/post-header.module.css'

export default function PostHeader({imgFullPath, title}) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Image src={imgFullPath} alt={`image of ${title}`} width={200} height={150} />
    </header>
  )
}