function UsHome(){
const categories = [
  {
    id: 1,
    name: "Seeds",
    image: "https://img.magnific.com/free-photo/sackcloth-organic-raw-beans-placed-marble-surface_114579-88691.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    id: 2,
    name: "Fertilizers",
    image: "https://pjduonqpaztllcnrmepn.supabase.co/storage/v1/object/public/images/base/FERTILIZERS-BASE.jpg"
  },
  {
    id: 3,
    name: "Pesticides",
    image: "https://www.bharatcertis.com/img/product-1.jpg"
  },
  {
    id: 4,
    name: "Fungicides",
    image: "https://www.agriplexindia.com/cdn/shop/products/Anvil.png?v=1678174662"
  },
  {
    id: 5,
    name: "Organic Products",
    image: "https://img500.exportersindia.com/product_images/bc-500/2024/8/12587808/organic-vermicompost-1722599682-7548643.jpeg"
  },
  {
    id: 6,
    name: "Farming Tools",
    image: "https://max.center/content/images/1/640x640l80mc0/30051800555913.jpg"
  },
  {
    id: 7,
    name: "Irrigation Equipment",
    image: "https://www.pplagro.com/uploads/category/3813836681779562475_1778999750_hdpegatewaall.webp"
  },
  {
    id: 8,
    name: "Sprayers",
    image: "https://www.dadasprayers.com.pk/cdn/shop/files/65.png?v=1754472811&width=1066"
  },
  {
    id: 9,
    name: "Plant Growth Promoters",
    image: "https://katyayanikrishidirect.com/cdn/shop/files/image_12_1.webp?v=1771051867"
  },
  {
    id: 10,
    name: "Biofertilizers",
    image: "https://utkarshagro.com/cdn/shop/files/Microbes-DG_1litre_4.png?v=1765448154&width=1946"
  },
  {
    id: 11,
    name: "Harvesting Tools",
    image: "https://media.takealot.com/covers_images/dd5bc6f7b901469e8ab7df8e96a9bbd6/s-zoom.file"
  },
  {
    id: 12,
    name: "Safety Equipment",
    image: "https://www.epi-net.fr/17425-large_default/kit-de-protection-complet-agri-et-espaces-verts.jpg"
  }
];
var btn={
    border:"none",
    outline:"none",
    backgroundColor:"transparent"
}
    return(
    
    <>
    <h1>User Home Page</h1>
    <div className="container">
        <div className="row">
            {
                categories.map((c,ind)=>(
                    <div className="col-md-2" key={ind}>
                        <button style={btn} >
                            <img src={c.image} alt="" className="card-img-top " height={200} width={200} />
                            <h2>{c.name}</h2>
                        </button>
                    </div>
                ))
            }
            
        </div>
    </div>
    
    </>
    )
}
export default UsHome