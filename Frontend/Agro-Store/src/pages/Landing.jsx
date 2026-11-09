import { useNavigate } from "react-router-dom"

function Landing(){
    var navigate=useNavigate()

    return(
        <>
        <h1>Landing Page</h1>
        <button className="btn btn-primary" onClick={()=>navigate("/login")}>Login</button>
        
        </>
    )
}
export default Landing