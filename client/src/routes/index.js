import HomePage from '../pages/Home/HomePage'
import ProductsPage from '../pages/Products/ProductsPage'
import OrdersPage from '../pages/Orders/OrdersPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'

export const routes = [
    {
        path: '/',
        page: HomePage,
        showHeader: true
    },
    {
        path: '/products',
        page: ProductsPage,
        showHeader: true
    },
    {
        path: '/orders',
        page: OrdersPage,
        showHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    },
]