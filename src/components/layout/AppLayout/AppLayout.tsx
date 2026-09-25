import type { ReactNode } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import styles from './AppLayout.module.css'

type AppLayoutProps = {
  children: ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.workspace}>
        <Header />
        <main className={styles.main} id="main-content">
          {children}
        </main>
      </div>
    </div>
  )
}

export default AppLayout
