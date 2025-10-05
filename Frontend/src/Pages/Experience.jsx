import React, { useEffect } from 'react'
import ExpEduBox from '../components/ExpEdu/ExpEduBox'
import { useDispatch, useSelector } from 'react-redux'
import { getAllExperience, userData } from '../redux/userSlice'
const Experience = () => {
    const dispatch = useDispatch()
    const {experience} = useSelector(userData)

  //   useEffect(() => {
  //       if (!experience || experience.length === 0) {
  //  dispatch(getAllExperience())
  //       }
  //   }, [experience])
    
  return (
    <div id='experience'>
    <h1 className='about'> <span className='headColor'> Exper</span>ience</h1>

   <ExpEduBox title={"My Experience as Software Developer 🧑‍💻"}  data={experience}/>
    </div>
  )
}

export default Experience