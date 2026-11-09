import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function Orders(){
    var allorders=useSelector((state)=>state.orders.allorders)
var user=localStorage.getItem("user")
var allorders=allorders.filter((ord)=>ord.username==user)
var navigate=useNavigate()

    return(

        <>
         <div className="col-md-6"><button className="btn btn-danger mb-3" onClick={()=>navigate("/user/cart")}>🡠</button><h3 style={{display:"inline"}} className="ms-2 ">Orders</h3></div>
        {allorders.length==0 ? <h1>No Orders Yet</h1>:
        <div className="container">
            
            <div className="row">
                {
                    allorders.map((all,ind)=>(
                            <div className="row" key={ind}>
                                <div className="col-md-5" >
                                <div className="card">
                                    <div className="card-title">
                                        <p><b>Delivering to :</b> {all.contactperson}, {all.landmark}, {all.address}, {all.pincode}, {all.phonenumber}</p>
                                    </div>
                                    <div className="card-header">
                                        <img src={all.image} alt="" className="card-img-top" />
                                        <p>Brand: {all.brand}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <p>orderId: #{all.orderid}</p>
                                <h4>Product Name {all.name}</h4>
                                <h4>Price :{all.price}</h4>
                                <h5>Total Cost :{all.price*all.Quantity}</h5>
                                <h5>Status </h5>
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
export default Orders