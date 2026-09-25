import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-react'
import { formatCurrency } from '../../../../shared/lib/formatCurrency'
import type { Order, OrderStatus } from '../../ordersData'
import styles from './OrdersTable.module.css'

type OrdersTableProps = {
  orders: Order[]
}

const statusLabels: Record<OrderStatus, string> = {
  new: 'Новый',
  processing: 'В обработке',
  paid: 'Оплачен',
  shipping: 'В доставке',
  delivered: 'Доставлен',
  cancelled: 'Отменён',
}

const statusClasses: Record<OrderStatus, string> = {
  new: styles.statusNew,
  processing: styles.statusProcessing,
  paid: styles.statusPaid,
  shipping: styles.statusShipping,
  delivered: styles.statusDelivered,
  cancelled: styles.statusCancelled,
}

function OrdersTable({ orders }: OrdersTableProps) {
  return (
    <section className={styles.card} aria-label="Список заказов">
      <div className={styles.tableScroll} role="region" aria-label="Таблица заказов" tabIndex={0}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col"><input type="checkbox" aria-label="Отметить список заказов" /></th>
              <th scope="col">Заказ</th>
              <th scope="col">Клиент</th>
              <th scope="col">Товары</th>
              <th scope="col">Сумма</th>
              <th scope="col">Статус</th>
              <th scope="col">Способ оплаты</th>
              <th scope="col">Дата создания</th>
              <th scope="col">Действия</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td><input type="checkbox" aria-label={`Отметить заказ ${order.id}`} /></td>
                <th scope="row">
                  <span className={styles.primaryText}>#{order.id}</span>
                  <span className={styles.secondaryText}>NS-2026-{order.id}</span>
                </th>
                <td>
                  <span className={styles.primaryText}>{order.customer}</span>
                  <span className={styles.secondaryText}>{order.email}</span>
                </td>
                <td>
                  <div className={styles.thumbnails} aria-label={`Миниатюры товаров заказа ${order.id}`}>
                    {order.thumbnails.map(({ icon: Icon, tone }, index) => (
                      <span className={`${styles.thumbnail} ${styles[tone]}`} aria-hidden="true" key={index}>
                        <Icon size={18} strokeWidth={1.7} />
                      </span>
                    ))}
                    {order.additionalItems ? <span className={styles.moreItems}>+{order.additionalItems}</span> : null}
                  </div>
                </td>
                <td className={styles.total}>{formatCurrency(order.total)}</td>
                <td><span className={`${styles.statusBadge} ${statusClasses[order.status]}`}>{statusLabels[order.status]}</span></td>
                <td className={styles.payment}>{order.paymentMethod}</td>
                <td>
                  <span className={styles.date}>{order.date}</span>
                  <span className={styles.secondaryText}>{order.time}</span>
                </td>
                <td>
                  <button className={styles.actionButton} type="button" aria-label={`Действия для заказа ${order.id}`}>
                    <Ellipsis size={19} strokeWidth={2} aria-hidden="true" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.footer}>
        <p className={styles.count}>Показано 1–10 из 42 заказов</p>
        <nav className={styles.pagination} aria-label="Страницы заказов">
          <button className={styles.pageButton} type="button" aria-label="Предыдущая страница" disabled>
            <ChevronLeft size={17} aria-hidden="true" />
          </button>
          <button className={`${styles.pageButton} ${styles.currentPage}`} type="button" aria-current="page">1</button>
          <button className={styles.pageButton} type="button">2</button>
          <button className={styles.pageButton} type="button">3</button>
          <button className={styles.pageButton} type="button">4</button>
          <button className={styles.pageButton} type="button">5</button>
          <button className={styles.pageButton} type="button" aria-label="Следующая страница">
            <ChevronRight size={17} aria-hidden="true" />
          </button>
        </nav>
      </div>
    </section>
  )
}

export default OrdersTable
