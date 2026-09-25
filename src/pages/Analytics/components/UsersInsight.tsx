import { ArrowUp } from 'lucide-react'
import { Area, AreaChart, ResponsiveContainer } from 'recharts'
import { visitorMetrics, visitorTrend } from '../analyticsData'
import card from './AnalyticsCard.module.css'
import styles from './UsersInsight.module.css'

function UsersInsight() {
  return (
    <section className={card.card} aria-labelledby="analytics-users-title">
      <h2 className={card.title} id="analytics-users-title">Пользователи</h2>
      <div className={styles.metric}><strong>8 420</strong><span className={card.positive}><ArrowUp size={13} aria-hidden="true" />+18%</span></div>
      <p className={styles.caption}>Посетители за период</p>
      <div className={styles.sparkline} role="img" aria-label="Рост посещаемости за период">
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <AreaChart data={visitorTrend} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
            <defs><linearGradient id="analytics-visitors-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#b69aff" stopOpacity={0.22} /><stop offset="100%" stopColor="#b69aff" stopOpacity={0} /></linearGradient></defs>
            <Area type="monotone" dataKey="visitors" stroke="#af91ff" strokeWidth={2} fill="url(#analytics-visitors-fill)" isAnimationActive={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <dl className={styles.metrics}>{visitorMetrics.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd>{item.share ? <dd className={styles.share}>{item.share}</dd> : null}</div>)}</dl>
    </section>
  )
}

export default UsersInsight
