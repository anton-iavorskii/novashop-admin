import type { LucideIcon } from 'lucide-react'
import styles from './StatsCard.module.css'

type StatsCardProps = {
  title: string
  value: string
  change: string
  helper: string
  icon: LucideIcon
  accent: 'blue' | 'green' | 'purple' | 'orange'
}

function StatsCard({
  title,
  value,
  change,
  helper,
  icon: Icon,
  accent,
}: StatsCardProps) {
  return (
    <article className={styles.card}>
      <span className={`${styles.iconBox} ${styles[accent]}`} aria-hidden="true">
        <Icon size={22} strokeWidth={1.9} />
      </span>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.metricRow}>
          <p className={styles.value}>{value}</p>
          <span className={styles.change}>{change}</span>
        </div>
        <p className={styles.helper}>{helper}</p>
      </div>
    </article>
  )
}

export default StatsCard
