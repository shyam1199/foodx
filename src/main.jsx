import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes } from "react-router-dom"
import './index.css'
import { Provider } from 'react-redux'
import store from './utils/store.js'
import AppRoutes from './route.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {AppRoutes()}
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
