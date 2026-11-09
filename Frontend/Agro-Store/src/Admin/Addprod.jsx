import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addtoallproducts, addtooriginalproducts } from "../Store/AllproductSlice"
import { useNavigate } from "react-router-dom"

function Addprod(){
    var allproducts=useSelector((state)=>state.products.allproducts)
    var originalproducts=useSelector((state)=>state.products.originalproducts)
    var dispatch=useDispatch()
    var navigate=useNavigate()
var [id,setId]=useState("")
var [name,setName]=useState("")
var [price,setPrice]=useState("")
var [brand,setBrand]=useState("")
var [category,setCategory]=useState("")
var [description,setDescription]=useState("")
var [compositionOrSpecs,setCompositionOrSpecs]=useState("")
var [image,setImage]=useState("")
var [manufacturer,setManufacturer]=useState("")
var [originalPrice,setOriginalPrice]=useState("")
var [quantity,setQuantity]=useState("")
var [rating,setRating]=useState("")
var [reviewCount,setReviewCount]=useState("")
var [sku,setSku]=useState("")
var [stock,setStock]=useState("")

function addon(e){
    e.preventDefault();
    var newObj={
        id:id,
        name:name,
        price:price,
        brand:brand,
        category:category,
        description:description,
        compositionOrSpecs:compositionOrSpecs,
        image:image,
        manufacturer:manufacturer,
        originalPrice:originalPrice,
        quantity:quantity,
        rating:rating,
        reviewCount:reviewCount,
        sku:sku,
        stock:stock
    }
    dispatch(addtoallproducts(newObj))
    dispatch(addtooriginalproducts(newObj))
    alert("Product added Sucessfully")
}

    return(

        <>
        
         <div className="col-md-6"><button className="btn btn-danger mb-3" onClick={()=>navigate("/admin/home")}>Back</button><h3 style={{display:"inline"}} className="ms-2 ">Add Products</h3></div>
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <form action="" onSubmit={addon}>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Id</label>
                            <input type="number" className="form-control" required onChange={(e)=>setId(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Name</label>
                            <input type="text" className="form-control" required onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Brand</label>
                            <input type="text" className="form-control" required onChange={(e)=>setBrand(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product category</label>
                            <input type="text" className="form-control" required onChange={(e)=>setCategory(e.target.value)}/>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Description</label>
                            <input type="text" className="form-control" required onChange={(e)=>setDescription(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Image</label>
                            <input type="text" className="form-control" required onChange={(e)=>setImage(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Products Stock</label>
                            <input type="number" className="form-control" required onChange={(e)=>setStock(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Manufacturer</label>
                            <input type="text" className="form-control" required onChange={(e)=>setManufacturer(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Reviews</label>
                            <input type="number" className="form-control" required onChange={(e)=>setReviewCount(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Rating</label>
                            <input type="number" className="form-control" required onChange={(e)=>setRating(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Price</label>
                            <input type="number" className="form-control" required onChange={(e)=>setPrice(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product OriginalPrice</label>
                            <input type="number" className="form-control" required onChange={(e)=>setOriginalPrice(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product sku</label>
                            <input type="text" className="form-control" required onChange={(e)=>setSku(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Quantity</label>
                            <input type="text" className="form-control" required onChange={(e)=>setQuantity(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Composition or Specs</label>
                            <input type="text" className="form-control" required onChange={(e)=>setCompositionOrSpecs(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Add the Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        
        </>
    )
}
export default Addprod