import { useNavigate } from "react-router-dom"

function AdLogout(){
 var navigate=useNavigate()
 navigate("/login")
 localStorage.removeItem("admin")
    return(

        <>
        
        
        </>
    )
}
export default AdLogout