import { ShoppingBag } from 'lucide-react'
import { formatCurrency } from '../../../../shared/lib/formatCurrency'
import { categories } from './categoriesData'
import styles from './TopCategories.module.css'

const maxRevenue = Math.max(...categories.map((category) => category.revenue))

function TopCategories() {
  return (
    <section className={styles.card} aria-labelledby="top-categories-title">
      <div className={styles.header}>
        <div className={styles.heading}>
          <ShoppingBag size={20} strokeWidth={2} aria-hidden="true" />
          <div>
            <h2 className={styles.title} id="top-categories-title">Топ категорий</h2>
            <p className={styles.description}>По выручке</p>
          </div>
        </div>
        <button className={styles.viewAll} type="button" disabled>Смотреть все</button>
      </div>

      <ul className={styles.list}>
        {categories.map((category) => (
          <li className={styles.item} key={category.name}>
            <div className={styles.itemHeading}>
              <span className={styles.categoryName}>{category.name}</span>
              <span className={styles.revenue}>{formatCurrency(category.revenue)}</span>
            </div>
            <progress
              className={`${styles.progress} ${styles[category.tone]}`}
              value={category.revenue}
              max={maxRevenue}
              aria-label={`${category.name}: ${formatCurrency(category.revenue)}`}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TopCategories
