import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { formatCurrency } from '../../../shared/lib/formatCurrency'
import { analyticsSummary, categorySales } from '../analyticsData'
import card from './AnalyticsCard.module.css'
import styles from './CategorySales.module.css'

function CategorySales() {
  return (
    <section className={card.card} aria-labelledby="analytics-categories-title">
      <h2 className={card.title} id="analytics-categories-title">Продажи по категориям</h2>
      <div className={styles.body}>
        <div className={styles.donut} role="img" aria-label="Доли выручки по категориям товаров">
          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <PieChart><Pie data={categorySales} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius="61%" outerRadius="95%" startAngle={90} endAngle={-270} stroke="#fff" strokeWidth={1.5} isAnimationActive={false}>{categorySales.map((item) => <Cell key={item.name} fill={item.color} />)}</Pie></PieChart>
          </ResponsiveContainer>
          <div className={styles.center}><strong>{formatCurrency(analyticsSummary.revenue)}</strong><span>Выручка</span></div>
        </div>
        <ul className={styles.legend}>
          {categorySales.map((item) => <li key={item.name}><span className={`${styles.dot} ${styles[item.tone]}`} aria-hidden="true" /><span>{item.name}</span><strong>{item.value}%</strong></li>)}
        </ul>
      </div>
    </section>
  )
}

export default CategorySales
