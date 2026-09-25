type TrafficSource = {
  name: string
  value: number
  tone: 'blue' | 'purple' | 'green' | 'orange' | 'slate'
  color: string
}

export const trafficSources: TrafficSource[] = [
  { name: 'Органический поиск', value: 42, tone: 'blue', color: '#347cff' },
  { name: 'Прямой', value: 24, tone: 'purple', color: '#825bea' },
  { name: 'Соцсети', value: 16, tone: 'green', color: '#3cb787' },
  { name: 'Платная реклама', value: 12, tone: 'orange', color: '#f4a334' },
  { name: 'Email', value: 6, tone: 'slate', color: '#aebbd0' },
]
