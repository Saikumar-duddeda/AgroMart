import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

function AdHome(){

var users=useSelector((state)=>state.products.users)
var allorders=useSelector((state)=>state.orders.allorders)


    return(

        <>
        <h1>Homepage</h1>
        <h1>Total No of Users :{users.length}</h1>
       
           
            {users.map((user, ind) => {

            const userOrders = allorders.filter(
                (item) => item.username == user.username
            );

            return (
                <div className="d-flex justify-content-center">
                    <div className="card p-3 m-3 col-md-5 text-center " key={ind}>

                    <h3>User --  {user.username}</h3>

                    <h5>
                        Total Orders: {userOrders.length}
                    </h5>

                    {userOrders.length === 0 ? (
                        <p className="text-danger">
                            Not Ordered Yet
                        </p>
                    ) : (
                        userOrders.map((order, index) => (
                            <div key={index}>
                                <img src={order.image} alt="" className=" img-fluid " height={150} width={200}/>
                                <p>Product: {order.name}</p>
                                <p>Quantity: {order.Quantity}</p>
                                <p>Price: ₹{order.price}</p>
                                <p>TotalCost: ₹{order.price*order.Quantity}</p>
                                <div className="form-group">    
                                    <button className="btn btn-primary" >Dispatch</button>
                                    <button className="btn btn-warning">Shipped</button>
                                    <button className="btn btn-success">Delivered</button>
                                </div>
                            </div>
                        ))
                    )}

                </div>
                </div>
            );
        })}
      

        
        </>
    )
}
export default AdHome