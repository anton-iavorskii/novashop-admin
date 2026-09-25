type Category = {
  name: string
  revenue: number
  tone: 'blue' | 'purple' | 'green' | 'orange' | 'coral'
}

export const categories: Category[] = [
  { name: 'Электроника', revenue: 8420, tone: 'blue' },
  { name: 'Одежда', revenue: 5230, tone: 'purple' },
  { name: 'Дом и интерьер', revenue: 4120, tone: 'green' },
  { name: 'Красота и уход', revenue: 3050, tone: 'orange' },
  { name: 'Спорт и отдых', revenue: 2960, tone: 'coral' },
]
