import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addtocart, addtowishlist } from "../Store/CartSlice";

function Productinfo() {
  var { id } = useParams();
  var product = useSelector((state) => state.products.selectedproduct);
    var user=localStorage.getItem("user")
    var dispatch=useDispatch()
    var navigate=useNavigate()
  var handlecart=()=>{
    var newcart={
        ...product,
        Quantity:1,
        username:user
    }
    dispatch(addtocart(newcart))
    navigate("/user/cart")
  }
  var handlewishlist=()=>{
    var newcart={
        ...product,
        Quantity:1,
        username:user
    }
    dispatch(addtowishlist(newcart))
  }
  return (
    <> <div className="col-md-6"><button className="btn btn-danger mb-3" onClick={()=>navigate("/user/view")}>🡠</button><h3 style={{display:"inline"}} className="ms-2 ">Product Info</h3></div>
    {product.length==0 ? "": 
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <img
                src={product.image}
                alt=""
                className="card-img-top"
                height={200}
                width={250}
              />
              <h3>{product.sku}</h3>
            </div>
            <div className="card-body">
              <h4 className="badge bg-secondary">
                MRP {product.originalPrice}{" "}
              </h4>
              &emsp;
              <h2 className="badge bg-success">
                Selling Price {product.price}
              </h2>
              <h3>{product.quantity}</h3>
              <h4>Availabe Stock {product.stock}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1>{product.name}</h1>
            <p>
              <b>Composition </b>
              {product.compositionOrSpecs}
            </p>
            <p>
              <b>Description </b>
              {product.description}
            </p>
            <h5>Manufactured by {product.manufacturer}</h5>
          </div>
          <div className="card-footer">
            <div className="form-group">
              <button className="btn btn-primary" onClick={handlecart}>Add to Cart</button>
              <button className="btn btn-warning" onClick={handlewishlist}>Wishlist</button>
            </div>
          </div>
        </div>
      </div>
}
    </>
  );
}
export default Productinfo;
