import { useOutletContext, useParams } from "react-router-dom"
import Card from "./Card";
import { useState, useEffect } from "react";

const Product = () => {

    const {id} = useParams()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [product, setProduct] = useState({});
    const [cart, setCart] = useOutletContext();
    const [quantity, setQuantity] = useState(1)

    const handleChange = (e) => {
       let truncatedValue = Number(e.target.value)
       if(e.target.value) {
        setQuantity(truncatedValue)
       } else {
        setQuantity(null)
       }

    }

    const addToCart = () => {
        let isAlreadyInsideCart = false
        let newCart = cart.map(prod => {
            if (prod.id == id) {
                isAlreadyInsideCart = true
                return {...prod, quantity: Number(prod.quantity + Number(quantity.toFixed(0)))}
            } else {
                return prod;
            }
        })
        if(isAlreadyInsideCart) {
            setCart(newCart)
        } else {
            setCart([...newCart, {...product, quantity: Number( quantity.toFixed(0))}])
        }
        
    }

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/"+ id)
            .then((response) => {
                if(response.status >= 400) {
                    throw new Error("server error")
                }
                return response.json()
            })
            .then((response) => setProduct(response))
            .catch((error) => setError(error))
            .finally(setLoading(false))
    }, [])

    if(error) return <p> A network error was encountered, please try again</p>
    if(loading) return <p> Loading... </p>

    return (
        <div className="productPage">
            <div className="productInfo">
                <img src={product.image} alt={product.title}/>
                <div className="productText">
                    <h1>{product.title}</h1>
                    <div className="details">
                        <p><b>Category:</b> {product.category}</p>
                        <p> {product.rating?.rate} ★</p>
                    </div>
                    <h3> Description </h3>
                    <p> {product.description}</p>
                </div>
                <div className="productAddCart">
                    <h3>Price: {product.price}€</h3>
                    <label for="qtySetter">Quantity:</label>
                    <input type="number" name="qtySetter" id="qtySetter" min="1" step="1" value={quantity} onChange={() => handleChange(event)}></input>
                    <button onClick={addToCart}> Add to Cart </button>
                </div>
            </div>
            
        </div>
    )
}

export default Product