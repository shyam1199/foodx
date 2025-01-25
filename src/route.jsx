import { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import App from './App.jsx'
import { Home, FoodDelivery, RestaurantMenu, Cart, Login, OrderHistory } from "./components"
import ProtectedRoute from './utils/ProtectedRoute.jsx';

const ContactUs = lazy(() => import('./components/ContactUs.jsx'))

const AppRoutes = () => (
    <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact-us" element={<Suspense fallback={<div>Loading...</div>}><ContactUs /></Suspense>} />
        <Route path="/food-delivery" element={<ProtectedRoute><FoodDelivery /></ProtectedRoute>} />
        <Route path="/restaurant-menu/:restaurantId" element={<ProtectedRoute><RestaurantMenu /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="/order-history" element={<ProtectedRoute><OrderHistory /></ProtectedRoute>}></Route>
    </Route >
);

export default AppRoutes