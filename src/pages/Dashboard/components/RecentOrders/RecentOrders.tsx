import { FileText } from 'lucide-react'
import { orders } from './ordersData'
import type { OrderStatus } from './ordersData'
import styles from './RecentOrders.module.css'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const statusClasses: Record<OrderStatus, string> = {
  'Доставлен': styles.delivered,
  'В обработке': styles.processing,
  'Отправлен': styles.shipped,
  'Отменён': styles.cancelled,
}

function RecentOrders() {
  return (
    <section className={styles.card} aria-labelledby="recent-orders-title">
      <div className={styles.header}>
        <div className={styles.heading}>
          <FileText size={20} strokeWidth={2} aria-hidden="true" />
          <h2 className={styles.title} id="recent-orders-title">Последние заказы</h2>
        </div>
        <button className={styles.viewAll} type="button" disabled>Смотреть все</button>
      </div>

      <div className={styles.tableWrapper} role="region" aria-label="Таблица последних заказов" tabIndex={0}>
        <table className={styles.table} aria-labelledby="recent-orders-title">
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">Клиент</th>
              <th scope="col">Товары</th>
              <th scope="col">Сумма</th>
              <th scope="col">Статус</th>
              <th scope="col">Дата</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <th scope="row" className={styles.orderNumber}>#{order.id}</th>
                <td className={styles.customer}>{order.customer}</td>
                <td>{order.items}</td>
                <td className={styles.amount}>{currencyFormatter.format(order.total)}</td>
                <td><span className={`${styles.badge} ${statusClasses[order.status]}`}>{order.status}</span></td>
                <td className={styles.date}>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default RecentOrders
