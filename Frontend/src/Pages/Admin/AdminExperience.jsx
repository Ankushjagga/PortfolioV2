import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import AdminHeader from '../../components/Header/AdminHeader'
import Cookies from "js-cookie";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink , useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer';
import { clearAllSliceStates, deleteEducation, deleteExperience, deleteMessages, deleteProject, deleteSkill, getAllEduaction, getAllExperience, getAllMessages, getAllProjects, getAllSkills, userData } from '../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { languages } from '../../Utilis/Utilis';
import moment from 'moment';

const AdminExperience = () => {
    const token = Cookies.get("token")
    const role = Cookies.get("role")
    const Navigate = useNavigate()
    const dispatch = useDispatch()
const {skills , education ,experience ,projectsCount , skillsCount , messagesCount , messages , isUserSliceSuccess , 
  userSliceSuccessMessage , userSliceErrorMessage , isUserSliceError
} = useSelector(userData)
    useEffect(() => {
      
    dispatch(getAllExperience())
  
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
        return ()=>{
          dispatch(clearAllSliceStates())
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
case "experience" : 
Navigate(`/editExperience/${ele._id}` ,{
  state : ele
})
break;

        }
       
      }
      const handleDelete = (ele , name)=>{
        console.log(ele);
        
        switch(name) {
          case "experience" : 
          const sure = confirm(`are you sure you want to delete experience ${ele.role}`);
          if(sure){
            dispatch(deleteExperience(ele?._id))
          }
            break;
           
                default :
                alert("Nothing is deleted")
        } 
      }
     
    
  return (
    <>
    <AdminHeader/>

    <div className='addProject'>
    <h1 className='dashboard'> <span className='headColor'> Exper</span>ience</h1>
    <NavLink to ="/addExperience"> <button id= "addProject" className='btn adminBtns'> + Add Experience </button> </NavLink>
 
    </div>
    <table> 
        <thead>

        <tr>

        <th>S. No.</th>
        <th>Company</th>
        <th>Image</th>
        <th>Role</th>
        <th>Description</th>
        <th>startDate</th>
        <th>endDate</th>
        <th colSpan={2}>Action</th>
        </tr>
        </thead>
        <tbody>
            {experience && experience?.length && (
                experience?.map((project, index) => (
                    <tr key={project._id}>
                        <td>{index + 1}</td>
                        <td>{project.company}</td>
                        <td><img src= {project?.image} className="dash-img"  alt={project?.school} /></td>
                        <td>{project.role}</td>
                        <td>{project.description.map((ele)=> <ul><li>{ele.slice(0,70)}</li></ul>)}</td>
                        <td>{moment(project.startDate).format("MMM YYYY")}</td>
                        <td>{project.endDate ?  moment(project.endDate).format("MMM YYYY") : "currently working"}</td>
                        <td onClick={()=> handleEdit(project , "experience")}><i class="fa-solid fa-pencil" style={{cursor : "pointer"}}></i></td>
                        <td onClick={()=> handleDelete(project , "experience")}><i class="fa-solid fa-trash" style={{cursor : "pointer"}}></i></td>
                       

                    </tr>
            ) ) )}
      
        </tbody>
    </table>


    <Footer/>
    </>
  )
}

export default AdminExperience