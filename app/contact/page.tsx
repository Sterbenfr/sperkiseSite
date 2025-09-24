'use client'
import React from 'react'
import styles from '../../style/contact.module.css'

const Contact = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Section 1: Contact Email */}
      <div className={styles.card}>
        <h2>Nous contacter</h2>
        <p>
          Pour plus d&apos;informations, n&apos;hésitez pas à nous envoyer un
          mail à l&apos;adresse suivante :
        </p>
        <p className={styles.email}>
          <a href='mailto:michael.laurent59@gmail.com'>
            michael.laurent59@gmail.com
          </a>
        </p>
      </div>

      {/* Section 2: Rendez-vous au stand */}
      <div className={styles.card}>
        <h2>Venez nous rencontrer à la bourse</h2>
        <p>
          Nous serons disponibles pour répondre à toutes vos questions lors de
          la bourse aux minéraux et fossiles qui se tiendra les 27 et 28
          septembre 2025. N&apos;hésitez pas à venir nous voir à notre stand
          pour en savoir plus sur le club, nos activités, ou simplement discuter
          de minéraux et fossiles !
        </p>

        {/* Map for the stand location */}
        <div className={styles.location}>
          <p>Adresse: Salle Pierre Herman, 5 Rue Jean Macé, 59290 Wasquehal</p>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.703010826013!2d3.1280025999999994!3d50.66977449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c329a297d026ab%3A0xdee894237310b5d8!2sSalle%20Pierre%20Herman!5e0!3m2!1sfr!2sfr!4v1726964923692!5m2!1sfr!2sfr'
            className={styles.map}
            allowFullScreen
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
