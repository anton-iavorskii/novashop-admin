import { Calendar, ChevronDown, RotateCcw, Search } from 'lucide-react'
import styles from './OrdersToolbar.module.css'

function OrdersToolbar() {
  return (
    <div className={styles.toolbar} aria-label="Управление списком заказов">
      <label className={styles.searchField}>
        <Search size={18} strokeWidth={1.8} aria-hidden="true" />
        <input type="search" aria-label="Поиск заказов" placeholder="Поиск по номеру заказа, клиенту..." />
      </label>

      <label className={styles.selectField}>
        <span className={styles.fieldLabel}>Статус</span>
        <span className={styles.selectControl}>
          <select defaultValue="" aria-label="Статус заказов">
            <option value="">Все статусы</option>
            <option>Новый</option>
            <option>В обработке</option>
            <option>Оплачен</option>
            <option>В доставке</option>
            <option>Доставлен</option>
            <option>Отменён</option>
          </select>
          <ChevronDown size={16} strokeWidth={1.8} aria-hidden="true" />
        </span>
      </label>

      <label className={styles.selectField}>
        <span className={styles.fieldLabel}>Способ оплаты</span>
        <span className={styles.selectControl}>
          <select defaultValue="" aria-label="Способ оплаты заказа">
            <option value="">Все способы</option>
            <option>Банковская карта</option>
            <option>СБП</option>
            <option>Наличные</option>
          </select>
          <ChevronDown size={16} strokeWidth={1.8} aria-hidden="true" />
        </span>
      </label>

      <label className={styles.selectField}>
        <span className={styles.fieldLabel}>Дата</span>
        <span className={`${styles.selectControl} ${styles.dateControl}`}>
          <Calendar size={16} strokeWidth={1.8} aria-hidden="true" />
          <select defaultValue="" aria-label="Дата заказа">
            <option value="">Все даты</option>
            <option>Июль 2026</option>
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

export default OrdersToolbar
