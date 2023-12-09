import { useState } from "react"
import './Style.css'
import axios from "axios"
import { NavLink, useNavigate } from "react-router-dom";


function Login(){
  const navi=useNavigate()   
    const [data, setData] = useState(
        {
           
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
        axios.post("https://udemi-pbit.onrender.com/api/login",data).then((res)=>{
            alert(res.data.mess);
            console.log(res.data)
            setData(res.data);
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("name",res.data.name)
            localStorage.setItem("email",res.data.email)
            if(res.data.token){
              navi("/")
            }
            else{
              navi("/login")
            }
          })
          .catch((err)=>{
            console.log(err)      
            })
        setData({
            name: "",
            phone: "",
            email: "",
            password: ""
        })
 
       
      }
    
    return(
      <div>
        <div className="body">
      
        <form>
        <h1 className="formheading">Log in to your Udemy account </h1>
        
            <label  htmlFor="email"> </label>
            <input className="input-bar" type="email" placeholder="Email" value={data.email} id="email" name="email" onChange={changeHandle}/><br/><br/>
            <label  htmlFor="password"> </label>
            <input className="input-bar"  type="password" placeholder="Password" value={data.password}id="password" name="password" onChange={changeHandle} /><br/><br/>
            <button className="btn1" onClick={handleClick}>login</button>
            OR <hr/>
            <div className="box1">
            Don't have an account ?<NavLink to="/register"> Signup </NavLink> <NavLink to="/login"> Log In </NavLink> with Your Organization
            </div>
        </form>
        
        </div>
        
        </div>
    )
    }
    export default Login;
