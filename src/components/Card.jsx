const Card = ({title, price, category, image, rating, clickHandler}) => {
    return (
        <div className="cardProduct" onClick={clickHandler}>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p> Category: {category} </p>
            <div className="details">
                <p> {price}€ </p>
                <p> {rating} ★</p>
            </div>
        </div>
    )
}

export default Card