import {
  BadgePercent,
  BarChart3,
  FileText,
  LayoutDashboard,
  Megaphone,
  Package,
  Settings,
  ShoppingCart,
  Store,
  Users,
} from 'lucide-react'
import styles from './Sidebar.module.css'

const navigationItems = [
  { label: 'Панель', icon: LayoutDashboard },
  { label: 'Заказы', icon: ShoppingCart },
  { label: 'Товары', icon: Package },
  { label: 'Клиенты', icon: Users },
  { label: 'Аналитика', icon: BarChart3 },
  { label: 'Маркетинг', icon: Megaphone },
  { label: 'Скидки', icon: BadgePercent },
  { label: 'Контент', icon: FileText },
  { label: 'Настройки', icon: Settings },
]

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <span className={styles.brandIcon} aria-hidden="true">
          <Store size={21} strokeWidth={2} />
        </span>
        <span className={styles.brandName}>NovaShop <span>Admin</span></span>
      </div>

      <nav className={styles.navigation} aria-label="Основная навигация">
        <p className={styles.navigationLabel}>МЕНЮ</p>
        <ul className={styles.navigationList}>
          {navigationItems.map(({ label, icon: Icon }, index) => (
            <li key={label}>
              <span
                className={`${styles.navigationItem} ${index === 0 ? styles.active : ''}`}
                aria-current={index === 0 ? 'page' : undefined}
              >
                <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                <span>{label}</span>
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
