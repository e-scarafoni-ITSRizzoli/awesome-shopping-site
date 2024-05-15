import { useOutletContext } from "react-router-dom"
import CartCard from "./CartCard";

const Cart = () => {

    const [cart, setCart] = useOutletContext();

    const handleIncrease = (id) => {
        let newCart = cart.map(prod => {
            if (prod.id == id) {
                return {...prod, quantity: prod.quantity + 1}
            } else {
                return prod;
            }
        })
        setCart(newCart)
    }

    const handleDecrease = (id) => {
        let newCart = cart.map(prod => {
            if (prod.id == id) {
                return {...prod, quantity: prod.quantity - 1}
            } else {
                return prod;
            }
        })

        newCart = newCart.filter(p => p.quantity > 0)

        setCart(newCart)
    }

    const handleDelete = (id) => {
        let newCart = cart.filter(p => p.id !== id)
        setCart(newCart)
    }

    const calcTotal = () => {
        let subtotal = 0;
        cart.map(prod => {
            subtotal += prod.quantity * prod.price
        })
        return subtotal.toFixed(2)
    }

    if(cart.length === 0) return <h2 className="emptyCart"> Your cart is empty! </h2>

    return(
        <>
        <h1>Cart</h1>
        <div className="cart">
            <div className="cartCards">
                {cart.map(element => {
                    return (
                        <div key={element.id}>
                            <CartCard image={element.image} title={element.title} quantity={element.quantity} price={element.price} increaseHandler={() => handleIncrease(element.id)} decreaseHandler={() => handleDecrease(element.id)} deleteHandler={() => handleDelete(element.id)}/>
                        </div>
                
                    )
                })}
            </div>
            
            <div className="total">
            <h3> Recap </h3>
                <h4>Subtotal: {calcTotal()}€</h4>
                <h4>Sale taxes: {(calcTotal() * 0.22).toFixed(2)}€</h4>
                <h4>Shipping: {calcTotal() > 50 ? "FREE" : "4.99€"}</h4>
                
                <button> Go to Checkout</button>
            </div>
        </div>
        </>
    )
}

export default Cart