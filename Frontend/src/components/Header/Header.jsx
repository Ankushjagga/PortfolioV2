import React , {useEffect, useState} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';
import "./Header.css"
import Resume from "../../assests/AnkushKumarJagga.pdf"
const Header = () => {
  const location = useLocation()
  
  const [activeSection , setActiveSection] = useState("")
    //   const navigation = [
    //     {
    //       to: "#home",
    //       name: "Home",
    //       icon:  <i className="fa-solid fa-house"></i>,
    //     },
    //     {
    //       to: "#about",
    //       name: "About Me",
    //       icon: <i className="fa-solid fa-address-card"></i>,
    //     },
    //     {
    //       to: "#projects",
    //       name: "Projects",
    //       icon: <i className="fa-solid fa-diagram-project"></i>,
    //     },
    //     {
    //       to: "#experience",
    //       name: "Experience",
    //       icon: <i className="fa-solid fa-brain"></i>,
    //     },
    //     {
    //       to: "#skills",
    //       name: "Skills",
    //       icon:<i className="fa-solid fa-user"></i>,
    //     },
    //     {
    //       to: "#education",
    //       name: "Education",
    //       icon: <i class="fa-solid fa-graduation-cap"></i>,
    //     },
    // ]

    // useEffect(() => {
    //   setActiveSection(location.hash);
      
    // }, [location]);
    // console.log(activeSection , "saddas");
    
    const handleScroll = (id) =>{
      document
      .getElementById(id)
      .scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id)
    }
    const handleDownload = ()=>{
      alert("This is an Old Resume , will Create new One Soon... 😁");
      window.open(Resume, "_blank")
    }
  return (
    <div className='nav'>
    <NavLink to="/"> <h4 className={`logoNav`} >  AJ</h4></NavLink>
    <li  className = {`headerNav ${activeSection === "home" ? "active" : ""}`} onClick={() => {
            handleScroll("home")
          }}><i className="fa-solid fa-house"></i> Home</li>
            <li  className = {`headerNav ${activeSection === "about" ? "active" : ""}`} onClick={() => {
           handleScroll("about")
          }}><i className="fa-solid fa-address-card"></i> About Me</li>
      <li className = {`headerNav ${activeSection === "projects" ? "active" : ""}`}  onClick={() => {
           handleScroll("projects")
          }}><i className="fa-solid fa-diagram-project"></i> Projects</li>
           <li className = {`headerNav ${activeSection === "experience" ? "active" : ""}`}  onClick={() => {
           handleScroll("experience")
          }}><i className="fa-solid fa-brain"></i> Experience</li>
           <li className = {`headerNav ${activeSection === "skills" ? "active" : ""}`}  onClick={() => {
           handleScroll("skills")
          }}><i className="fa-solid fa-user"></i> Skills</li>
           <li  className = {`headerNav ${activeSection === "education" ? "active" : ""}`} onClick={() => {
           handleScroll("education")
          }}><i class="fa-solid fa-graduation-cap"></i> Education</li> 
          <li  className = {`headerNav ${activeSection === "contactss" ? "active" : ""}`} onClick={() => {
           handleScroll("contactss")
          }}><i class="fa-solid fa-phone"></i> Contact</li>
    <li className={`headerNav ${activeSection === "resume" ? "active" : ""}`} onClick={handleDownload}><i className="fa-solid fa-download"></i>   Resume</li>

    {/* {navigation.map(nav=>{
      console.log(activeSection === nav.to);
      
      return (
        <NavHashLink 
        smooth 
        to={nav.to}
        key={nav.name}
        className={`headerNav ${activeSection === nav.to ? 'actives' : ""}`}
        >
         {nav.icon}
          {nav.name}
        </NavHashLink>
      )
    })} */}
  
    </div>
  )
}

export default Header