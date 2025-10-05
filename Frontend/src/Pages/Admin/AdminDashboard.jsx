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

const AdminDashboard = () => {
    const token = Cookies.get("token")
    const role = Cookies.get("role")
    const Navigate = useNavigate()
    const dispatch = useDispatch()
const {skills , projects , projectsCount , skillsCount , messagesCount , messages , isUserSliceSuccess , 
  userSliceSuccessMessage , userSliceErrorMessage , isUserSliceError
} = useSelector(userData)
    useEffect(() => {
      
    dispatch(getAllProjects())
    dispatch(getAllSkills())
    dispatch(getAllMessages())
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


}, [isUserSliceError])

      const handleEdit = (ele  , name)=>{
        console.log(ele);
        switch(name) {
case "project" : 
Navigate(`/editProject/${ele._id}` ,{
  state : ele
})
break;
case "skill" : 
Navigate(`/editSkill/${ele._id}` ,{
  state : ele
})
break; 
default :
Navigate(`/editProjects`)
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
            case "skill" :
          const ok = confirm(`are you sure you want to delete skill ${ele.name}`);
          if(ok){
              dispatch(deleteSkill(ele?._id))
          }
              break;
              case  "message" :
                const oks = confirm(`are you sure you want to delete message ${ele.message}`);
                if(oks){
                dispatch(deleteMessages(ele?._id))
                }
                break ;
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
    <h1 className='dashboard'> <span className='headColor'> Admin</span> Dashboard</h1>
    <div className='btns'>
       <NavLink to ="/adminProjects"> <button className='btn adminBtns'>Projects : {projectsCount} </button>
</NavLink>      <NavLink to ="/adminSkills">  <button className='btn adminBtns'>Skills : {skillsCount}</button>
    </NavLink>  <NavLink to ="/adminMessages">  <button className='btn adminBtns'>Messages : {messagesCount} </button></NavLink>
    </div>
    <h1 className='dashboard'> <span className='headColor'> Proj</span>ects</h1>
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
    <h1 className='dashboard'> <span className='headColor'> Ski</span>lls</h1>

    <table> 
        <thead>

        <tr>

        <th>S. No.</th>
        <th>Name</th>
        <th>Image</th>
        <th colSpan={2}>Action</th>
        </tr>
        </thead>
        <tbody>
            {skills && skills?.length && (
                skills?.map((skill, index) => (
                    <tr key={skill._id}>
                        <td>{index + 1}</td>
                        <td>{skill.name}</td>
                        <td> <span className='dashboard-img'> {getLanguageIcons(skill?.logo)}</span></td>
                        <td onClick={()=> handleEdit(skill, "skill")}><i class="fa-solid fa-pencil" style={{cursor : "pointer"}}></i></td>
                        <td onClick={()=> handleDelete(skill, "skill")}><i class="fa-solid fa-trash" style={{cursor : "pointer"}}></i></td>
                       

                    </tr>
            ) ) )}
      
        </tbody>
    </table>

    <h1 className='dashboard'> <span className='headColor'>   Mess</span>ages</h1>

<table> 
    <thead>

    <tr>

    <th>S. No.</th>
    <th>Name</th>
    <th>email</th>
    <th>Message</th>
    <th colSpan={2}>Action</th>
    </tr>
    </thead>
        {messages && messages?.length ? (
          messages?.map((message, index) => (
              <tbody>
                <tr key={message._id}>
                    <td>{index + 1}</td>
                    <td>{message.userId.name}</td>
                    <td>{message.userId.email}</td>
                    <td> {message.message} </td>
                    <td onClick={()=> handleDelete(message , "message")}><i class="fa-solid fa-trash" style={{cursor : "pointer"}}></i></td>
                   

                </tr>
    </tbody>
        ) ) ) 
        :   (
          <tbody>
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                <h1>No Messages 🥲</h1>
              </td>
            </tr>
          </tbody>
        )}
     
  
</table>
    <Footer/>
    </>
  )
}

export default AdminDashboard