import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{"We'll be back soon !"}</h1>
          <h2 className={styles.midTitle}>
            {'This site is currently under maintenance.'}
          </h2>
          <h3 className={styles.subTitle}>{'Please check back soon.'}</h3>
          <div className={styles.contact}>
            <p>
              {
                'To get in touch with us, please feel free to mail us at\u00a0: '
              }
              <a href='mailto:sterben538@gmail.com'>{'sterben538@gmail.com'}</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
