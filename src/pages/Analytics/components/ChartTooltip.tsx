import type { TooltipContentProps } from 'recharts'
import { formatCurrency } from '../../../shared/lib/formatCurrency'
import styles from './AnalyticsCard.module.css'

function ChartTooltip({ active, payload, label }: TooltipContentProps) {
  if (!active || !payload?.length) return null

  return (
    <div className={styles.tooltip}>
      <p className={styles.tooltipTitle}>{typeof label === 'number' ? `${label} июл. 2026` : label}</p>
      {payload.map((entry) => typeof entry.value === 'number' ? (
        <p className={styles.tooltipRow} key={String(entry.dataKey)}>
          <span>{entry.name}</span>
          <strong>{entry.dataKey === 'orders' ? entry.value : formatCurrency(entry.value)}</strong>
        </p>
      ) : null)}
    </div>
  )
}

export default ChartTooltip
