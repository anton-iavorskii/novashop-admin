import { Backpack, Coffee, Headphones, Shirt, Watch } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Product = {
  name: string
  price: number
  stock: number
  stockTone: 'green' | 'orange' | 'red'
  status: 'Активен'
  icon: LucideIcon
  thumbnailTone: 'slate' | 'sand' | 'stone' | 'mist' | 'linen'
}

export const products: Product[] = [
  { name: 'Беспроводные наушники', price: 7_990, stock: 45, stockTone: 'green', status: 'Активен', icon: Headphones, thumbnailTone: 'slate' },
  { name: 'Минималистичный рюкзак', price: 4_990, stock: 12, stockTone: 'orange', status: 'Активен', icon: Backpack, thumbnailTone: 'sand' },
  { name: 'Умные часы', price: 12_990, stock: 8, stockTone: 'red', status: 'Активен', icon: Watch, thumbnailTone: 'stone' },
  { name: 'Керамическая кружка', price: 1_490, stock: 120, stockTone: 'green', status: 'Активен', icon: Coffee, thumbnailTone: 'mist' },
  { name: 'Хлопковая футболка', price: 2_290, stock: 6, stockTone: 'red', status: 'Активен', icon: Shirt, thumbnailTone: 'linen' },
]
