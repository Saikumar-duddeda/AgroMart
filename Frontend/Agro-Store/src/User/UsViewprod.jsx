import { useDispatch, useSelector } from "react-redux"
import {letsfilter, productinfo, products } from "../Store/AllproductSlice"
import { useNavigate } from "react-router-dom"

function UsViewprod(){

var viewproducts=useSelector((state)=>state.products.allproducts)
var dispatch=useDispatch()
var navigate=useNavigate()



    return(

        <>
         <div className="col-md-6"><button className="btn btn-danger mb-3" onClick={()=>navigate("/user/about")}>🡠</button><h3 style={{display:"inline"}} className="ms-2 ">View Products</h3></div>
        <div className="container">
            <div className="row">
                <div className="col-md-1">
                    <nav>
                        <div className="navbar navbar-dark">
                            <ul className="navbar nav">
                                <button className="btn btn-info" onClick={()=>dispatch(products())} ><li className="nav-item">Allproducts</li></button>
                                <button className="btn btn-info" onClick={()=>dispatch(letsfilter("Seeds"))}><li className="nav-item">Seeds</li></button>
                                <button className="btn btn-info" onClick={()=>dispatch(letsfilter("Fertilizers"))}><li className="nav-item">Fertilizers</li></button>
                                <button className="btn btn-info" onClick={()=>dispatch(letsfilter("Pesticides"))}><li className="nav-item">Pesticides</li></button>
                                <button className="btn btn-info" onClick={()=>dispatch(letsfilter("Fungicides"))}><li className="nav-item">Fungicides</li></button>
                                <button className="btn btn-info" onClick={()=>dispatch(letsfilter("Organic Products"))}><li className="nav-item">Organic Products</li></button>
                                <button className="btn btn-info" onClick={()=>dispatch(letsfilter("Farming Tools"))}><li className="nav-item">Farming Tools</li></button>
                                <button className="btn btn-info" onClick={()=>dispatch(letsfilter("Irrigation Equipment"))}><li className="nav-item">Irrigation Equipment</li></button>
                                <button className="btn btn-info" onClick={()=>dispatch(letsfilter("Sprayers"))}><li className="nav-item">Sprayers</li></button>
                                <button className="btn btn-info" onClick={()=>dispatch(letsfilter("Plant Growth Promoters"))}><li className="nav-item">Plant Growth Promoters</li></button>
                                <button className="btn btn-info" onClick={()=>dispatch(letsfilter("Biofertilizers"))}><li className="nav-item">Biofertilizers</li></button>
                                <button className="btn btn-info" onClick={()=>dispatch(letsfilter("Harvesting Tools"))}><li className="nav-item">Harvesting Tools</li></button>
                                <button className="btn btn-info" onClick={()=>dispatch(letsfilter("Safety Equipment"))}><li className="nav-item">Safety Equipment</li></button>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="col-md-11">
                     <div className="container">
            <div className="row">
                {
                    viewproducts.map((v,ind)=>(
                        <div className="col-md-3 d-flex g-4" key={ind} >
                   
                        
                         <button className="btn" onClick={()=>{
                            dispatch(productinfo(v.id))
                            navigate("/user/info/"+v.id)
                         }} >
                            <div className="">
                            <img src={v.image} alt="" className="card-img-top" height={250} width={300} />
                                <p>{v.name}</p>
                                <h1 className="badge bg-success">₹{v.price}</h1>
                                <h6>rating: {v.rating} &emsp; Reviews: {v.reviewCount}</h6>
                         </div>
                         </button>
                                
                            </div>
                       
                        
                   
                
                    ))
                }
            </div>
        </div>
                </div>
            </div>
        </div>
       
        </>
    )
}
export default UsViewprod