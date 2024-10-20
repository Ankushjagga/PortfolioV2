import React, { useEffect } from 'react'
import ExpEduBox from '../components/ExpEdu/ExpEduBox'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEduaction, userData } from '../redux/userSlice'
const Education = () => {
    const dispatch = useDispatch()

    const {education} = useSelector(userData)

    useEffect(() => {
   dispatch(getAllEduaction())
    }, [])
  return (
    <div id='education'>
    <h1 className='about'> <span className='headColor'> Educ</span>ation</h1>
    
   <ExpEduBox title = {"My education has been a journey of self-discovery and growth 🎓"} data={education} />
    </div>
  )
}

export default Education