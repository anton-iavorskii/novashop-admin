import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-react'
import { formatCurrency } from '../../../../shared/lib/formatCurrency'
import type { Product } from '../../productsData'
import styles from './ProductsTable.module.css'

type ProductsTableProps = {
  products: Product[]
}

function stockClass(stock: number) {
  if (stock === 0) return styles.stockEmpty
  if (stock < 10) return styles.stockLow
  if (stock <= 20) return styles.stockMedium
  return styles.stockHigh
}

function ProductsTable({ products }: ProductsTableProps) {
  return (
    <section className={styles.card} aria-label="Список товаров">
      <div className={styles.tableScroll} role="region" aria-label="Таблица товаров" tabIndex={0}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col"><input type="checkbox" aria-label="Отметить список товаров" /></th>
              <th scope="col">Товар</th>
              <th scope="col">Категория</th>
              <th scope="col">Цена</th>
              <th scope="col">Остаток</th>
              <th scope="col">Статус</th>
              <th scope="col">Дата добавления</th>
              <th scope="col">Действия</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              const Icon = product.icon

              return (
                <tr key={product.sku}>
                  <td><input type="checkbox" aria-label={`Отметить товар ${product.name}`} /></td>
                  <th scope="row">
                    <div className={styles.productCell}>
                      <span className={`${styles.thumbnail} ${styles[product.thumbnailTone]}`} aria-hidden="true">
                        <Icon size={20} strokeWidth={1.7} />
                      </span>
                      <span className={styles.productInfo}>
                        <span className={styles.productName}>{product.name}</span>
                        <span className={styles.sku}>SKU: {product.sku}</span>
                      </span>
                    </div>
                  </th>
                  <td>{product.category}</td>
                  <td className={styles.price}>{formatCurrency(product.price)}</td>
                  <td><span className={`${styles.stockBadge} ${stockClass(product.stock)}`}>{product.stock}</span></td>
                  <td>
                    <span className={`${styles.statusBadge} ${product.status === 'active' ? styles.statusActive : styles.statusEmpty}`}>
                      {product.status === 'active' ? 'Активен' : 'Нет в наличии'}
                    </span>
                  </td>
                  <td className={styles.date}>{product.createdAt}</td>
                  <td>
                    <button className={styles.actionButton} type="button" aria-label={`Действия для товара ${product.name}`}>
                      <Ellipsis size={19} strokeWidth={2} aria-hidden="true" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.footer}>
        <p className={styles.count}>Показано 1–10 из 24 товаров</p>
        <nav className={styles.pagination} aria-label="Страницы товаров">
          <button className={styles.pageButton} type="button" aria-label="Предыдущая страница" disabled>
            <ChevronLeft size={17} aria-hidden="true" />
          </button>
          <button className={`${styles.pageButton} ${styles.currentPage}`} type="button" aria-current="page">1</button>
          <button className={styles.pageButton} type="button">2</button>
          <button className={styles.pageButton} type="button">3</button>
          <button className={styles.pageButton} type="button" aria-label="Следующая страница">
            <ChevronRight size={17} aria-hidden="true" />
          </button>
        </nav>
      </div>
    </section>
  )
}

export default ProductsTable
