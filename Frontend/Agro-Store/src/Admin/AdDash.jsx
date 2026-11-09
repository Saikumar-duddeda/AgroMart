import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function AdDash() {
  var navigate = useNavigate();
  var username = localStorage.getItem("admin");
  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      navigate("/login");
    }
  }, []);
  function logout() {
    localStorage.removeItem("admin");
    navigate("/login");
  }
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
              <ul className="navbar-nav">
                <li style={{ color: "white" }}>
                  <b>Welcome !{username}</b>{" "}
                </li>
                <li className="nav-item">
                  <Link to={"home"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"add"} className="nav-link">
                    AddProduct
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"manage"} className="nav-link">
                    ManageProducts
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to={"update/:id"} className="nav-link">
                  </Link>
                </li> */}
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
export default AdDash;
