import React,{useState,useContext, useEffect} from 'react'

import "./login.css"
import { NavLink , useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch , useSelector } from 'react-redux';
import Cookies from "js-cookie";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AdminHeader from '../components/Header/AdminHeader';
import { authData, clearAllSliceStates, loginUser } from '../redux/authSlice';
import smalluploadLoader from "../assests/smalluploadLoader.gif"

const Login = () => {

  const [user,setUser]=useState({email:"",password:""});
  const [icon, setIcon] = useState("fa-eye-slash")
  const [passwordInput , setPasswordInput] = useState("password")
  const [error , setError] = useState({email:"", password : ""})

  const dispatch = useDispatch()
  const {loggedInUserName, isAuthSliceSuccess , isAuthSliceFetchingSmall , authSliceSuccessMessage , isAuthSliceError , authSliceErrorMessage} = useSelector(authData)


  const Navigate =useNavigate();
const token = Cookies.get("token")

  useEffect(() => {
    if(token){
      toast.error("need to logout first", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }); 
      Navigate("/adminDashboard")
    }
   
  }, [])
  useEffect(() => {
    if(isAuthSliceSuccess){
      dispatch(clearAllSliceStates())
      toast.success(authSliceSuccessMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        Navigate("/adminDashboard")
    }
    
    }, [isAuthSliceSuccess])
    
    useEffect(() => {
      if(isAuthSliceError){
  dispatch(clearAllSliceStates())

        toast.error(authSliceErrorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          }); 
      }
    }, [isAuthSliceError])
    

let name,value;
  const handleInputs=(e)=>{
    name=e.target.name;
    value=e.target.value;
setUser({...user,[name]:value})
setError({ ...error, [name]: '' });

  }

 
  const handleEyeClick = () =>{
    if (icon === "fa-eye-slash") {
      setIcon("fa-eye")
    setPasswordInput("text")

  }else{
    setIcon("fa-eye-slash")
    setPasswordInput("password")
  }
}
const handleSubmit =(e)=>{
  e.preventDefault();
  const newErrorObj = {
    email : "",
    password : ""
  }

  if(!user.email){
    newErrorObj.email = "email is required"
  }
  if(!user.password){
    newErrorObj.password = "password is required"
  }
for (let key in newErrorObj) {
 if(newErrorObj[key]){
  setError(newErrorObj)
  return ;
 }
    
  }

  dispatch(loginUser(user))
} 

useEffect(() => {
  window.scroll({
    top: 0,
    behavior: "instant",
  });
}, []);



  return (
   <>
   <AdminHeader/>
   <div className="container" id="container">
    <div className="details">
		<img className='login-img' src="https://res.cloudinary.com/daqnsxiyw/image/upload/v1736792343/Login-pana_frcgub.png" alt='img' />
		</div>
	<div className="login-in-container">
<form method='POST' className='loginForm'>
    <h1>Login </h1>
  <input className='inp' type="email" placeholder="Enter Email"name='email' value={user.email}  onChange={handleInputs}   required/>
 <h3 className='FormError'> {error.email}</h3>
  <span className = "passwordSpan">

  <input  className='inp'type={passwordInput} placeholder="Enter Password"name='password'  value={user.password}  onChange={handleInputs} required/> <i className={`fa-solid ${icon}`} id='eye' onClick={handleEyeClick} ></i>
   <h3 className='FormError'> {error.password} </h3>
  </span>

  <button className='btn contactBtn' disabled = {isAuthSliceFetchingSmall}  placeholder='Submit'onClick={handleSubmit}  >Submit <i className="fa-solid fa-rocket"></i>
  {isAuthSliceFetchingSmall && <img className='upload' src={smalluploadLoader} alt="Image Uploading" />}

  </button>

</form>

	</div>
			
			
	
</div>
<Footer/>
   </>
  )
}

export default Login