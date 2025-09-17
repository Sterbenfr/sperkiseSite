'use client'
import React from 'react'
import styles from '../../style/actualites.module.css'
import downloadICSFile from '@/utils/dowloadICSFile'

const Actualites = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Section 1: Bourse aux minéraux et fossiles */}
      <div className={styles.card}>
        <h2>Bourse aux Minéraux et Fossiles - 27-28/09/2025</h2>
        <p>
          Le weekend du 27-28 septembre 2025, notre club organise la
          traditionnelle bourse aux minéraux et fossiles. Nous vous
          accueillerons de 9h30 à 18h sans interruption. Une restauration sera
          proposée sur place, avec tartes, sandwichs, croque-monsieur et
          boissons. Un stand d&apos;identification, de présentation de
          l&apos;association et une tombola seront aussi proposés
        </p>
        {/** TODO : Re-add this 
        /* Calendar Button 
        <button
          className={styles.calendarButton}
          onClick={() =>
            downloadICSFile(
              'Bourse aux Minéraux et Fossiles Wasquehal',
              'Bourse aux minéraux et fossiles à Wasquehal, Salle Pierre Herman.',
              '5 Rue Jean Macé, 59290 Wasquehal',
              '20240928T093000Z',
              '20240928T180000Z',
            )
          }
        >
          Ajouter à mon calendrier
        </button>
          */}
        {/* GPS and Map */}
        <div className={styles.location}>
          <p>Adresse: Salle Pierre Herman, 5 Rue Jean Macé, 59290 Wasquehal</p>
          <p>
            À moins de 5 min du métro Wasquehal Hotel de ville. Bus Arrêt
            centre, ligne 30, 906 et C11.
          </p>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.703010826013!2d3.1280025999999994!3d50.66977449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c329a297d026ab%3A0xdee894237310b5d8!2sSalle%20Pierre%20Herman!5e0!3m2!1sfr!2sfr!4v1726964923692!5m2!1sfr!2sfr'
            className={styles.map}
            allowFullScreen
            loading='lazy'
          ></iframe>
        </div>
      </div>

      {/* Section 2: Prochaine réunion */}
      <div className={styles.card}>
        <h2>Prochaine réunion</h2>
        <p>
          La prochaine réunion se tiendra le vendredi 3 Octobre 2025 à 19h45.
        </p>

        {/* Calendar Button 
        <button
          className={styles.calendarButton}
          onClick={() =>
            downloadICSFile(
              'Prochaine réunion du club Wasquehal',
              'Réunion mensuelle du Club de Minéralogie et Paléontologie de Wasquehal.',
              '11 Av. du Molinel, 59290 Wasquehal',
              '20240906T174500Z', // Event Start: 06/09/2024 19:45 (in UTC)
              '20240906T200000Z', // Event End: 06/09/2024 22:00 (in UTC)
            )
          }
        >
          Ajouter à mon calendrier
        </button>
*/}
        {/* GPS and Map */}
        <div className={styles.location}>
          <p>
            Adresse: 11 Av. du Molinel, 59290 Wasquehal, dans la droite du
            bâtiment de foot.
          </p>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.5374193453224!2d3.133490116005034!3d50.67880667950652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32ab28820f073%3A0x86b7fb9b86cb0562!2s11%20Avenue%20du%20Molinel%2C%2059290%20Wasquehal!5e0!3m2!1sen!2sfr!4v1695327289516!5m2!1sen!2sfr'
            className={styles.map}
            allowFullScreen
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Actualites
