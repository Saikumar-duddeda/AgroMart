import { useDispatch, useSelector } from "react-redux";
import { removefromallproducts, removefromoriginalproducts } from "../Store/AllproductSlice";
import { useNavigate } from "react-router-dom";

function AdManageprod(){

var allproducts=useSelector((state)=>state.products.allproducts)
var dispatch=useDispatch()
var navigate=useNavigate()
    var removeprod=(id)=>{
        dispatch(removefromallproducts(id))
        dispatch(removefromoriginalproducts(id))
    }
    
    return(

        <>
    <div className="col-md-6"><button className="btn btn-danger mb-3" onClick={()=>navigate("/admin/add")}>Back</button><h1 style={{display:"inline"}} className="ms-2 ">Manage Page</h1></div>
        
        <div className="container-fluid">
            <div className="row">
               {
                allproducts.map((prod,ind)=>(
                     <div className="col-md-2 g-4" key={ind}>
                    <div className="card ">
                        <div className="card-header">
                            <img src={prod.image} alt="" className="card-img-top" height={150} width={200} />
                            <h6>Category:{prod.category}</h6>
                            
                        </div>
                        <div className="card-body">
                            <h5>{prod.name}</h5>
                            <h6>Original Price: {prod.originalPrice}</h6>
                            <h6>Selling price:{prod.price}</h6>
                        </div>
                        <div className="card-footer">
                            <div className="form-group">
                                <button className="btn btn-info" onClick={()=>navigate("/admin/update/"+prod.id)}>Update</button>
                                <button className="btn btn-danger" onClick={()=>removeprod(prod.id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
                ))
               }
            </div>
        </div>
        </>
    )
}
export default AdManageprod