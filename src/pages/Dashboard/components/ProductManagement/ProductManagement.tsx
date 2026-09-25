import { Package } from 'lucide-react'
import { formatCurrency } from '../../../../shared/lib/formatCurrency'
import { products } from './productsData'
import styles from './ProductManagement.module.css'

function ProductManagement() {
  return (
    <section className={styles.card} aria-labelledby="product-management-title">
      <div className={styles.header}>
        <div className={styles.heading}>
          <Package size={20} strokeWidth={2} aria-hidden="true" />
          <h2 className={styles.title} id="product-management-title">Управление товарами</h2>
        </div>
        <button className={styles.viewAll} type="button" disabled>Смотреть все</button>
      </div>

      <div className={styles.tableWrapper} role="region" aria-label="Таблица товаров" tabIndex={0}>
        <table className={styles.table} aria-labelledby="product-management-title">
          <thead>
            <tr>
              <th scope="col">Товар</th>
              <th scope="col">Цена</th>
              <th scope="col">Остаток</th>
              <th scope="col">Статус</th>
            </tr>
          </thead>
          <tbody>
            {products.map(({ icon: Icon, ...product }) => (
              <tr key={product.name}>
                <th scope="row">
                  <div className={styles.product}>
                    <span className={`${styles.thumbnail} ${styles[product.thumbnailTone]}`} aria-hidden="true">
                      <Icon size={19} strokeWidth={1.7} />
                    </span>
                    <span className={styles.productName}>{product.name}</span>
                  </div>
                </th>
                <td className={styles.price}>{formatCurrency(product.price)}</td>
                <td><span className={`${styles.badge} ${styles.stock} ${styles[product.stockTone]}`}>{product.stock}</span></td>
                <td><span className={`${styles.badge} ${styles.green}`}>{product.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ProductManagement
