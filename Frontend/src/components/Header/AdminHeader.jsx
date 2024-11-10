import React from 'react'
import "./header.css"
import { NavLink, useLocation , useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from "js-cookie";
import { clearAllSliceStates, logout } from '../../redux/authSlice';


const AdminHeader = () => {
    const token = Cookies.get("token");
const role  = Cookies.get("role")
    const dispatch = useDispatch()
const navigate = useNavigate()
const handleLogout = ()=>{
// Get an array of all cookie names
var allCookies = Object.keys(Cookies.get());

// Loop through the cookie names and remove each cookie
allCookies.forEach(function (cookieName) {
  Cookies.remove(cookieName);
});
dispatch(logout());
dispatch(clearAllSliceStates())
navigate("/login");
toast.success("logout Sucessfully !", {
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
  return (
    <div className='navbar'>

    <div className='title'>
    
    <NavLink to="/adminDashboard"> <h4 className={`logoNav`} >  AJ</h4></NavLink>
    </div>

    <div className='adminLinkss'>
    <NavLink to="/adminProjects" className={"headerNav"}> <li><i className="fa-solid fa-diagram-project"></i> Projects</li></NavLink>
    <NavLink to="/adminSkills" className={"headerNav"}> <li  ><i className="fa-solid fa-user"></i> Skills</li></NavLink>
    <NavLink to="/adminMessages" className={"headerNav"}> <li  ><i class="fa-solid fa-phone"></i> Messages</li></NavLink>
    <NavLink to="/adminEducation" className={"headerNav"}> <li  ><i class="fa-solid fa-graduation-cap"></i> Education</li></NavLink>
    <NavLink to="/adminExperience" className={"headerNav"}> <li  ><i className="fa-solid fa-brain"></i> Experience</li></NavLink>
    </div>
    
    
    {token && role ==="admin" ? 
      <li className= 'nav-link lin' onClick={handleLogout}>Logout</li> 
    :
      <h3 className='adminPanel'>ADMIN PANEL</h3>
  }
  </div>
  )
}

export default AdminHeader