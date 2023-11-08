import { NextApiResponse } from 'next'
import styles from '../styles/page.module.css'

const MaintenancePage = () => (
  <main className={styles.main}>
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Site en Maintenance</h1>
        <p>
          Nous sommes désolés, mais le site est actuellement en maintenance.
          Merci de revenir plus tard.
        </p>
      </div>
    </div>
  </main>
)

MaintenancePage.getInitialProps = ({ res }: { res: NextApiResponse }) => {
  res.statusCode = 503 // Set the 503 status code for maintenance.
  return {}
}

export default MaintenancePage
