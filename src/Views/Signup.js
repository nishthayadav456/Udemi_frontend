import './Style.css'
import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
function Signup(){
 const navi=useNavigate()   

  const [data, setData] = useState(
    {
        name: "",
        email: "",
        password: ""
    }
)
  
  const changeHandle = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
}
  const handleClick=(e)=>{
    e.preventDefault()
    console.log(data)
    axios.post("https://udemi-pbit.onrender.com/api/register",data)
   
    .then((res)=>{
      alert(res.data.mess);
  
      localStorage.setItem("token",res.data.token)
      localStorage.setItem("name",res.data.name)
      navi("/login")
    })
    .catch((err)=>{
    console.log(err)      
    })
    setData({
      name: "",
      email: "",
      password: ""
  })

    
  }

  return(
      <div className="body">
      
      <form>
      <h1  className="formheading">Sign up and start learning</h1>
      
          <label htmlFor="name"></label>
          <input className="input-bar" type="text" placeholder="Full Name" value={data.name} id="name" name="name" onChange={changeHandle}/><br/><br/>
         <label htmlFor="email"> </label>
          <input className="input-bar" type="email" placeholder="Email" value={data.email} id="email" name="email" onChange={changeHandle}/><br/><br/>
          <label  htmlFor="password"></label>
          <input className="input-bar"type="password" placeholder="Password" value={data.password} id="password" name="password" onChange={changeHandle}/><br/><br/>
          <button className="btn1"  onClick={handleClick}>SignUp</button><br/>
          <div className="or1" style={{color:"black"}}>Already have an account?
        <NavLink to="/login" style={{color:"black"}}>
          Go To Login Page
        </NavLink>
        </div>
      </form>
      </div>
  )
 
}
export default  Signup;