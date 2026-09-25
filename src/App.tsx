import AppLayout from './components/layout/AppLayout/AppLayout'
import styles from './App.module.css'

function App() {
  return (
    <AppLayout>
      <div className={styles.pageHeading}>
        <h1 className={styles.title}>Панель</h1>
        <p className={styles.description}>Обзор основных показателей магазина</p>
      </div>
    </AppLayout>
  )
}

export default App
