import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Products from './components/Products.jsx'
import Product from './components/Product.jsx'
import Cart from './components/Cart.jsx'
import Home from './components/Home.jsx'
import Credits from './components/Credits.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {path:"", element: <Home/>},
      {path:"products", element: <Products/>},
      {path:"products/:id", element: <Product/>},
      {path:"cart", element: <Cart/>},
      {path:"credits", element: <Credits/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

