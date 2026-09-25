import { Backpack, Footprints, Headphones, Shirt, Watch } from 'lucide-react'

export const analyticsSummary = { revenue: 324_780, orders: 142, averageOrder: 2_287 }
export const analyticsTabs = ['Обзор', 'Продажи', 'Клиенты', 'Товары', 'Маркетинг']

export const salesTrend = [
  { day: 1, revenue: 105_000, orders: 16, previous: 28_000 },
  { day: 3, revenue: 139_000, orders: 20, previous: 42_000 },
  { day: 5, revenue: 117_000, orders: 17, previous: 30_000 },
  { day: 7, revenue: 147_000, orders: 23, previous: 48_000 },
  { day: 9, revenue: 176_000, orders: 24, previous: 57_000 },
  { day: 11, revenue: 137_000, orders: 21, previous: 44_000 },
  { day: 13, revenue: 177_000, orders: 25, previous: 61_000 },
  { day: 15, revenue: 218_000, orders: 29, previous: 79_000 },
  { day: 17, revenue: 187_000, orders: 27, previous: 66_000 },
  { day: 19, revenue: 171_000, orders: 25, previous: 67_000 },
  { day: 21, revenue: 206_000, orders: 29, previous: 79_000 },
  { day: 23, revenue: 245_000, orders: 34, previous: 98_000 },
  { day: 25, revenue: 212_000, orders: 31, previous: 85_000 },
  { day: 27, revenue: 191_000, orders: 33, previous: 105_000 },
  { day: 29, revenue: 256_000, orders: 38, previous: 87_000 },
  { day: 31, revenue: 228_000, orders: 34, previous: 76_000 },
]

export const funnelSteps = [
  { label: 'Просмотры товаров', value: '12 480', percent: '100%', tone: 'blue' },
  { label: 'Добавили в корзину', value: '3 240', percent: '26%', tone: 'purple' },
  { label: 'Оформление заказа', value: '1 860', percent: '15%', tone: 'pink' },
  { label: 'Завершили покупку', value: '1 420', percent: '11%', tone: 'mint' },
] as const

export const categorySales = [
  { name: 'Электроника', value: 28, color: '#6594ff', tone: 'blue' },
  { name: 'Одежда', value: 18, color: '#bba2ff', tone: 'purple' },
  { name: 'Аксессуары', value: 16, color: '#ff9dbf', tone: 'pink' },
  { name: 'Дом и интерьер', value: 14, color: '#ffc793', tone: 'peach' },
  { name: 'Спорт и отдых', value: 12, color: '#ffd36e', tone: 'yellow' },
  { name: 'Красота и уход', value: 8, color: '#91d6b1', tone: 'mint' },
  { name: 'Другое', value: 4, color: '#b9c5d8', tone: 'slate' },
]

export const salesChannels = [
  { name: 'Сайт', revenue: 187_000, orders: 82 },
  { name: 'Маркетплейсы', revenue: 89_000, orders: 38 },
  { name: 'Соцсети', revenue: 32_000, orders: 14 },
  { name: 'Реклама', revenue: 16_000, orders: 6 },
]

export const visitorTrend = [420, 510, 445, 545, 625, 575, 540, 605, 695, 640, 570, 660, 710, 625, 695]
  .map((visitors, day) => ({ day, visitors }))

export const visitorMetrics = [
  { label: 'Новые посетители', value: '6 120', share: '73%' },
  { label: 'Вернувшиеся', value: '2 300', share: '27%' },
  { label: 'Глубина просмотра', value: '4,2 стр.' },
  { label: 'Время на сайте', value: '3 мин. 18 сек.' },
]

export const popularProducts = [
  { name: 'Беспроводные наушники', sales: 48, revenue: 383_520, icon: Headphones },
  { name: 'Умные часы', sales: 32, revenue: 415_680, icon: Watch },
  { name: 'Кроссовки для бега', sales: 28, revenue: 251_720, icon: Footprints },
  { name: 'Минималистичный рюкзак', sales: 24, revenue: 119_760, icon: Backpack },
  { name: 'Хлопковая футболка', sales: 20, revenue: 45_800, icon: Shirt },
]

export const newCustomers = [
  { name: 'Иван Петров', date: '12 июл. 2026' },
  { name: 'Мария Смирнова', date: '11 июл. 2026' },
  { name: 'Алексей Кузнецов', date: '10 июл. 2026' },
  { name: 'Елена Волкова', date: '9 июл. 2026' },
  { name: 'Дмитрий Соколов', date: '8 июл. 2026' },
]

export const recentAnalyticsOrders = [
  { id: 1024, total: 8_970, status: 'Новый', tone: 'blue', date: '12 июл. 14:32' },
  { id: 1023, total: 2_400, status: 'В обработке', tone: 'orange', date: '11 июл. 11:15' },
  { id: 1022, total: 5_650, status: 'Оплачен', tone: 'green', date: '10 июл. 19:48' },
  { id: 1021, total: 3_200, status: 'В доставке', tone: 'purple', date: '9 июл. 16:20' },
  { id: 1020, total: 12_090, status: 'Доставлен', tone: 'green', date: '8 июл. 13:05' },
]

export const salesCities = [
  { name: 'Москва', share: 38 },
  { name: 'Санкт-Петербург', share: 12 },
  { name: 'Екатеринбург', share: 8 },
  { name: 'Новосибирск', share: 6 },
  { name: 'Казань', share: 5 },
  { name: 'Другие города', share: 31 },
]
