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

export type ProductStatus = 'active' | 'outOfStock'

export type Product = {
  sku: string
  name: string
  category: string
  price: number
  stock: number
  status: ProductStatus
  createdAt: string
  icon: LucideIcon
  thumbnailTone: 'blue' | 'slate' | 'sand' | 'green' | 'purple'
}

export const products: Product[] = [
  { sku: 'NS-001', name: 'Беспроводные наушники', category: 'Электроника', price: 7_990, stock: 45, status: 'active', createdAt: '12 июл. 2026', icon: Headphones, thumbnailTone: 'slate' },
  { sku: 'NS-002', name: 'Минималистичный рюкзак', category: 'Аксессуары', price: 4_990, stock: 12, status: 'active', createdAt: '11 июл. 2026', icon: Backpack, thumbnailTone: 'sand' },
  { sku: 'NS-003', name: 'Умные часы', category: 'Электроника', price: 12_990, stock: 8, status: 'active', createdAt: '10 июл. 2026', icon: Watch, thumbnailTone: 'slate' },
  { sku: 'NS-004', name: 'Керамическая кружка', category: 'Дом и интерьер', price: 1_490, stock: 120, status: 'active', createdAt: '9 июл. 2026', icon: Coffee, thumbnailTone: 'sand' },
  { sku: 'NS-005', name: 'Хлопковая футболка', category: 'Одежда', price: 2_290, stock: 6, status: 'active', createdAt: '8 июл. 2026', icon: Shirt, thumbnailTone: 'sand' },
  { sku: 'NS-006', name: 'Кроссовки для бега', category: 'Спорт и отдых', price: 8_990, stock: 23, status: 'active', createdAt: '7 июл. 2026', icon: Footprints, thumbnailTone: 'blue' },
  { sku: 'NS-007', name: 'Солнцезащитные очки', category: 'Аксессуары', price: 5_990, stock: 0, status: 'outOfStock', createdAt: '6 июл. 2026', icon: Glasses, thumbnailTone: 'slate' },
  { sku: 'NS-008', name: 'Декоративное растение', category: 'Дом и интерьер', price: 2_490, stock: 34, status: 'active', createdAt: '5 июл. 2026', icon: Leaf, thumbnailTone: 'green' },
  { sku: 'NS-009', name: 'Женские духи', category: 'Красота и уход', price: 6_990, stock: 15, status: 'active', createdAt: '4 июл. 2026', icon: Sparkles, thumbnailTone: 'purple' },
  { sku: 'NS-010', name: 'Коврик для йоги', category: 'Спорт и отдых', price: 3_690, stock: 27, status: 'active', createdAt: '3 июл. 2026', icon: Dumbbell, thumbnailTone: 'purple' },
]
