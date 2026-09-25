import { funnelSteps } from '../analyticsData'
import card from './AnalyticsCard.module.css'
import styles from './ConversionFunnel.module.css'

function ConversionFunnel() {
  return (
    <section className={`${card.card} ${styles.card}`} aria-labelledby="analytics-funnel-title">
      <h2 className={card.title} id="analytics-funnel-title">Конверсия в заказ</h2>
      <ol className={styles.steps}>
        {funnelSteps.map((step) => (
          <li className={styles.step} key={step.label}>
            <div className={styles.shapeBox} aria-hidden="true"><span className={`${styles.shape} ${styles[step.tone]}`} /></div>
            <div className={styles.label}><span>{step.label}</span><strong>{step.value}</strong></div>
            <span className={styles.percent}>{step.percent}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default ConversionFunnel
