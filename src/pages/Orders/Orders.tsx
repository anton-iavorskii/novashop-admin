import { Plus } from 'lucide-react'
import OrdersTable from './components/OrdersTable/OrdersTable'
import OrdersToolbar from './components/OrdersToolbar/OrdersToolbar'
import { orders } from './ordersData'
import styles from './Orders.module.css'

function Orders() {
  return (
    <section className={styles.orders} aria-labelledby="orders-title">
      <div className={styles.headingRow}>
        <div>
          <h1 className={styles.title} id="orders-title">Заказы</h1>
          <p className={styles.description}>Управление заказами и их обработка</p>
        </div>
        <button className={styles.addButton} type="button">
          <Plus size={18} strokeWidth={1.9} aria-hidden="true" />
          Добавить заказ
        </button>
      </div>

      <OrdersToolbar />
      <OrdersTable orders={orders} />
    </section>
  )
}

export default Orders
