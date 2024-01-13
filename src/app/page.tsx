import styles from '../../styles/page.module.css'

export default function MaintenancePage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Site de Sperkise</h1>
          <p className={styles.subTitle}>
            Bienvenue sur le site du Club de Minéralogie et de Paléontologie de
            la Métropole Nord - Wasquehal Sperkise ! Je suis le développeur
            responsable de la gestion de ce site.
          </p>

          <p className={styles.subTitle}>
            Je suis désolé de vous informer que le site est actuellement en
            maintenance. Nous vous remercions de votre compréhension et de votre
            intérêt pour notre club Sperkise. Nous avons hâte de vous retrouver
            et de partager notre passion pour la minéralogie et la paléontologie
            avec vous.
          </p>
          <h2 className={styles.midTitle}>À Propos de Nous</h2>
          <p className={styles.subTitle}>
            Chez Sperkise, nous sommes passionnés par la 💎 Minéralogie 💎 et la
            🦖 Paléontologie 🦕. Notre mission est de faciliter la communication
            avec les personnes qui partagent notre passion grâce à des
            conférences mensuelles (qui devraient bientôt être ouvertes à la
            participation à distance via une visioconférence) et une exposition
            annuelle. Nous visons également à tenir tout le monde informé de nos
            dernières activités, qui incluent des sorties régulières organisées
            par les membres de notre club à la recherche de minéraux et de
            fossiles presque chaque mois dans la région nord de la France.
          </p>

          <h2 className={styles.midTitle}>Signalement de Problèmes</h2>
          <p className={styles.subTitle}>
            Si vous rencontrez des bugs ou des problèmes lors de
            l&apos;utilisation de notre site web, nous vous encourageons à les
            signaler. Veuillez créer un ticket dans le repository ou en me
            contactant sur ce mail :{' '}
            <a href='mailto:michael.laurent59@gmail.com'>{'michael.laurent59@gmail.com'}</a> ,
            et nous le traiterons rapidement pour améliorer votre expérience.
          </p>
        </div>
      </div>
    </main>
  )
}
