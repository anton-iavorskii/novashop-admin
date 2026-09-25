import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import styles from './AppLayout.module.css'

function AppLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.workspace}>
        <Header />
        <main className={styles.main} id="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
