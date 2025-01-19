import { Route } from 'react-router-dom';
import App from './App.jsx'
import { ContactUs, Home, FoodDelivery, RestaurantMenu, Cart, Login } from "./components"
import ProtectedRoute from './utils/ProtectedRoute.jsx';

const AppRoutes = () => (
    <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/food-delivery" element={<ProtectedRoute><FoodDelivery /></ProtectedRoute>} />
        <Route path="/restaurant-menu/:restaurantId" element={<ProtectedRoute><RestaurantMenu /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
    </Route >
);

export default AppRoutes