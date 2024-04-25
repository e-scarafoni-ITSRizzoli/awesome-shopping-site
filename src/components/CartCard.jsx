const CartCard = ({image, title, quantity, price, increaseHandler, decreaseHandler}) => {

    return(
        <div className="cartCard">
            <img src={image} alt={title}/>
            <div className="itemInfo">
                <h3>{title}</h3>
                <div className="details"> 
                    <p>Qty: {quantity}</p>
                    <p><b>{(quantity * price).toFixed(2)}€</b></p>
                </div>
                <div className="buttons">
                    <button onClick={increaseHandler} className="increase"> +1 </button>
                    <button onClick={decreaseHandler} className="decrease"> -1 </button>
                    <button className="delete"> 
                        <img src="/src/assets/trash-can-solid.svg" alt="delete"></img>
                        Remove
                  </button>
                </div>
            </div>
        </div>
    )
}

export default CartCard