import { ArrowRight } from 'lucide-react'
import { formatCurrency } from '../../../shared/lib/formatCurrency'
import { newCustomers, popularProducts, recentAnalyticsOrders } from '../analyticsData'
import card from './AnalyticsCard.module.css'
import styles from './AnalyticsTables.module.css'

export function PopularProducts() {
  return (
    <section className={`${card.card} ${styles.card}`} aria-labelledby="analytics-products-title">
      <h2 className={card.title} id="analytics-products-title">Популярные товары</h2>
      <div className={styles.tableRegion} role="region" aria-label="Популярные товары" tabIndex={0}>
        <table className={`${styles.table} ${styles.products}`}>
          <thead><tr><th scope="col">#</th><th scope="col">Товар</th><th scope="col">Продажи</th><th scope="col">Выручка</th></tr></thead>
          <tbody>{popularProducts.map(({ icon: Icon, ...product }, index) => (
            <tr key={product.name}><td>{index + 1}</td><th scope="row"><span className={styles.product}><span className={styles.thumbnail} aria-hidden="true"><Icon size={15} strokeWidth={1.6} /></span><span>{product.name}</span></span></th><td className={styles.number}>{product.sales}</td><td className={styles.money}>{formatCurrency(product.revenue)}</td></tr>
          ))}</tbody>
        </table>
      </div>
      <button className={styles.viewAll} type="button">Смотреть все товары<ArrowRight size={13} aria-hidden="true" /></button>
    </section>
  )
}

export function NewCustomers() {
  return (
    <section className={`${card.card} ${styles.card}`} aria-labelledby="analytics-customers-title">
      <h2 className={card.title} id="analytics-customers-title">Новые клиенты</h2>
      <div className={styles.tableRegion} role="region" aria-label="Новые клиенты" tabIndex={0}>
        <table className={styles.table}>
          <thead><tr><th scope="col">#</th><th scope="col">Клиент</th><th scope="col">Дата регистрации</th></tr></thead>
          <tbody>{newCustomers.map((customer, index) => <tr key={customer.name}><td>{index + 1}</td><th scope="row">{customer.name}</th><td className={styles.date}>{customer.date}</td></tr>)}</tbody>
        </table>
      </div>
      <button className={styles.viewAll} type="button">Смотреть всех клиентов<ArrowRight size={13} aria-hidden="true" /></button>
    </section>
  )
}

export function RecentAnalyticsOrders() {
  return (
    <section className={`${card.card} ${styles.card}`} aria-labelledby="analytics-orders-title">
      <h2 className={card.title} id="analytics-orders-title">Последние заказы</h2>
      <div className={styles.tableRegion} role="region" aria-label="Последние заказы" tabIndex={0}>
        <table className={styles.table}>
          <thead><tr><th scope="col">#</th><th scope="col">Сумма</th><th scope="col">Статус</th><th scope="col">Дата</th></tr></thead>
          <tbody>{recentAnalyticsOrders.map((order) => <tr key={order.id}><th scope="row">{order.id}</th><td className={styles.money}>{formatCurrency(order.total)}</td><td><span className={`${styles.badge} ${styles[order.tone]}`}>{order.status}</span></td><td className={styles.date}>{order.date}</td></tr>)}</tbody>
        </table>
      </div>
      <button className={styles.viewAll} type="button">Смотреть все заказы<ArrowRight size={13} aria-hidden="true" /></button>
    </section>
  )
}
