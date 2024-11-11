import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import AdminHeader from '../../components/Header/AdminHeader'
import Cookies from "js-cookie";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink , useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer';
import { clearAllSliceStates, deleteMessages, deleteProject, deleteSkill, getAllMessages, getAllProjects, getAllSkills, userData } from '../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { languages } from '../../Utilis/Utilis';

const AdminProjects = () => {
    const token = Cookies.get("token")
    const role = Cookies.get("role")
    const Navigate = useNavigate()
    const dispatch = useDispatch()
const {skills , projects , projectsCount , skillsCount , messagesCount , messages , isUserSliceSuccess , 
  userSliceSuccessMessage , userSliceErrorMessage , isUserSliceError
} = useSelector(userData)
    useEffect(() => {
      
    dispatch(getAllProjects())
  
      return () => {
        dispatch(clearAllSliceStates())
        
      }
    }, [])
    
    useEffect(() => {
        if(!token && role!=="admin"){
          toast.error("Admin Access Only", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            }); 
          Navigate("/")
        }
       
      }, [])


useEffect(() => {
  if(isUserSliceSuccess){
    toast.success(userSliceSuccessMessage, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      }); 
  }
  return ()=>{
    dispatch(clearAllSliceStates())
}

}, [isUserSliceSuccess])


useEffect(() => {
  if(isUserSliceError){
    toast.error(userSliceErrorMessage, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      }); 
  }

  return ()=>{
    dispatch(clearAllSliceStates())
}
}, [isUserSliceError])

      const handleEdit = (ele  , name)=>{
        console.log(ele);
        switch(name) {
case "project" : 
Navigate(`/editProject/${ele._id}` ,{
  state : ele
})
break;

        }
       
      }
      const handleDelete = (ele , name)=>{
        console.log(ele);
        
        switch(name) {
          case "project" : 
          const sure = confirm(`are you sure you want to delete project ${ele.name}`);
          if(sure){
            dispatch(deleteProject(ele?._id))
          }
            break;
           
                default :
                alert("Nothing is deleted")
        } 
      }
      const getLanguageIcons = (skill) =>{
        
       const icon =  languages.filter((ele)=> ele.name === skill)
       
       return icon[0]?.icon
    }
    
  return (
    <>
    <AdminHeader/>

    <div className='addProject'>
    <h1 className='dashboard'> <span className='headColor'> Proj</span>ects</h1>
    <NavLink to ="/addProject"> <button id= "addProject" className='btn adminBtns'> + Add Project </button> </NavLink>
 
    </div>
    <table> 
        <thead>

        <tr>

        <th>S. No.</th>
        <th>Name</th>
        <th>Image</th>
        <th>Description</th>
        <th colSpan={2}>Action</th>
        </tr>
        </thead>
        <tbody>
            {projects && projects?.length && (
                projects?.map((project, index) => (
                    <tr key={project._id}>
                        <td>{index + 1}</td>
                        <td>{project.name}</td>
                        <td><img src= {project?.image} className="dash-img"  alt={project?.name} /></td>
                        <td>{project.description.slice(0,100) + "..."}</td>
                        <td onClick={()=> handleEdit(project , "project")}><i class="fa-solid fa-pencil" style={{cursor : "pointer"}}></i></td>
                        <td onClick={()=> handleDelete(project , "project")}><i class="fa-solid fa-trash" style={{cursor : "pointer"}}></i></td>
                       

                    </tr>
            ) ) )}
      
        </tbody>
    </table>


    <Footer/>
    </>
  )
}

export default AdminProjects