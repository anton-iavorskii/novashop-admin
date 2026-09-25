import {
  Backpack,
  Coffee,
  Dumbbell,
  Footprints,
  Glasses,
  Headphones,
  Leaf,
  Shirt,
  Sparkles,
  Watch,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type OrderStatus = 'new' | 'processing' | 'paid' | 'shipping' | 'delivered' | 'cancelled'

type OrderThumbnail = {
  icon: LucideIcon
  tone: 'slate' | 'sand' | 'blue' | 'green' | 'purple'
}

export type Order = {
  id: number
  customer: string
  email: string
  thumbnails: [OrderThumbnail, OrderThumbnail]
  additionalItems?: number
  total: number
  status: OrderStatus
  paymentMethod: 'Банковская карта' | 'СБП' | 'Наличные'
  date: string
  time: string
}

export const orders: Order[] = [
  { id: 1024, customer: 'Иван Петров', email: 'ivan@example.ru', thumbnails: [{ icon: Headphones, tone: 'slate' }, { icon: Backpack, tone: 'sand' }], additionalItems: 2, total: 8_970, status: 'new', paymentMethod: 'Банковская карта', date: '12 июл. 2026', time: '14:32' },
  { id: 1023, customer: 'Мария Смирнова', email: 'maria@example.ru', thumbnails: [{ icon: Watch, tone: 'slate' }, { icon: Shirt, tone: 'sand' }], additionalItems: 1, total: 2_400, status: 'processing', paymentMethod: 'СБП', date: '11 июл. 2026', time: '11:15' },
  { id: 1022, customer: 'Алексей Кузнецов', email: 'alex@example.ru', thumbnails: [{ icon: Footprints, tone: 'blue' }, { icon: Sparkles, tone: 'purple' }], total: 5_650, status: 'paid', paymentMethod: 'Банковская карта', date: '10 июл. 2026', time: '19:48' },
  { id: 1021, customer: 'Елена Волкова', email: 'elena@example.ru', thumbnails: [{ icon: Coffee, tone: 'sand' }, { icon: Leaf, tone: 'green' }], additionalItems: 1, total: 3_200, status: 'shipping', paymentMethod: 'Банковская карта', date: '9 июл. 2026', time: '16:20' },
  { id: 1020, customer: 'Дмитрий Соколов', email: 'dmitry@example.ru', thumbnails: [{ icon: Glasses, tone: 'slate' }, { icon: Backpack, tone: 'sand' }], additionalItems: 3, total: 12_090, status: 'delivered', paymentMethod: 'Наличные', date: '8 июл. 2026', time: '13:05' },
  { id: 1019, customer: 'Ольга Никитина', email: 'olga@example.ru', thumbnails: [{ icon: Shirt, tone: 'sand' }, { icon: Footprints, tone: 'blue' }], total: 4_990, status: 'cancelled', paymentMethod: 'Банковская карта', date: '7 июл. 2026', time: '10:11' },
  { id: 1018, customer: 'Сергей Морозов', email: 'sergey@example.ru', thumbnails: [{ icon: Headphones, tone: 'slate' }, { icon: Watch, tone: 'slate' }], additionalItems: 1, total: 7_580, status: 'paid', paymentMethod: 'СБП', date: '6 июл. 2026', time: '18:33' },
  { id: 1017, customer: 'Анна Козлова', email: 'anna@example.ru', thumbnails: [{ icon: Dumbbell, tone: 'purple' }, { icon: Leaf, tone: 'green' }], additionalItems: 2, total: 6_320, status: 'processing', paymentMethod: 'Банковская карта', date: '5 июл. 2026', time: '12:17' },
  { id: 1016, customer: 'Максим Львов', email: 'max@example.ru', thumbnails: [{ icon: Backpack, tone: 'sand' }, { icon: Shirt, tone: 'sand' }], total: 9_490, status: 'shipping', paymentMethod: 'СБП', date: '4 июл. 2026', time: '09:24' },
  { id: 1015, customer: 'Татьяна Белова', email: 'tatiana@example.ru', thumbnails: [{ icon: Coffee, tone: 'sand' }, { icon: Sparkles, tone: 'purple' }], additionalItems: 1, total: 2_890, status: 'delivered', paymentMethod: 'Банковская карта', date: '3 июл. 2026', time: '17:40' },
]
