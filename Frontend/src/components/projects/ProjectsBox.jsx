import React from 'react'
import { NavLink } from 'react-router-dom'
import "./projectBox.css"

const ProjectsBox = ({image, Title , description , liveLink , githubLink , icons}) => {
  return (
    <section className="portfolio" id="portfolio">


    <div className="box-container">
        <div className="box">
            <img src={image} alt="projectImage" />
            <div className='boxContent'>

            <h1>{Title}</h1>
            <span className='projectIcon'>{icons}</span> 
            <p > {description} </p>
            <div className='projectBtn'>

            <button className="btn">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                <NavLink to={liveLink} target="_blank">

                View Project
            </NavLink>

        </button>
            <button className="btn">

                <i className="fa-solid fa-code-fork"></i>
                <NavLink to={githubLink} target="_blank">
                
                    View Code
            </NavLink>
            </button>
            </div>
            </div>
        </div>
        </div>
        </section>
        
  )
}

export default ProjectsBox