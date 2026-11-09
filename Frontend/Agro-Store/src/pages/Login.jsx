import { useRef } from "react"
import { useNavigate } from "react-router-dom"
function Login(){
    var username=useRef("")
    var Password=useRef("")
    var navigate=useNavigate()
    var Logindetails=(e)=>{
        e.preventDefault()
    var user=username.current.value
    var userPassword=Password.current.value
    var admin=username.current.value
    var adminPassword=Password.current.value
    if(admin=="admin" && adminPassword=="admin123"){
        alert("admin Logged Successfully")
        localStorage.setItem("admin",admin)
        navigate("/admin")
    }
    else if(user!="admin" && userPassword==userPassword.slice(0,1)+"123"){
        alert("user Logged Successfully ")
        localStorage.setItem("user",user)
        navigate("/user")
    }
    else{
        alert("Enter the Correct Details")
    }
    }
    return(

        <>
        <h1>Login Page</h1>
        
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <form action="" onSubmit={Logindetails}>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="" className="form-label">UserName</label>
                                <input type="text" className="form-control" required ref={username}/>
                            </div>
                             <div className="form-group">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" required ref={Password}/>
                            </div>
                            <br />
                            <div className="form-group">
                                <button className="btn btn-primary" type="submit">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default Login