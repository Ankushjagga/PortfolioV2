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

const EditProjects = () => {
    const {isUserSliceSuccess , userSliceSuccessMessage , isUserSliceFetchingSmall ,  userSliceErrorMessage , isUserSliceError} = useSelector(userData)
    const {isFileUploading, fileUploadError, fileUploadSuccess, uploadedFileData, uploadFile} = useFileUpload()
    const location = useLocation()
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id);
    
    console.log(location);
    const  data = location.state
    const dispatch = useDispatch()
const [inputMessage , setInputMessage] = useState({
    name :  data?.name ,
    image : data?.image,
    description : data?.description
})
const [error , setError] = useState({
    name : "",
    image : "",
    description : ""
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
        image : "",
        description : ""
    }
    let obj = {
        id : id,
        name : inputMessage.name,
        image : inputMessage.image,
        description : inputMessage.description
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
            if(errObj.name !== "" || errObj.image !== "" || errObj.description !== ""){
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
   <form>
   <InputBox  labelName={"Name "} name= "name" type={"text"} className={"inputBox"} onChange={handleInput} value={inputMessage.name} isError={error.name ? true : false} erroMessage={error.name}/>
   Image
        <input className='file' type='file' accept='.jpg,.jpeg,.gif,.png' name='image'  onChange={handleChangefile}/>
        <h5 className='errors'>{error.image}</h5>
        <span style={{display: "flex", flexDirection: "column"}}>
        {isFileUploading && <h3>File uploading plese wait ...</h3>}
        {inputMessage.image && <p>Current Image: <a href={inputMessage.image} target="_blank" rel="noopener noreferrer">View Image</a></p>}
        <label for="message" className='visible'>Description <span className={"impRed"}> *</span></label>
        <textarea  className={"inputBox"} onChange={handleInput} name='description' cols={10} rows={6} value={inputMessage.description} />
           <span className='FormError'>  {error.description ? error.description : ""}</span>
        </span>
        <button className='btn contactBtn' disabled ={isUserSliceFetchingSmall} onClick={handleSubmit}>Edit <i class="fa-solid fa-pencil"></i> {isUserSliceFetchingSmall && <img className='upload' src={smalluploadLoader} alt='uploading...'/>} </button>
   </form>
    
    <Footer/>]
    </>
  )
}

export default EditProjects