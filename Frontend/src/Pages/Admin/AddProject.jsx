import React, { useEffect, useState } from 'react'
import AdminHeader from '../../components/Header/AdminHeader'
import Footer from '../../components/Footer/Footer'
import InputBox from '../../components/InputBox/InputBox'
import { useDispatch, useSelector } from 'react-redux'
import { addProjects, clearAllSliceStates, editProject, userData } from '../../redux/userSlice'
import smalluploadLoader from "../../assests/smalluploadLoader.gif"
import useFileUpload from '../../CustomHooks/useFileUpload'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from "react-select"
import { iconsOption } from '../../Utilis/Utilis'
import { Navigate, useNavigate } from 'react-router-dom'

const AddProject = () => {
    const {isUserSliceSuccess , userSliceSuccessMessage , isUserSliceFetchingSmall ,  userSliceErrorMessage , isUserSliceError} = useSelector(userData)
    const {isFileUploading, fileUploadError, fileUploadSuccess, uploadedFileData, uploadFile} = useFileUpload()
   
    const dispatch = useDispatch()
const [inputMessage , setInputMessage] = useState({
    name :  "" ,
    image : "",
    description : "",
    languages : []
})
const [error , setError] = useState({
    name : "",
    image : "",
    description : "",
    languages : ""
})

const Navigate = useNavigate()

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


const handleInput = (e)=>{
    const {name , value} = e.target
    setInputMessage((prev=>({...prev, [name]: value})))
    setError((prev=>({...prev , [name]: ""})))
}

const handleSubmit = (e)=>{
    e.preventDefault()
    const errObj = {
        name : "",
        image : "",
        description : "",
        languages : ""
    }
    let obj = {
        name : inputMessage.name,
        image : inputMessage.image,
        description : inputMessage.description ,
        languages : inputMessage.languages
    }
    if(inputMessage.name === ""){
        errObj.name = "Please enter your description"
    }
    if(inputMessage.image === ""){
        errObj.image = "Please upload image"
        }
        if(inputMessage.description === ""){
            errObj.description = "Please enter description"
            }
            if(!inputMessage.languages.length){
                errObj.languages = "At least one Skill is required"
                }
            if(errObj.name !== "" || errObj.image !== "" || errObj.description !== "" || errObj.languages){
             return    setError(errObj) 
            }

            dispatch(addProjects(obj))
            Navigate("/adminProjects")
            
           
}

const handleChangefile =  async (e) =>{
    const file = e.target.files[0];
    console.log(e.target.files);
    
    // const fileFor = e.target.fileFor;
   const data =  await uploadFile(file)
   
   setError({...error, image : ""})
}

console.log(inputMessage);
  
  useEffect(() => {
   
   if(fileUploadSuccess && !isFileUploading){
    const link =  uploadedFileData.url;
  console.log(link);
  
  setInputMessage({...inputMessage , image: link})

   } 
  
  }, [isFileUploading])
  const skillSelect = (e)=>{
    console.log(e);
    const {label , value} = e
        setInputMessage((prev=>({...prev, languages:   e.map((ele)=> ele.value )})))
    
    setError((prev=>({...prev , [label]: ""})))
  }

  return (
    <>
   <AdminHeader/>
   <h1 className='dashboard'> <span className='headColor'> Add</span> Project</h1>
   <form className='formData'>
   <InputBox  labelName={"Name "} name= "name" type={"text"} className={"inputBox"} onChange={handleInput} value={inputMessage.name} isError={error.name ? true : false} erroMessage={error.name}/>
      <div className='visibleInput'>

   <label className={"visible"}>Image

    
        {<span className={"impRed"}> *</span>}
          </label>
        <input className='file inputBox' type='file' accept='.jpg,.jpeg,.gif,.png,.pdf' name='image'  onChange={handleChangefile}/>
          {error.image && <h5 className='errors'>{error.image}</h5>}
        </div>
        <span style={{display: "flex", flexDirection: "column"}}>
        {isFileUploading && <h3 style={{display :  isFileUploading ? "visible" : "none" }}>File uploading plese wait ...</h3>}
        {inputMessage.image && <p className='imageView'>Current Image: <a href={inputMessage.image} target="_blank" rel="noopener noreferrer">View Image</a></p>}
        
        <label for="skills" className='visible'>Skills <span className={"impRed"}> *</span></label>
        <Select  isMulti options={iconsOption} onChange={skillSelect} className='select'/>
        <label for="message" className='visible'>Description <span className={"impRed"}> *</span></label>
        <textarea  className={"inputBox"} onChange={handleInput} name='description' cols={10} rows={6} value={inputMessage.description} />
           <span className='FormError'>  {error.description ? error.description : ""}</span>
        </span>
        <button className='btn contactBtn' disabled ={isUserSliceFetchingSmall} onClick={handleSubmit}>Add + {isUserSliceFetchingSmall && <img className='upload' src={smalluploadLoader} alt='uploading...'/>} </button>
   </form>
    
    <Footer/>]
    </>
  )
}

export default AddProject