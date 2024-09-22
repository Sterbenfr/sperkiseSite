'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from '../style/navbar.module.css' // Import the CSS module

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {/* Accueil Link */}
        <li className={styles.navItem}>
          <Link href='/' className={styles.navLink}>
            Accueil
          </Link>
        </li>

        {/* Articles Link */}
        <li className={styles.navItem}>
          <Link href='/articles' className={styles.navLink}>
            Articles
          </Link>
        </li>

        {/* Logo */}
        <li className={styles.navItem}>
          <div className={styles.logoContainer}>
            <Image
              src='/images/logo.png' // Change this to the actual path to your logo
              alt='Logo'
              width={50}
              height={50}
              priority={true}
            />
          </div>
        </li>

        {/* Actualités Link */}
        <li className={styles.navItem}>
          <Link href='/actualites' className={styles.navLink}>
            Actualités
          </Link>
        </li>

        {/* Contact Link */}
        <li className={styles.navItem}>
          <Link href='/contact' className={styles.navLink}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
