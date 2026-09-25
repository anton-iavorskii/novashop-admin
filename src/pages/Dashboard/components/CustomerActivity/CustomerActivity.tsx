import { Users } from 'lucide-react'
import { activities } from './activityData'
import styles from './CustomerActivity.module.css'

function CustomerActivity() {
  return (
    <section className={styles.card} aria-labelledby="customer-activity-title">
      <div className={styles.header}>
        <div className={styles.heading}>
          <Users size={20} strokeWidth={2} aria-hidden="true" />
          <h2 className={styles.title} id="customer-activity-title">Активность клиентов</h2>
        </div>
        <button className={styles.viewAll} type="button" disabled>Смотреть все</button>
      </div>

      <ul className={styles.list}>
        {activities.map((activity) => (
          <li className={styles.activity} key={activity.name}>
            <span className={`${styles.avatar} ${styles[activity.avatarTone]}`} aria-hidden="true">{activity.initials}</span>
            <div className={styles.details}>
              <p className={styles.name}>{activity.name}</p>
              <p className={styles.action}>
                <span
                  className={`${styles.dot} ${activity.action === 'Оформил заказ' ? styles.orderDot : styles.customerDot}`}
                  aria-hidden="true"
                />
                <span>{activity.action}</span>
              </p>
            </div>
            <span className={styles.time}>{activity.time}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CustomerActivity
