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
import type { LucideIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'

type NavigationItem = {
  label: string
  path: string
  icon: LucideIcon
}

const navigationItems: NavigationItem[] = [
  { label: 'Панель', path: '/', icon: LayoutDashboard },
  { label: 'Заказы', path: '/orders', icon: ShoppingCart },
  { label: 'Товары', path: '/products', icon: Package },
  { label: 'Клиенты', path: '/customers', icon: Users },
  { label: 'Аналитика', path: '/analytics', icon: BarChart3 },
  { label: 'Маркетинг', path: '/marketing', icon: Megaphone },
  { label: 'Скидки', path: '/discounts', icon: BadgePercent },
  { label: 'Контент', path: '/content', icon: FileText },
  { label: 'Настройки', path: '/settings', icon: Settings },
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
          {navigationItems.map(({ label, path, icon: Icon }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `${styles.navigationItem} ${isActive ? styles.active : ''}`
                }
              >
                <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
