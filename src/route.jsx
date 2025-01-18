import { Route } from 'react-router-dom';
import App from './App.jsx'
import { ContactUs, Home, FoodDelivery, RestaurantMenu, Cart, Login } from "./components"

const AppRoutes = () => (
    <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/food-delivery" element={<FoodDelivery />} />
        <Route path="/restaurant-menu/:restaurantId" element={<RestaurantMenu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
    </Route>
);

export default AppRoutes