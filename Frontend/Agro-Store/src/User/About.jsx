import { useNavigate } from "react-router-dom"

function About(){
var navigate=useNavigate()

    return(

        <>
        <div className="col-md-6"><button className="btn btn-danger mb-3" onClick={()=>navigate("/user/home")}>🡠</button><h3 style={{display:"inline"}} className="ms-2 ">About</h3></div>
        </>
    )
}
export default About