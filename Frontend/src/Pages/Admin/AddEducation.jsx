import React, { useEffect, useState } from 'react'
import AdminHeader from '../../components/Header/AdminHeader'
import Footer from '../../components/Footer/Footer'
import InputBox from '../../components/InputBox/InputBox'
import { useDispatch, useSelector } from 'react-redux'
import { addEducation, clearAllSliceStates, editEducation, editProject, userData } from '../../redux/userSlice'
import smalluploadLoader from "../../assests/smalluploadLoader.gif"
import useFileUpload from '../../CustomHooks/useFileUpload'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment'

const AddEducation = () => {
    const {isUserSliceSuccess , userSliceSuccessMessage , isUserSliceFetchingSmall ,  userSliceErrorMessage , isUserSliceError} = useSelector(userData)
    const {isFileUploading, fileUploadError, fileUploadSuccess, uploadedFileData, uploadFile} = useFileUpload()
    const location = useLocation()
    const {id} = useParams()
    console.log(id);
    
    console.log(location);
    const  data = location.state
    const dispatch = useDispatch()
const [inputMessage , setInputMessage] = useState({
    school :  "" ,
    image : "",
    description : "" ,
    specialization : "" ,
    startDate : "" ,
    endDate : ""
})
const [error , setError] = useState({
    school : "",
    image : "",
    description : "",
    startDate : "",
    endDate : "",
    specialization : ""

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
        school : "",
        image : "",
        description : "",
        startDate : "",
        endDate : "",
        specialization : ""
    }
console.log("helooo111");

    let obj = {
        id : id,
        school : inputMessage.school,
        image : inputMessage.image,
        description : inputMessage.description,
        specialization : inputMessage.specialization ,
        startDate : inputMessage.startDate ,
        endDate : inputMessage.endDate
    }
console.log("helooo11w1");

    if(inputMessage.school === ""){
        errObj.school = "Please enter your school"
    }
    if(inputMessage.image === ""){
        errObj.image = "Please upload image"
        }
        if(inputMessage.description === ""){
            errObj.description = "Please enter description"
            }
            if(inputMessage.specialization === ""){
                errObj.specialization = "Please enter specialization"
                }
                if(inputMessage.startDate === ""){
                    errObj.startDate = "Please enter startDate"
                    }
                    if(inputMessage.endDate === ""){
                        errObj.endDate = "Please enter endDate"
                        }
            if(errObj.school !== "" || errObj.image !== "" || errObj.description !== "" || errObj.specialization !=="" || errObj.endDate !== "" || errObj.startDate !== "" ){
                console.log("erroor");
                
             return    setError(errObj) 
            }
console.log("helooo");

            dispatch(addEducation(obj))
            
           
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
   <InputBox  labelName={"school "} name= "school" type={"text"} className={"inputBox"} onChange={handleInput} value={inputMessage.school} isError={error.school ? true : false} erroMessage={error.school}/>
   Image
        <input className='file' type='file' accept='.jpg,.jpeg,.gif,.png' name='image'  onChange={handleChangefile}/>
        <h5 className='errors'>{error.image}</h5>
        <span style={{display: "flex", flexDirection: "column"}}>
        {isFileUploading && <h3>File uploading plese wait ...</h3>}
        {inputMessage.image && <p>Current Image: <a href={inputMessage.image} target="_blank" rel="noopener noreferrer">View Image</a></p>}
        <InputBox  labelName={"specialization"} name= "specialization" type={"text"} className={"inputBox"} onChange={handleInput} value={inputMessage.specialization} isError={error.specialization ? true : false} erroMessage={error.specialization}/>
        <label for="message" className='visible'>Description <span className={"impRed"}> *</span></label>
        <textarea  className={"inputBox"} onChange={handleInput} name='description' cols={10} rows={6} value={inputMessage.description} />
           <span className='FormError'>  {error.description ? error.description : ""}</span>
           <InputBox  labelName={"startDate"} name='startDate' type={"date"} className={"inputBox"} onChange={handleInput} value={moment(inputMessage.startDate).format('YYYY-MM-DD')} isError={error.startDate ? true : false} erroMessage={error.startDate}/>
           <InputBox  labelName={"endDate"} name='endDate' type={"date"} className={"inputBox"} onChange={handleInput} value={moment(inputMessage.endDate).format('YYYY-MM-DD')} isError={error.endDate ? true : false} erroMessage={error.endDate}/>

        </span>
  
        <button className='btn contactBtn' disabled ={isUserSliceFetchingSmall} onClick={handleSubmit}>Add <i class="fa-solid fa-pencil"></i> {isUserSliceFetchingSmall && <img className='upload' src={smalluploadLoader} alt='uploading...'/>} </button>
   </form>
    
    <Footer/>]
    </>
  )
}

export default AddEducation