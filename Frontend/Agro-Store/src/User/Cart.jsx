import { useDispatch, useSelector } from "react-redux"
import { addtowishlist, quantitydecr, quantityincr, removefromcart } from "../Store/CartSlice"
import { useState } from "react"
import { addtoorders } from "../Store/OrderSlice"
import { useNavigate } from "react-router-dom"

function Cart(){
var cartproducts=useSelector((state)=>state.cart.cartproducts)
var user=localStorage.getItem("user")
var dispatch=useDispatch()
var navigate=useNavigate()
var cartproducts=cartproducts.filter((p)=>p.username==user)
var [ordersdummy,SetDummy]=useState("")
var [getaddress,setGetaddress]=useState(false)
    var ordersdata=(item)=>{
        SetDummy(item)
    }
    
function enteraddress(){
    setGetaddress(true) 
}

var[cname,setName]=useState("")
    var[phone,setPhone]=useState("")
    var[address,setAddress]=useState("")
    var[landmark,setLandmark]=useState("")
    var[pincode,setPincode]=useState("")
    var str="ABCDEFGHIKKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    var arr=str.split("")
    var orderid=""
    for(var i=0;i<=15;i++){
        var ind=Math.round(Math.random()*(arr.length-1))
        orderid+=arr[ind]
    }
    
function handleaddress(item){
    
    var updateddata={
        ...ordersdummy,
        phonenumber:phone,
        contactperson:cname,
        address:address,
        landmark:landmark,
        pincode:pincode,
        orderid:orderid
    }
   
    
    dispatch(addtoorders(updateddata))
    setGetaddress(false)
   alert("Order Placed Successfully")
   navigate("/user/orders")
   dispatch(removefromcart(item))
}




    return(

        <>
         <div className="col-md-6"><button className="btn btn-danger mb-3" onClick={()=>navigate("/user/view")}>🡠</button><h3 style={{display:"inline"}} className="ms-2 "> Cart</h3></div>
        <div className="d-flex justify-content-center">
        <div className="col-md-10">
            { getaddress ? <div className="container-fluid ">
            <div className="row">
                <div className="col-md-5">
                    <form action="" onSubmit={(e)=>{e.preventDefault(),handleaddress()}} >
                    <div className="form-group" >
                        <label htmlFor="" className="form-label">Contact Person Name</label>
                        <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="form-label">Address</label>
                        <input type="text" className="form-control" onChange={(e)=>setAddress(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="form-label">Landmark</label>
                        <input type="text" className="form-control" onChange={(e)=>setLandmark(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="form-label">Pincode</label>
                        <input type="number" className="form-control" onChange={(e)=>setPincode(e.target.value)}/>
                    </div>
                   <div className="form-group">
                    <button className="btn btn-secondary mt-5" type="submit">Add Address</button>
                   </div>
                    </form>
                </div>
            </div>
        </div>:
        cartproducts.length==0 ? <h1>Cart is Empty</h1>:
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                   
                </div>
                <div className="col-md-8">
                    <button className=" btn btn-info  " onClick={enteraddress}>Add address</button>
                </div>
            </div>
            <div className="row">
            
                {   
                    cartproducts.map((item,ind)=>(
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
                                        
                                        <label htmlFor=""><button className="btn btn-secondary"onClick={()=>dispatch(quantitydecr(item))}>-</button> {item.Quantity} <button className="btn btn-secondary" onClick={()=>dispatch(quantityincr(item))}>+</button></label>
                                    </div>
                                    <div className="card-footer mt-5">
                                        <label htmlFor=""><button className="btn btn-primary"  onClick={()=>ordersdata(item)} data-bs-target="#ordermodal" data-bs-toggle="modal" >Buy Now</button></label>
                                        <label htmlFor=""><button className="btn btn-secondary ms-5"onClick={()=>{dispatch(addtowishlist(item)), dispatch(removefromcart(item)) }}>Move to Wishlist</button></label>
                                        <button className="btn btn-danger ms-5" onClick={()=>dispatch(removefromcart(item))}>Remove from Cart</button>
                                    </div>
                                          
                                </div>
                                 <div className="modal fade" id="ordermodal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>You are Ordering {item.name}</h4>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <p>Price of ₹{item.price}</p>
                            <p>Quantity of {item.Quantity}</p>
                            <p>Total price to be paid {item.Quantity*item.price}</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-success"  data-bs-dismiss="modal" onClick={()=>{handleaddress(item)}}>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
                            </div>  
                            
                            
                    ))
                }
            </div>
        </div>

            
        
        
    }
   
        </div>
         </div>
   

        
        </>
    )
}
export default Cart