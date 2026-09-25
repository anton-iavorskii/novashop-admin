import { Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout/AppLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import Orders from './pages/Orders/Orders'
import PagePlaceholder from './pages/PagePlaceholder/PagePlaceholder'
import Products from './pages/Products/Products'

const placeholderRoutes = [
  { path: 'customers', title: 'Клиенты', description: 'Управление клиентами магазина' },
  { path: 'analytics', title: 'Аналитика', description: 'Расширенная аналитика магазина' },
  { path: 'marketing', title: 'Маркетинг', description: 'Маркетинговые инструменты и кампании' },
  { path: 'discounts', title: 'Скидки', description: 'Управление скидками и промокодами' },
  { path: 'content', title: 'Контент', description: 'Управление контентом магазина' },
  { path: 'settings', title: 'Настройки', description: 'Настройки магазина и приложения' },
]

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        {placeholderRoutes.map(({ path, title, description }) => (
          <Route
            key={path}
            path={path}
            element={<PagePlaceholder title={title} description={description} />}
          />
        ))}
      </Route>
    </Routes>
  )
}

export default App
