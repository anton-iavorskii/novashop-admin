type Category = {
  name: string
  revenue: number
  tone: 'blue' | 'purple' | 'green' | 'orange' | 'coral'
}

export const categories: Category[] = [
  { name: 'Электроника', revenue: 842_000, tone: 'blue' },
  { name: 'Одежда', revenue: 523_000, tone: 'purple' },
  { name: 'Дом и интерьер', revenue: 412_000, tone: 'green' },
  { name: 'Красота и уход', revenue: 305_000, tone: 'orange' },
  { name: 'Спорт и отдых', revenue: 296_000, tone: 'coral' },
]
