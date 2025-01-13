import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ContactUs, Home, FoodDelivery, RestaurantMenu } from "./components"
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/food-delivery" element={<FoodDelivery />} />
          <Route path="/restaurant-menu/:id" element={<RestaurantMenu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
