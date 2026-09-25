import { ChevronDown, RotateCcw, Search } from 'lucide-react'
import styles from './ProductsToolbar.module.css'

function ProductsToolbar() {
  return (
    <div className={styles.toolbar} aria-label="Управление списком товаров">
      <label className={styles.searchField}>
        <Search size={18} strokeWidth={1.8} aria-hidden="true" />
        <input type="search" aria-label="Поиск товаров" placeholder="Поиск товаров..." />
      </label>

      <label className={styles.selectField}>
        <span className={styles.fieldLabel}>Категория</span>
        <span className={styles.selectControl}>
          <select defaultValue="" aria-label="Категория товаров">
            <option value="">Все категории</option>
            <option>Электроника</option>
            <option>Аксессуары</option>
            <option>Дом и интерьер</option>
            <option>Одежда</option>
            <option>Спорт и отдых</option>
            <option>Красота и уход</option>
          </select>
          <ChevronDown size={16} strokeWidth={1.8} aria-hidden="true" />
        </span>
      </label>

      <label className={styles.selectField}>
        <span className={styles.fieldLabel}>Статус</span>
        <span className={styles.selectControl}>
          <select defaultValue="" aria-label="Статус товаров">
            <option value="">Все статусы</option>
            <option>Активен</option>
            <option>Нет в наличии</option>
          </select>
          <ChevronDown size={16} strokeWidth={1.8} aria-hidden="true" />
        </span>
      </label>

      <button className={styles.resetButton} type="button">
        <RotateCcw size={17} strokeWidth={1.8} aria-hidden="true" />
        Сбросить
      </button>
    </div>
  )
}

export default ProductsToolbar
