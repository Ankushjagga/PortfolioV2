import React, { useEffect, useRef, useState } from 'react'
import InputBox from '../components/InputBox/InputBox'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage, clearAllSliceStates, userData } from '../redux/userSlice'
import { ToastContainer, toast } from 'react-toastify';
import smalluploadLoader from "../assests/smalluploadLoader.gif"
const Contact = () => {
    const inputRef = useRef(null)
    const dispatch = useDispatch()
    const {isUserSliceSuccess , userSliceSuccessMessage , isUserSliceFetchingSmall} = useSelector(userData)
    const [inputMessage, setInputMessage] = useState({
        name: "",
        email : "",
        message: ""
    })
    const [error , setError] = useState({
        name: "",
        email : "",
        message: ""
    })

useEffect(() => {
if(isUserSliceSuccess){
    toast.success(userSliceSuccessMessage)
}
return () => {
    clearAllSliceStates()
  }
}, [isUserSliceSuccess])



    const handleInput = (e)=>{
        const {name , value} = e.target;
        setInputMessage((prev)=> ({...prev, [name]: value}))
        setError((prev)=> ({...prev , [name] : ""}))
        console.log(inputMessage);
        
        
    }
    const handleSubmit = ()=>{
        const errObj = {
            name : "",
            email : "",
            message : ""
        }
        if(inputMessage.name === ""){
            errObj.name = "Please enter your name"
        }
        if(inputMessage.email === ""){
            errObj.email = "Please enter your email"
            }
            if(inputMessage.message === ""){
                errObj.message = "Please enter your message"
                }
                if(errObj.name !== "" || errObj.email !== "" || errObj.message !== ""){
                 return    setError(errObj) 
                }
                dispatch(addMessage({
                    name : inputMessage.name,
                    email : inputMessage.email,
                    message : inputMessage.message
                }))
                setInputMessage({
                    name : "",
                    email : "",
                    message : ""
                    
                })
    }
  return (
    <div id='contactss'>
    <h1 className='about'> <span className='headColor'> Contact</span> Me</h1>
    <div className='contactInfo'>
        <div className='contactInput'>

        <InputBox  ref= {inputRef} labelName={"Name "} name= "name" type={"text"} className={"inputBox"} onChange={handleInput} value={inputMessage.name} isError={error.name ? true : false} erroMessage={error.name}/>
        <InputBox  ref= {inputRef} labelName={"email"}  name = "email" type={"text"} className={"inputBox"} onChange={handleInput} value={inputMessage.email} isError={error.email ? true :false} erroMessage={error.email}/>
        <span style={{display: "flex", flexDirection: "column"}}>

        <label for="message" className='visible'>Message <span className={"impRed"}> *</span></label>
        <textarea  ref= {inputRef} className={"inputBox"} onChange={handleInput} name='message' cols={10} rows={6} value={inputMessage.message} />
           <span className='FormError'>  {error.message ? error.message : ""}</span>
        </span>
        <button className='btn contactBtn' disabled ={isUserSliceFetchingSmall} onClick={handleSubmit}>Send <i className="fa-solid fa-rocket"></i> {isUserSliceFetchingSmall && <img className='upload' src={smalluploadLoader} alt='uploading...'/>} </button>
        </div>
        <span className='gokuDiv'> 

        <img src='https://res.cloudinary.com/daqnsxiyw/image/upload/v1729349612/thumb-1920-956998-transformed_tvfcci.png' alt='goku' className='gokuImg'/>
        </span>
    </div>
    
    </div>
  )
}

export default Contact