import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { formatCurrency } from '../../../shared/lib/formatCurrency'
import { salesChannels } from '../analyticsData'
import ChartTooltip from './ChartTooltip'
import card from './AnalyticsCard.module.css'
import styles from './SalesChannels.module.css'

function SalesChannels() {
  return (
    <section className={card.card} aria-labelledby="analytics-channels-title">
      <h2 className={card.title} id="analytics-channels-title">Динамика по каналам продаж</h2>
      <div className={`${card.legend} ${styles.legend}`}><span className={card.legendItem}><i className={`${card.dot} ${card.blue}`} />Выручка</span><span className={card.legendItem}><i className={`${card.dot} ${card.purple}`} />Заказы</span></div>
      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <BarChart data={salesChannels} margin={{ top: 6, left: 0, right: 0, bottom: 0 }} barGap={5} accessibilityLayer aria-label="Выручка и заказы по каналам продаж; левая ось — рубли, правая — заказы">
            <CartesianGrid stroke="#edf1f7" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 9, fill: '#71839e' }} interval={0} tickMargin={8} axisLine={false} tickLine={false} />
            <YAxis yAxisId="revenue" domain={[0, 200_000]} ticks={[0, 50_000, 100_000, 150_000, 200_000]} tickFormatter={(value: number) => formatCurrency(value, 'compact')} width={65} tick={{ fontSize: 9, fill: '#7c8ea8' }} axisLine={false} tickLine={false} />
            <YAxis yAxisId="orders" orientation="right" domain={[0, 200]} ticks={[0, 50, 100, 150, 200]} width={25} tick={{ fontSize: 9, fill: '#a193bd' }} axisLine={false} tickLine={false} />
            <Tooltip content={ChartTooltip} cursor={{ fill: '#f5f7fc' }} isAnimationActive={false} />
            <Bar yAxisId="revenue" dataKey="revenue" name="Выручка" fill="#759eff" radius={[3, 3, 0, 0]} maxBarSize={23} isAnimationActive={false} />
            <Bar yAxisId="orders" dataKey="orders" name="Заказы" fill="#bba2ff" radius={[3, 3, 0, 0]} maxBarSize={23} isAnimationActive={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default SalesChannels
