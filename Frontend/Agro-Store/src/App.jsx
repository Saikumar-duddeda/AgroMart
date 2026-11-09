import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import AdDash from "./Admin/AdDash"
import AdHome from "./Admin/AdHome"
import AdManageprod from "./Admin/AdManageprod"
import Addprod from "./Admin/Addprod"
import Cart from "./User/Cart"
import Productinfo from "./User/Productinfo"
import UsViewprod from "./User/UsViewprod"
import UsHome from "./User/UsHome"
import UsDash from "./User/UsDash"
import Wishlist from "./User/Wishlist"
import About from "./User/About"
import "./App.css"
import Orders from "./User/Orders"
import Updateproduct from "./Admin/Updateproduct"

function App(){
    return(

        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/admin" element={<AdDash></AdDash>}>
        <Route index element={<AdHome/>}></Route>
        <Route path="home"  element={<AdHome></AdHome>}></Route>
        <Route path="manage"  element={<AdManageprod></AdManageprod>}></Route>
        <Route path="add"  element={<Addprod></Addprod>}></Route>
        <Route path="update/:id"  element={<Updateproduct></Updateproduct>}></Route>
        </Route>
        <Route path="/user" element={<UsDash></UsDash>}>
        <Route index element={<UsHome/>}></Route>
        <Route path="home" element={<UsHome></UsHome>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="view"  element={<UsViewprod></UsViewprod>}></Route>
        <Route path="info/:id"  element={<Productinfo></Productinfo>}></Route>
        <Route path="cart"  element={<Cart></Cart>}></Route>
        <Route path="wishlist" element={<Wishlist></Wishlist>}></Route>
        <Route path="orders" element={<Orders></Orders>}></Route>
        </Route>

        </Routes>
        
        
        </BrowserRouter>
        
        </>
    )
}
export default App