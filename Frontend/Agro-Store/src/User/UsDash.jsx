import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import UsHome from "./UsHome";
import { useDispatch, useSelector } from "react-redux";
import { getuser } from "../Store/AllproductSlice";

function UsDash() {
  var navigate = useNavigate();
  var dispatch=useDispatch()
  var username = localStorage.getItem("user");
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  });
  function logout() {
    localStorage.removeItem("user");
    navigate("/login");
  }
  dispatch(getuser(
    {
      username:username

    }))
 
  
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
              <ul className="navbar-nav ">
                <li style={{ color: "white" }}>
                  <h1>Welcome !{username} </h1>
                </li>
                <li className="nav-item">
                  <Link to={"home"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"about"} className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"view"} className="nav-link">
                    ViewProducts
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to={"info/:id"} className="nav-link">
                    ProductInfo
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link to={"cart"} className="nav-link">
                    ViewCart
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"wishlist"} className="nav-link">
                    Wishlist
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"orders"} className="nav-link">
                    MyOrders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={logout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        
            <Outlet></Outlet>
          
        </div>
      </div>
    </>
  );
}
export default UsDash;
