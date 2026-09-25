import { Megaphone } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { trafficSources } from './trafficData'
import styles from './TrafficSources.module.css'

function TrafficSources() {
  return (
    <section className={styles.card} aria-labelledby="traffic-sources-title">
      <div className={styles.header}>
        <div className={styles.heading}>
          <Megaphone size={20} strokeWidth={2} aria-hidden="true" />
          <h2 className={styles.title} id="traffic-sources-title">Источники трафика</h2>
        </div>
        <button className={styles.viewAll} type="button" disabled>Смотреть все</button>
      </div>

      <div className={styles.body}>
        <div className={styles.donut} role="img" aria-label="24.8K всего визитов; распределение по источникам в легенде">
          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <PieChart accessibilityLayer={false}>
              <Pie
                data={trafficSources}
                dataKey="value"
                nameKey="name"
                innerRadius="61%"
                outerRadius="92%"
                startAngle={90}
                endAngle={-270}
                stroke="#fff"
                strokeWidth={1.5}
                isAnimationActive={false}
              >
                {trafficSources.map((source) => (
                  <Cell key={source.name} fill={source.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className={styles.donutCenter} aria-hidden="true">
            <strong>24.8K</strong>
            <span>Всего визитов</span>
          </div>
        </div>

        <ul className={styles.legend}>
          {trafficSources.map((source) => (
            <li className={styles.legendItem} key={source.name}>
              <span className={`${styles.dot} ${styles[source.tone]}`} aria-hidden="true" />
              <span className={styles.legendName}>{source.name}</span>
              <span className={styles.percent}>{source.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default TrafficSources
