import { Plus } from 'lucide-react'
import ProductsTable from './components/ProductsTable/ProductsTable'
import ProductsToolbar from './components/ProductsToolbar/ProductsToolbar'
import { products } from './productsData'
import styles from './Products.module.css'

function Products() {
  return (
    <section className={styles.products} aria-labelledby="products-title">
      <div className={styles.headingRow}>
        <div>
          <h1 className={styles.title} id="products-title">Товары</h1>
          <p className={styles.description}>Управление каталогом товаров</p>
        </div>
        <button className={styles.addButton} type="button">
          <Plus size={18} strokeWidth={1.9} aria-hidden="true" />
          Добавить товар
        </button>
      </div>

      <ProductsToolbar />
      <ProductsTable products={products} />
    </section>
  )
}

export default Products
