import Link from 'next/link'
import Logo from './logo'

import styles from '../../styles/main-navigation.module.css'

export default function MainNavigation() {
  return(
    <header className={styles.header}>
      <Link href={'/'}> 
          <Logo />  
      </Link>
      <nav>
        <ul>
          <li><Link href='/posts'>Post</Link></li>
          <li><Link href='/contact'>Contacts</Link></li>
        </ul>
      </nav>
    </header>
  )
}