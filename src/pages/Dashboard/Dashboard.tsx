import { BarChart3, Calendar, CreditCard, Percent, ShoppingCart } from 'lucide-react'
import StatsCard from '../../components/StatsCard/StatsCard'
import SalesOverview from './components/SalesOverview/SalesOverview'
import TopCategories from './components/TopCategories/TopCategories'
import TrafficSources from './components/TrafficSources/TrafficSources'
import RecentOrders from './components/RecentOrders/RecentOrders'
import ProductManagement from './components/ProductManagement/ProductManagement'
import CustomerActivity from './components/CustomerActivity/CustomerActivity'
import styles from './Dashboard.module.css'

const stats = [
  {
    title: 'Общая выручка',
    value: '$24,780',
    change: '+12.5%',
    helper: 'по сравнению с прошлым месяцем',
    icon: BarChart3,
    accent: 'blue',
  },
  {
    title: 'Всего заказов',
    value: '892',
    change: '+8.2%',
    helper: 'по сравнению с прошлым месяцем',
    icon: ShoppingCart,
    accent: 'green',
  },
  {
    title: 'Конверсия',
    value: '3.6%',
    change: '+0.8%',
    helper: 'по сравнению с прошлым месяцем',
    icon: Percent,
    accent: 'purple',
  },
  {
    title: 'Средний чек',
    value: '$27.80',
    change: '+4.1%',
    helper: 'по сравнению с прошлым месяцем',
    icon: CreditCard,
    accent: 'orange',
  },
] as const

function Dashboard() {
  return (
    <section className={styles.dashboard} aria-labelledby="dashboard-title">
      <div className={styles.headingRow}>
        <div className={styles.headingText}>
          <h1 className={styles.title} id="dashboard-title">С возвращением, Антон</h1>
          <p className={styles.description}>Вот что происходит в вашем магазине сегодня.</p>
        </div>
        <div className={styles.period} aria-label="Период: 1 июля — 31 июля 2026">
          <Calendar size={18} strokeWidth={1.8} aria-hidden="true" />
          <span>1 июл. 2026 — 31 июл. 2026</span>
        </div>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className={styles.analyticsGrid}>
        <SalesOverview />
        <TopCategories />
        <TrafficSources />
      </div>

      <div className={styles.operationsGrid}>
        <RecentOrders />
        <ProductManagement />
        <CustomerActivity />
      </div>
    </section>
  )
}

export default Dashboard
