type Activity = {
  name: string
  initials: string
  action: 'Новый клиент' | 'Оформил заказ' | 'Зарегистрировался'
  time: string
  avatarTone: 'peach' | 'lavender' | 'mint'
}

export const activities: Activity[] = [
  { name: 'Алексей Чен', initials: 'AC', action: 'Новый клиент', time: '2 минуты назад', avatarTone: 'peach' },
  { name: 'Сара Ким', initials: 'SK', action: 'Оформил заказ', time: '12 минут назад', avatarTone: 'lavender' },
  { name: 'Михаил Торрес', initials: 'MT', action: 'Зарегистрировался', time: '28 минут назад', avatarTone: 'mint' },
  { name: 'Елена Вилсон', initials: 'EW', action: 'Оформил заказ', time: '1 час назад', avatarTone: 'peach' },
  { name: 'Даниил Парк', initials: 'DP', action: 'Новый клиент', time: '2 часа назад', avatarTone: 'mint' },
]
