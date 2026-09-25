import { ArrowDown, ArrowUp } from 'lucide-react'
import { Area, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { formatCurrency } from '../../../shared/lib/formatCurrency'
import { analyticsSummary, salesTrend } from '../analyticsData'
import ChartTooltip from './ChartTooltip'
import card from './AnalyticsCard.module.css'
import styles from './SalesAndOrders.module.css'

function SalesAndOrders() {
  return (
    <section className={card.card} aria-labelledby="analytics-sales-title">
      <div className={styles.header}>
        <h2 className={card.title} id="analytics-sales-title">Продажи и заказы</h2>
        <div className={card.legend}>
          <span className={card.legendItem}><i className={`${card.dot} ${card.blue}`} />Выручка</span>
          <span className={card.legendItem}><i className={`${card.dot} ${card.purple}`} />Заказы</span>
          <span className={card.legendItem}><i className={card.previous} />Предыдущий период</span>
        </div>
      </div>
      <div className={styles.metrics}>
        <div><div className={styles.metricLine}><strong>{formatCurrency(analyticsSummary.revenue)}</strong><span className={card.positive}><ArrowUp size={13} aria-hidden="true" />+12%</span></div><p>Выручка</p></div>
        <div><div className={styles.metricLine}><strong>{analyticsSummary.orders}</strong><span className={card.positive}><ArrowUp size={13} aria-hidden="true" />+8%</span></div><p>Заказы</p></div>
        <div><div className={styles.metricLine}><strong>{formatCurrency(analyticsSummary.averageOrder)}</strong><span className={card.negative}><ArrowDown size={13} aria-hidden="true" />-3%</span></div><p>Средний чек</p></div>
      </div>
      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <ComposedChart data={salesTrend} margin={{ top: 8, right: 0, bottom: 0, left: 0 }} accessibilityLayer aria-label="Динамика выручки в рублях и количества заказов за июль 2026">
            <defs><linearGradient id="analytics-revenue-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6594ff" stopOpacity={0.2} /><stop offset="100%" stopColor="#6594ff" stopOpacity={0.015} /></linearGradient></defs>
            <CartesianGrid stroke="#edf1f7" />
            <XAxis dataKey="day" type="number" domain={[1, 31]} ticks={[1, 5, 10, 15, 20, 25, 31]} tickFormatter={(day: number) => `${day} июл.`} tick={{ fontSize: 10, fill: '#7c8ea8' }} tickMargin={9} minTickGap={8} axisLine={false} tickLine={false} />
            <YAxis yAxisId="revenue" domain={[0, 300_000]} ticks={[0, 100_000, 200_000, 300_000]} tickFormatter={(value: number) => formatCurrency(value, 'compact')} width={72} tick={{ fontSize: 10, fill: '#7c8ea8' }} axisLine={false} tickLine={false} />
            <YAxis yAxisId="orders" orientation="right" domain={[0, 60]} ticks={[0, 20, 40, 60]} width={24} tick={{ fontSize: 10, fill: '#7c8ea8' }} axisLine={false} tickLine={false} />
            <Tooltip content={ChartTooltip} isAnimationActive={false} />
            <Area yAxisId="revenue" type="monotone" dataKey="revenue" name="Выручка" stroke="#347cff" strokeWidth={2.3} fill="url(#analytics-revenue-fill)" isAnimationActive={false} />
            <Line yAxisId="orders" type="monotone" dataKey="orders" name="Заказы" stroke="#b69aff" strokeWidth={2} dot={false} isAnimationActive={false} />
            <Line yAxisId="revenue" type="monotone" dataKey="previous" name="Предыдущий период" stroke="#bcc9dd" strokeWidth={1.8} strokeDasharray="5 5" dot={false} isAnimationActive={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default SalesAndOrders
