import React, { useEffect, useState } from 'react'
import AdminHeader from '../../components/Header/AdminHeader'
import Footer from '../../components/Footer/Footer'
import InputBox from '../../components/InputBox/InputBox'
import { useDispatch, useSelector } from 'react-redux'
import { clearAllSliceStates, editProject, editSkill, userData } from '../../redux/userSlice'
import smalluploadLoader from "../../assests/smalluploadLoader.gif"
import useFileUpload from '../../CustomHooks/useFileUpload'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from "react-select"
const EditSkills = () => {
    const {isUserSliceSuccess , userSliceSuccessMessage , isUserSliceFetchingSmall ,  userSliceErrorMessage , isUserSliceError} = useSelector(userData)
    const location = useLocation()
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id);
    
    console.log(location);
    const  data = location.state
    const dispatch = useDispatch()
const [inputMessage , setInputMessage] = useState({
    name :  data?.name ,
    logo : data?.logo,
})
const [error , setError] = useState({
    name : "",
    logo : "",
})


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
  
  
  }, [isUserSliceError])


const handleInput = (e)=>{
    const {name , value} = e.target
    setInputMessage((prev=>({...prev, [name]: value})))
    setError((prev=>({...prev , [name]: ""})))
}

const handleSubmit = (e)=>{
    e.preventDefault()
    const errObj = {
        name : "",
        logo : "",
    }
    let obj = {
        id : id,
        name : inputMessage.name,
        logo : inputMessage.logo,
    }
    if(inputMessage.name === ""){
        errObj.name = "Please enter  name"
    }
    if(inputMessage.logo === ""){
        errObj.logo = "Please select  logo"
        }
       
            if(errObj.name !== "" || errObj.logo !== ""){
             return    setError(errObj) 
            }

            dispatch(editSkill(obj))
            
           
}

const iconsOption = [
    {    value : "html" , label : "html"},
    {    value : "css" , label : "css"},
    {    value : "js" , label : "js"},
    {    value : "react" , label : "react"},
    {    value : "node" , label : "node"},
    {    value : "express" , label : "express"},
    {    value : "mongodb" , label : "mongodb"},
    {    value : "sql" , label : "sql"},
    {    value : "sequelize" , label : "sequelize"},
    {    value : "redis" , label : "redis"},
    {    value : "docker" , label : "docker"},
    {    value : "native" , label : "native"},
    {    value : "c" , label : "c"},
    {    value : "c++" , label : "c++"},
    {    value : "git" , label : "git"}
  
]
const skillChange =  (e) =>{
    console.log(e);
    const {label , value} = e
    setInputMessage((prev=>({...prev, logo: value})))
    setError((prev=>({...prev , [label]: ""})))
    
    
}



  return (
    <>
   <AdminHeader/>
   <h1 className='dashboard'> <span className='headColor'> Edit</span> Skills</h1>
   <form>
   <InputBox  labelName={"Name "} name= "name" type={"text"} className={"inputBox"} onChange={handleInput} value={inputMessage.name} isError={error.name ? true : false} erroMessage={error.name}/>
   Logo Name
       <Select isMulti = {false} options={iconsOption} onChange = {skillChange}  className='select' value={iconsOption.find((ele)=> ele.value=== inputMessage?.logo)} />
        <button className='btn contactBtn' disabled ={isUserSliceFetchingSmall} onClick={handleSubmit}>Edit <i class="fa-solid fa-pencil"></i> {isUserSliceFetchingSmall && <img className='upload' src={smalluploadLoader} alt='uploading...'/>} </button>
   </form>
    
    <Footer/>]
    </>
  )
}

export default EditSkills