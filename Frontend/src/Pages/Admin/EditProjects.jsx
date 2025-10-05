import React, { useEffect, useState } from 'react'
import AdminHeader from '../../components/Header/AdminHeader'
import Footer from '../../components/Footer/Footer'
import InputBox from '../../components/InputBox/InputBox'
import { useDispatch, useSelector } from 'react-redux'
import { clearAllSliceStates, editProject, userData } from '../../redux/userSlice'
import smalluploadLoader from "../../assests/smalluploadLoader.gif"
import useFileUpload from '../../CustomHooks/useFileUpload'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Admin.css"

const EditProjects = () => {
    const {isUserSliceSuccess , userSliceSuccessMessage , isUserSliceFetchingSmall ,  userSliceErrorMessage , isUserSliceError} = useSelector(userData)
    const {isFileUploading, fileUploadError, fileUploadSuccess, uploadedFileData, uploadFile} = useFileUpload()
    const location = useLocation()
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id);
    
    console.log(location);
    const  data = location.state
    console.log(data);
    
    const dispatch = useDispatch()
const [inputMessage , setInputMessage] = useState({
    name :  data?.name ,
    image : data?.image,
    description : data?.description,
    githubLink : data?.githubLink,
    liveUrl : data?.liveUrl
})
const [error , setError] = useState({
    name : "",
    image : "",
    description : "",
    githubLink : "",
    liveUrl : ""
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
        navigate("/adminDashboard")
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
        image : "",
        description : "",
        githubLink : "",
        liveUrl : ""
    }
    let obj = {
        id : id,
        name : inputMessage.name,
        image : inputMessage.image,
        description : inputMessage.description,
        githubLink : inputMessage.githubLink,
        liveUrl : inputMessage.liveUrl
    }
    console.log(obj);
    
    if(inputMessage.name === ""){
        errObj.name = "Please enter your description"
    }
    if(inputMessage.image === ""){
        errObj.image = "Please upload image"
        }
        if(inputMessage.description === ""){
            errObj.description = "Please enter description"
            }

if(inputMessage.githubLink === ""){
            errObj.githubLink = "Please enter github Link"
            }
            if(inputMessage.liveUrl === ""){
            errObj.liveUrl = "Please enter live Url"
            }

            if(errObj.name !== "" || errObj.image !== "" || errObj.description !== "" || errObj.githubLink != ""|| errObj.liveUrl!=""){
             return    setError(errObj) 
            }

            dispatch(editProject(obj))
            
           
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

  return (
    <>
   <AdminHeader/>
   <h1 className='dashboard'> <span className='headColor'> Edit</span> Project</h1>
   <form className='formData'>
   <InputBox  labelName={"Name "} name= "name" type={"text"} className={"inputBox"} onChange={handleInput} value={inputMessage.name} isError={error.name ? true : false} erroMessage={error.name}/>
      <div className='visibleInput'>
          <label className={"visible"} htmlFor={id}>Image

    
        {<span className={"impRed"}> *</span>}
          </label>

        <input className='file inputBox' type='file' accept='.jpg,.jpeg,.gif,.png' name='image' onChange={handleChangefile}/>
       {error.image && <h5 className='errors'>{error.image}</h5>}
        </div>
        <span style={{display: "flex", flexDirection: "column"}}>
        {isFileUploading && <h3 style={{display :  isFileUploading ? "visible" : "none" }}>File uploading plese wait ...</h3>}
        {inputMessage.image && <p className='imageView'>Current Image: <a href={inputMessage.image} target="_blank" rel="noopener noreferrer">View Image</a></p>}
        </span>
   <InputBox  labelName={"Github Link"} name= "githubLink" type={"url"} className={"inputBox"} onChange={handleInput} value={inputMessage.githubLink} isError={error.githubLink ? true : false} erroMessage={error.githubLink}/>
 <InputBox  labelName={"Live Link"} name= "liveUrl" type={"url"} className={"inputBox"} onChange={handleInput} value={inputMessage.liveUrl} isError={error.liveUrl ? true : false} erroMessage={error.liveUrl}/>
        <label for="message" className='visible'>Description <span className={"impRed"}> *</span></label>
        <textarea  className={"inputBox"} onChange={handleInput} name='description' cols={10} rows={6} value={inputMessage.description} />
           <span className='FormError'>  {error.description ? error.description : ""}</span>
        <button className='btn contactBtn' disabled ={isUserSliceFetchingSmall} onClick={handleSubmit}>Edit <i class="fa-solid fa-pencil"></i> {isUserSliceFetchingSmall && <img className='upload' src={smalluploadLoader} alt='uploading...'/>} </button>
   </form>
    
    <Footer/>
    </>
  )
}

export default EditProjects