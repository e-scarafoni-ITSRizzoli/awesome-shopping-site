import MyCarousel from "./MyCarousel"

const Home = () => {

    const imagesUrl = [
                       "https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=1800&t=st=1715779311~exp=1715779911~hmac=c4478181bff9e3cb456b018c06358a71a6a7f1de3c69f71399dfdcd5ee590e79", 
                       "https://img.freepik.com/free-photo/toy-shopping-trolley-present-near-laptop-keyboard_23-2148015450.jpg?t=st=1715779507~exp=1715783107~hmac=adfbb4d5075b5ed5afada5058e6b185514863bc4b8d08fca4f0101e951a7cbbc&w=1800",
                       "https://img.freepik.com/free-photo/high-angle-man-ordering-online_23-2148447795.jpg?t=st=1715780730~exp=1715784330~hmac=4cfc28b8c553179daa0144a004d0b5d8b876c1f0bc6cdb3584c1f58af5ed79a6&w=1800",                     
                    ]

    return(
        <div className="home">
            <h1> Awesome Shop </h1>
            <MyCarousel images={imagesUrl}/>
            <div className="description">
                <h2> Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
                <p>  Culpa magni voluptas aspernatur accusamus quibusdam ea asperiores unde id.
                     Officiis tenetur est sapiente consequatur ducimus id atque. Voluptatum veritatis at dicta.
                     Accusantium itaque consectetur omnis dolorum similique, inventore libero officia
                     nesciunt voluptates temporibus animi enim fugit accusamus porro dignissimos possimus laborum corporis fugiat.
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus esse dolorem fugiat eaque quae nulla molestiae
                     incidunt cum perferendis ratione facilis, atque labore odit numquam doloremque quidem ab dolores fuga!</p>
            </div>
        </div>
    )
}

export default Home