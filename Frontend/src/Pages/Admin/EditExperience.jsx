import React, { useEffect, useState } from 'react'
import AdminHeader from '../../components/Header/AdminHeader'
import Footer from '../../components/Footer/Footer'
import InputBox from '../../components/InputBox/InputBox'
import { useDispatch, useSelector } from 'react-redux'
import { clearAllSliceStates, editEducation, editExperience, editProject, userData } from '../../redux/userSlice'
import smalluploadLoader from "../../assests/smalluploadLoader.gif"
import useFileUpload from '../../CustomHooks/useFileUpload'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment'

const EditExperience = () => {
    const {isUserSliceSuccess , userSliceSuccessMessage , isUserSliceFetchingSmall ,  userSliceErrorMessage , isUserSliceError} = useSelector(userData)
    const {isFileUploading, fileUploadError, fileUploadSuccess, uploadedFileData, uploadFile} = useFileUpload()
    const location = useLocation()
    const {id} = useParams()
    console.log(id);
    
    console.log(location);
    const  data = location.state
    const dispatch = useDispatch()
const [inputMessage , setInputMessage] = useState({
    company :  data?.company ,
    image : data?.image,
    description : data?.description ,
    role : data?.role ,
    startDate : data?.startDate ,
    endDate : data?.endDate
})
const [error , setError] = useState({
    company : "",
    image : "",
    description : "",
    startDate : "",
    endDate : "",
    role : ""

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
        Navigate("/adminEducation")
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
        company : "",
        image : "",
        description : "",
        startDate : "",
        endDate : "",
        role : ""
    }
console.log("helooo111");

    let obj = {
        id : id,
        company : inputMessage.company,
        image : inputMessage.image,
        description : inputMessage.description,
        role : inputMessage.role ,
        startDate : inputMessage.startDate ,
        endDate : inputMessage.endDate
    }
console.log("helooo11w1");

    if(inputMessage.company === ""){
        errObj.company = "Please enter your company"
    }
    if(inputMessage.image === ""){
        errObj.image = "Please upload image"
        }
        if(inputMessage.description === ""){
            errObj.description = "Please enter description"
            }
            if(inputMessage.role === ""){
                errObj.role = "Please enter role"
                }
                if(inputMessage.startDate === ""){
                    errObj.startDate = "Please enter startDate"
                    }
                   
            if(errObj.company !== "" || errObj.image !== "" || errObj.description !== "" || errObj.role !==""  || errObj.startDate !== "" ){
                console.log("erroor");
                
             return    setError(errObj) 
            }
console.log("helooo");

            dispatch(editExperience(obj))
            
           
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
   <h1 className='dashboard'> <span className='headColor'> Edit</span> Education</h1>
   <form>
   <InputBox  labelName={"company "} name= "company" type={"text"} className={"inputBox"} onChange={handleInput} value={inputMessage.company} isError={error.company ? true : false} erroMessage={error.company}/>
   Image
        <input className='file' type='file' accept='.jpg,.jpeg,.gif,.png' name='image'  onChange={handleChangefile}/>
        <h5 className='errors'>{error.image}</h5>
        <span style={{display: "flex", flexDirection: "column"}}>
        {isFileUploading && <h3>File uploading plese wait ...</h3>}
        {inputMessage.image && <p>Current Image: <a href={inputMessage.image} target="_blank" rel="noopener noreferrer">View Image</a></p>}
        <InputBox  labelName={"role"} name= "role" type={"text"} className={"inputBox"} onChange={handleInput} value={inputMessage.role} isError={error.role ? true : false} erroMessage={error.role}/>
        <label for="message" className='visible'>Description <span className={"impRed"}> *</span></label>
        <textarea  className={"inputBox"} onChange={handleInput} name='description' cols={10} rows={6} value={inputMessage.description} />
           <span className='FormError'>  {error.description ? error.description : ""}</span>
           <InputBox  labelName={"startDate"} name='startDate' type={"date"} className={"inputBox"} onChange={handleInput} value={moment(inputMessage.startDate).format('YYYY-MM-DD')} isError={error.startDate ? true : false} erroMessage={error.startDate}/>
           <InputBox  labelName={"endDate"} name='endDate' type={"date"} className={"inputBox"} onChange={handleInput} value={moment(inputMessage.endDate).format('YYYY-MM-DD')} isError={error.endDate ? true : false} erroMessage={error.endDate}/>

        </span>
  
        <button className='btn contactBtn' disabled ={isUserSliceFetchingSmall} onClick={handleSubmit}>Edit <i class="fa-solid fa-pencil"></i> {isUserSliceFetchingSmall && <img className='upload' src={smalluploadLoader} alt='uploading...'/>} </button>
   </form>
    
    <Footer/>]
    </>
  )
}

export default EditExperience