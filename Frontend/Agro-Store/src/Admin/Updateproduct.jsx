import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { selectprodtoupdate, updateNow } from "../Store/AllproductSlice"

function Updateproduct(){
    var allproducts=useSelector((state)=>state.products.updatedproducts)
    console.log(allproducts);
    var {id}=useParams()
    var dispatch=useDispatch()
    var navigate=useNavigate()

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

    useEffect(()=>{
        dispatch(selectprodtoupdate(id))
    },[dispatch,id])

    var letsupdate=(e)=>{
        e.preventDefault();
        var newObj={
            id:allproducts.id,
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
        dispatch(updateNow(newObj))
        alert("Product Updated")
        navigate("/admin/manage")
    }
    useEffect(()=>{
        if(allproducts){
            setName(allproducts.name)
            setPrice(allproducts.price)
            setBrand(allproducts.brand)
            setCategory(allproducts.category)
            setDescription(allproducts.description)
            setCompositionOrSpecs(allproducts.compositionOrSpecs)
            setImage(allproducts.image)
            setManufacturer(allproducts.manufacturer)
            setOriginalPrice(allproducts.originalPrice)
            setQuantity(allproducts.quantity)
            setRating(allproducts.rating)
            setReviewCount(allproducts.reviewCount)
            setSku(allproducts.sku)
            setStock(allproducts.stock)

        }
    },[allproducts])

    return(
        <>
         <div className="col-md-6"><button className="btn btn-danger mb-3" onClick={()=>navigate("/admin/manage")}>Back</button><h3 style={{display:"inline"}} className="ms-2 ">Update Product</h3></div>
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <form action="" onSubmit={letsupdate} >
                        
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Name</label>
                            <input type="text" className="form-control" value={name} required onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Brand</label>
                            <input type="text" className="form-control" required value={brand} onChange={(e)=>setBrand(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product category</label>
                            <input type="text" className="form-control" required value={category} onChange={(e)=>setCategory(e.target.value)}/>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Description</label>
                            <input type="text" className="form-control" required value={description} onChange={(e)=>setDescription(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Image</label>
                            <input type="text" className="form-control" required value={image} onChange={(e)=>setImage(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Products Stock</label>
                            <input type="number" className="form-control" required value={stock} onChange={(e)=>setStock(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Manufacturer</label>
                            <input type="text" className="form-control" required value={manufacturer} onChange={(e)=>setManufacturer(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Reviews</label>
                            <input type="number" className="form-control" required value={reviewCount} onChange={(e)=>setReviewCount(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Rating</label>
                            <input type="number" className="form-control" required value={rating} onChange={(e)=>setRating(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Price</label>
                            <input type="number" className="form-control" required value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product OriginalPrice</label>
                            <input type="number" className="form-control" required value={originalPrice} onChange={(e)=>setOriginalPrice(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product sku</label>
                            <input type="text" className="form-control" required value={sku} onChange={(e)=>setSku(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Quantity</label>
                            <input type="text" className="form-control" required value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Product Composition or Specs</label>
                            <input type="text" className="form-control" required value={compositionOrSpecs} onChange={(e)=>setCompositionOrSpecs(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default Updateproduct