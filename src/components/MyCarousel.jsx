import { useState } from "react"

const MyCarousel = ({images}) => {

    const [index, setIndex] = useState(0)

    const handleNextImage = () => {
        if(index === images.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const handlePreviousImage = () => {
        if(index !== 0) {
            setIndex(index - 1)
        }
    }

    return (
        <div className="customCarousel">
            <button onClick={handlePreviousImage} className="carouselControl"> ← </button>
            <img src={images[index]} alt="carousel image"></img>
            <button onClick={handleNextImage} className="carouselControl"> → </button>
            <div>
                <button onClick={handlePreviousImage} className="carouselControl mobile"> ← </button>
                <button onClick={handleNextImage} className="carouselControl mobile"> → </button>
            </div>
        </div>
    )
}

export default MyCarousel