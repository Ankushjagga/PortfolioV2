import React, { useEffect }  from 'react'
import ProjectsBox from '../components/projects/ProjectsBox'
import { FaCss3Alt, FaNodeJs } from 'react-icons/fa'
import { SiExpress, SiMongodb } from 'react-icons/si'
import { getAllProjects, userData } from '../redux/userSlice'
import {useDispatch , useSelector} from "react-redux"
import { languages } from '../Utilis/Utilis'

const Projects = () => {
    const dispatch = useDispatch()
    const {projects} = useSelector(userData)
    useEffect(() => {
    dispatch(getAllProjects())
    }, [])
    const getLanguageIcons = (skills) =>{
        const icons = skills.map(skill => {
            const found = languages.find(ele => ele.name === skill);
            return found ? found.icon : null; 
        });
       
       return icons
    }
 
  return (
    <div id='projects'>
    <h1 className='about'> <span className='headColor'> Proj</span>ects</h1>
    <h1 id="feel" style={{textAlign:"center"}}>Some of my Projects 🚀</h1>
    {projects?.map((ele)=>{
        console.log(ele.languages);
        
        return (
          <>
          <ProjectsBox image={ele?.image} Title={ele?.name} 
            liveLink={"https://foody-pvp6.onrender.com/"} githubLink={"https://github.com/Ankushjagga/Foody"} 
            description={ele?.description} icons={getLanguageIcons(ele?.languages)} className= "project"
    /> 
          </>
        )
    })}


    
    </div>
  )
}

export default Projects