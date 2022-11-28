import Image from 'next/image'

import styles from '../styles/hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image 
          src='/images/me.png' 
          alt='picture of me' 
          width={300} 
          height={350}
        />
      </div>
      <h1>Hi, I am Ed</h1>
      <p>I blog about javascript fullstack development</p>
    </section>
  )
}