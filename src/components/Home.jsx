import MyCarousel from "./MyCarousel"

const Home = () => {

    const imagesUrl = ["https://img.freepik.com/foto-gratuito/vendite-dello-shopping-del-cyber-lunedi_23-2148688502.jpg?t=st=1714580613~exp=1714584213~hmac=441fce553b8b8b9a74680fe7b1228c44cd8b142396e18458bba47034392d53a8&w=1480",
                       "https://img.freepik.com/foto-gratuito/carrello-e-regalo-di-acquisto-vicino-al-computer-portatile-moderno_23-2148015448.jpg?t=st=1714580649~exp=1714584249~hmac=78db6f2cfa67a5e6054a0635f64a00fee8921153a23ab75beafc12067b98caf8&w=1480",
                       "https://img.freepik.com/vettori-gratuito/banner-di-consegna-online-con-laptop-realistico-pacchi-nuvole-e-icone-social-in-stile-realistico_548887-53.jpg?t=st=1714580666~exp=1714584266~hmac=ba80b61f01931dcfeaadc2ba8bdf5db3c565c12e5e3e7e5b8652d69fbaa9de86&w=2000" 
                    ]

    return(
        <div className="home">
            <h1> Awesome Website </h1>
            <MyCarousel images={imagesUrl}/>
            <h2> Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
            <p>  Culpa magni voluptas aspernatur accusamus quibusdam ea asperiores unde id. 
                 Officiis tenetur est sapiente consequatur ducimus id atque. Voluptatum veritatis at dicta. 
                 Accusantium itaque consectetur omnis dolorum similique, inventore libero officia 
                 nesciunt voluptates temporibus animi enim fugit accusamus porro dignissimos possimus laborum corporis fugiat.
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus esse dolorem fugiat eaque quae nulla molestiae 
                 incidunt cum perferendis ratione facilis, atque labore odit numquam doloremque quidem ab dolores fuga!</p>
        </div>
    )
}

export default Home