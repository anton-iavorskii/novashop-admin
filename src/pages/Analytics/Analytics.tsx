import { Calendar, ChevronDown } from 'lucide-react'
import { analyticsTabs } from './analyticsData'
import SalesAndOrders from './components/SalesAndOrders'
import ConversionFunnel from './components/ConversionFunnel'
import CategorySales from './components/CategorySales'
import SalesChannels from './components/SalesChannels'
import UsersInsight from './components/UsersInsight'
import { NewCustomers, PopularProducts, RecentAnalyticsOrders } from './components/AnalyticsTables'
import SalesGeography from './components/SalesGeography'
import styles from './Analytics.module.css'

function Analytics() {
  return (
    <section className={styles.analytics} aria-labelledby="analytics-title">
      <div className={styles.headingRow}>
        <div>
          <h1 className={styles.title} id="analytics-title">Аналитика</h1>
          <p className={styles.description}>Подробная статистика о вашем магазине</p>
        </div>
        <div className={styles.periodGroup}>
          <button className={styles.period} type="button">
            <Calendar size={17} aria-hidden="true" />
            1 июл. 2026 — 31 июл. 2026
            <ChevronDown size={15} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className={styles.tabs} aria-label="Разделы аналитики">
        {analyticsTabs.map((tab, index) => (
          <button className={`${styles.tab} ${index === 0 ? styles.activeTab : ''}`} type="button" aria-current={index === 0 ? 'page' : undefined} key={tab}>{tab}</button>
        ))}
      </div>

      <div className={styles.heroRow}><SalesAndOrders /><ConversionFunnel /></div>
      <div className={styles.insightsRow}><CategorySales /><SalesChannels /><UsersInsight /></div>
      <div className={styles.tablesRow}><PopularProducts /><NewCustomers /><RecentAnalyticsOrders /></div>
      <SalesGeography />
    </section>
  )
}

export default Analytics
