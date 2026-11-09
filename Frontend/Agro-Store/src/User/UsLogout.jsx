import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function UsLogout(){
var navigate=useNavigate()
useEffect(()=>{
    navigate("/")
    
},[])


    return(

        <>
        
        
        </>
    )
}
export default UsLogout