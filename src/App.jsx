import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState([])
  const [menu, setMenu] = useState(false)

  const totalQuantity = () => {
    let qty = 0
    cart.map(p => {
      qty += p.quantity
    })
    return qty;
  }

  return (
    <>
      {!menu ? (
                <>
                  <nav>
                    <h3>Awesome Shop</h3>
                    <Link to="/" className='link'> Homepage</Link>
                    <Link to="/products" className='link'> Products</Link>
                    <div className='link cartLink'>
                      <Link to="/cart" className='link'> Cart{totalQuantity() > 0 ? ": " + totalQuantity() : ""}</Link>
                      <img src="/src/assets/cart-shopping-solid.svg" alt="cartIcon" className='icon'/>
                    </div>
                    <button className='mobile' onClick={() => setMenu(true)}> Menu </button>
                  </nav>
                  <div className='main'>
                    <Outlet context={[cart, setCart]}/>
                  </div>
                  <Footer/>
                </>
              ) : (
                <div className='mobileMenu'>
                  <button onClick={() => setMenu(false)}>Close menu</button>
                  <Link to="/" className='linkMobile' onClick={() => setMenu(false)}> Homepage</Link>
                  <Link to="/products" className='linkMobile' onClick={() => setMenu(false)}> Products</Link>
                  <Link to="/cart" className='linkMobile' onClick={() => setMenu(false)}> Cart{totalQuantity() > 0 ? ": " + totalQuantity() : ""}</Link>
                </div>
              )
        }
      
      
    </>
  )
}

export default App
