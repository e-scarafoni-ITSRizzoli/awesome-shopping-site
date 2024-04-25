import { useEffect, useState } from "react"
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => {
                if(response.status >= 400) {
                    throw new Error("server error")
                }
                return response.json()
            })
            .then((response) => setProducts(response))
            .catch((error) => setError(error))
            .finally(setLoading(false))
    }, [])

    const clickHandler = (id) => {
        navigate("/products/" + id)
    }

    if(error) return <p> A network error was encountered, please try again</p>
    if(loading) return <p> Loading... </p>

    return(
        <>
            <h1> Products </h1>
            <ul>
                {products.map((p) => {
                    return(
                        <div className="cardProductDiv" key={p.id}>
                        <Card title={p.title.length > 50 ? (p.title.substring(0,50) + "...") : p.title} image={p.image} price={p.price} category={p.category} rating={p.rating.rate} clickHandler={() => clickHandler(p.id)}/>
                        </div>
                        
                    )
                    })}
            </ul>
            
        </>
    )
}

export default Products