import { BarChart3, ChevronDown } from 'lucide-react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { TooltipContentProps } from 'recharts'
import { formatCurrency } from '../../../../shared/lib/formatCurrency'
import { salesData } from './salesData'
import styles from './SalesOverview.module.css'

const dayTicks = [1, 5, 9, 13, 17, 21, 25, 29]
const revenueTicks = [0, 50_000, 100_000, 150_000, 200_000]

function formatRevenueTick(value: number) {
  return formatCurrency(value, 'compact')
}

function formatDay(day: number) {
  return `${day} июл.`
}

function SalesTooltip({ active, payload, label }: TooltipContentProps) {
  const revenue = payload?.[0]?.value

  if (!active || label == null || typeof revenue !== 'number') {
    return null
  }

  return (
    <div className={styles.tooltip}>
      <p className={styles.tooltipDate}>{label} июл. 2026</p>
      <p className={styles.tooltipValue}>{formatCurrency(revenue)}</p>
    </div>
  )
}

function SalesOverview() {
  return (
    <section className={styles.card} aria-labelledby="sales-overview-title">
      <div className={styles.header}>
        <div className={styles.heading}>
          <BarChart3 className={styles.headingIcon} size={20} strokeWidth={2} aria-hidden="true" />
          <div>
            <h2 className={styles.title} id="sales-overview-title">Обзор продаж</h2>
            <p className={styles.description}>Общая выручка и заказы по времени</p>
          </div>
        </div>
        <div className={styles.controls}>
          <button className={styles.control} type="button" disabled>
            Выручка
            <ChevronDown size={14} aria-hidden="true" />
          </button>
          <button className={styles.control} type="button" disabled>
            Июль 2026
            <ChevronDown size={14} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <AreaChart
            data={salesData}
            margin={{ top: 12, right: 12, bottom: 0, left: 0 }}
            accessibilityLayer
            aria-label="Выручка магазина за июль 2026 года в рублях"
          >
            <CartesianGrid stroke="#edf1f7" />
            <XAxis
              dataKey="day"
              type="number"
              domain={[1, 31]}
              ticks={dayTicks}
              tickFormatter={formatDay}
              interval="preserveStartEnd"
              minTickGap={16}
              tick={{ fill: '#7c8ea8', fontSize: 11 }}
              tickMargin={10}
              height={30}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[0, 200_000]}
              ticks={revenueTicks}
              tickFormatter={formatRevenueTick}
              tick={{ fill: '#7c8ea8', fontSize: 11 }}
              tickMargin={8}
              width={72}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              content={SalesTooltip}
              cursor={{ stroke: '#d9e6f8', strokeWidth: 1 }}
              isAnimationActive={false}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              name="Выручка"
              stroke="#347cff"
              strokeWidth={2.5}
              fill="#347cff"
              fillOpacity={0.1}
              dot={false}
              activeDot={{ r: 4.5, stroke: '#fff', strokeWidth: 2 }}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default SalesOverview
