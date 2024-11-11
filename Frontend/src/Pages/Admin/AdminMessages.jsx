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

const AdminMessages = () => {
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

      const handleDelete = (ele , name)=>{
        console.log(ele);
        
        switch(name) {
     
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
     
    
  return (
    <>
    <AdminHeader/>
    
    <div className='addProject'>
    <h1 className='dashboard'> <span className='headColor'>   Mess</span>ages</h1>
</div>
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

export default AdminMessages