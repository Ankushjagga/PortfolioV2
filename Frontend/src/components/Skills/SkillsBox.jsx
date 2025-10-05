import React, { useEffect } from 'react'
import "./skillsBox.css"
import { useDispatch, useSelector } from 'react-redux'
import { getAllSkills, userData } from '../../redux/userSlice'
import { languages } from '../../Utilis/Utilis'
const SkillsBox = ({icon , language}) => {
    const dispatch = useDispatch()
    const {skills} = useSelector(userData)

//     useEffect(() => {
//          if (!skills || skills.length === 0) {
//    dispatch(getAllSkills())
//          }
//     }, [])

    const getLanguageIcons = (skill) =>{
        // console.log(skill);
        
       const icon =  languages.filter((ele)=> ele.name === skill)
    //    console.log(icon[0]?.icon, "icon");
       
       return icon[0]?.icon
    }
    
  return (
    
    <section className="skills" >
        <div className="counter">

                {skills.map((ele)=>{
                    return (
                        <div className="box">
                        <div key={ele.id}>
                        {/* <span><i className="fa-solid fa-c"></i></span> */}
                        <span>{getLanguageIcons(ele?.logo)}</span>
                        <h3>{ele.name}</h3>
                        </div>
            </div>

                    )
                })}
             

            {/* <div class="box">
                <span><i class="fa-solid fa-c">++</i></span>
                <h3>C++ Language</h3>
            </div>

            <div class="box">
                <span><i class="fa-brands fa-html5"></i></span>
                <h3>HTML</h3>
            </div>

            <div class="box">
                <span><i class="fa-brands fa-css3-alt"></i></span>
                <h3>CSS</h3>
            </div>
            <div class="box">
                <span><i class="fa-brands fa-js"></i></span>
                <h3>Javascript</h3>
            </div>

            <div class="box">
                <span><i class="fa-brands fa-react"></i></span>
                <h3>React.js</h3>
            </div>
            <div class="box">
                <span><i class="fa-brands fa-node"></i></span>
                <h3>Node.js</h3>
            </div>
           
            <div class="box">
                <span><i class="fa-solid fa-database"></i></span>
                <h3>MongoDB</h3>
            </div>
            <div class="box">
                <span><i class="fa-brands fa-git-alt"></i></span>
                <h3>Git</h3>
            </div>
            <div class="box">
                <span> <i class="fa-brands fa-github"></i>
                </span>
                <h3>Github</h3>
            </div> */}
        </div>

    </section>
  )
}

export default SkillsBox