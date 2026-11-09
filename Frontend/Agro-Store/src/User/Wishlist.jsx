import { useDispatch, useSelector } from "react-redux"
import { removefromwishlist, wishtocart } from "../Store/CartSlice"

function Wishlist(){
var wishproducts=useSelector((state)=>state.cart.wishlistproducts)
var user=localStorage.getItem("user")
var dispatch=useDispatch()

var wishproducts=wishproducts.filter((p)=>p.username==user)
var addwishtocart=()=>{
    dispatch(wishtocart(wishproducts))
}
var removefromwish=()=>{
    dispatch(removefromwishlist(wishproducts))
}
 
    return(

        <>
         <div className="col-md-6"><button className="btn btn-danger mb-3" onClick={()=>navigate("/user/home")}>🡠</button><h3 style={{display:"inline"}} className="ms-2 ">Wishlist</h3></div>
        {wishproducts.length==0 ? <h1>No Items in Wishlist</h1>:
        <div className="container">
            <div className="row">
                {
                    wishproducts.map((item,ind)=>(
                            <div className="row" key={ind}>
                                <div className="col-md-3">
                                    <div className="card">
                                <div className="card-header">
                                    <img src={item.image} alt="" className="card-img-top img-fluid" height={300} width={300} />
                                </div>
                                 </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body">
                                        <h1>{item.name}</h1>
                                        <p>{item.quantity}</p>
                                        <p>{item.description}</p>
                                        <h5>Available {item.stock} <p className="badge bg-success">Selling Price ₹{item.price}</p></h5>
                                        
                                    </div>
                                    <div className="card-footer">
                                        <div className="form-group">
                                            <button className="btn btn-primary " onClick={()=>{dispatch(wishtocart(item)), dispatch(removefromwishlist(item))}}><label htmlFor="">Add to Cart</label></button>
                                            <button className="btn btn-danger ms-5 " onClick={removefromwish}><label htmlFor="">Remove From Wishlist</label></button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        
                        
                    ))
                }
            </div>
        </div>
        }
        </>
    )
}
export default Wishlist