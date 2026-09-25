import { Bell, Search } from 'lucide-react'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.searchField}>
        <Search size={18} strokeWidth={1.9} aria-hidden="true" />
        <input
          type="search"
          aria-label="Поиск товаров, заказов, клиентов"
          placeholder="Поиск товаров, заказов, клиентов..."
        />
      </div>

      <div className={styles.headerActions}>
        <span className={styles.notifications} role="img" aria-label="Уведомления">
          <Bell size={20} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <div className={styles.profile}>
          <span className={styles.avatar} aria-hidden="true">В</span>
          <div className={styles.profileDetails}>
            <span className={styles.profileName}>Виктор</span>
            <span className={styles.profileRole}>Владелец магазина</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
