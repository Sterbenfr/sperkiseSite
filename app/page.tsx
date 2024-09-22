import React from 'react'
import styles from '../style/homePage.module.css' // Custom styles for the homepage

const HomePage = () => {
  return (
    <div className={styles['homepage']}>
      <header className={styles['header']}>
        <h1>Club de Minéralogie et Paléontologie de la Métropole Nord</h1>
        <p>
          Bienvenue sur le site de Sperkise, lieu de passion pour les Sciences
          de la Terre !
        </p>
      </header>
      <section className={styles['welcome-section']}>
        <h2>Découvrez notre club</h2>
        <p>
          Le Club de Minéralogie et Paléontologie de la Métropole Nord est
          heureux de vous accueillir sur son site. Ce lieu de dialogue et de
          passion vous apportera convivialité, aide et échanges de
          connaissances. Venez découvrir nos activités, et peut-être nous
          rejoindre pour partager notre passion !
        </p>
      </section>
      <section className={styles['activities-section']}>
        <h2>Nos Activités</h2>
        <ul>
          <li>
            Conférences sur les fossiles, dinosaures, roches, minéraux,
            météorites et volcans
          </li>
          <li>Réunions mensuelles le premier vendredi du mois à Wasquehal</li>
          <li>Sorties terrain pour collecte de fossiles et minéraux</li>
          <li>Accès à notre bibliothèque de plus de 600 ouvrages</li>
          <li>Bourse aux minéraux et fossiles internationale en septembre</li>
        </ul>
      </section>
      <section className={styles['reconstruction-section']}>
        <h2>Attention !</h2>
        <p>
          Notre site est actuellement en pleine refonte. Certaines
          fonctionnalités peuvent ne pas encore être disponibles, et du contenu
          peut changer régulièrement. Merci de votre compréhension.
        </p>
      </section>
      <footer className={styles['footer']}>
        <p>
          Rejoignez-nous pour nos événements mensuels et partagez notre passion
          pour les minéraux et fossiles !
        </p>
      </footer>
    </div>
  )
}

export default HomePage
