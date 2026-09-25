export type OrderStatus = 'Доставлен' | 'В обработке' | 'Отправлен' | 'Отменён'

type Order = {
  id: number
  customer: string
  items: string
  total: number
  status: OrderStatus
  date: string
}

export const orders: Order[] = [
  { id: 1024, customer: 'Сара Ким', items: '3 товара', total: 89.70, status: 'Доставлен', date: '31 июл. 2026' },
  { id: 1023, customer: 'Михаил Торрес', items: '1 товар', total: 24.00, status: 'В обработке', date: '31 июл. 2026' },
  { id: 1022, customer: 'Елена Вилсон', items: '2 товара', total: 56.50, status: 'Отправлен', date: '30 июл. 2026' },
  { id: 1021, customer: 'Даниил Парк', items: '1 товар', total: 32.00, status: 'Доставлен', date: '30 июл. 2026' },
  { id: 1020, customer: 'Ольга Мартинес', items: '4 товара', total: 120.90, status: 'Отменён', date: '29 июл. 2026' },
]
