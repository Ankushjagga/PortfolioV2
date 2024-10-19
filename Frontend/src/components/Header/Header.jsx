import React , {useEffect, useState} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';
import "./Header.css"
const Header = () => {
  const location = useLocation()
  console.log(location.hash);
  
  const [activeSection , setActiveSection] = useState("")
      const navigation = [
        {
          to: "#home",
          name: "Home",
          icon:  <i className="fa-solid fa-house"></i>,
        },
        {
          to: "#about",
          name: "About Me",
          icon: <i className="fa-solid fa-address-card"></i>,
        },
        {
          to: "#projects",
          name: "Projects",
          icon: <i className="fa-solid fa-diagram-project"></i>,
        },
        {
          to: "#experience",
          name: "Experience",
          icon: <i className="fa-solid fa-brain"></i>,
        },
        {
          to: "#skills",
          name: "Skills",
          icon:<i className="fa-solid fa-user"></i>,
        },
        {
          to: "#education",
          name: "Education",
          icon: <i class="fa-solid fa-graduation-cap"></i>,
        },
    ]

    useEffect(() => {
      setActiveSection(location.hash);
      
    }, [location]);
    console.log(activeSection , "saddas");
    
  return (
    <div className='nav'>
    <h4 className={`logoNav`} >AJ</h4>
    {navigation.map(nav=>{
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
    })}
  
    <NavLink to="/okk" target='_blank' className={'headerNav'}><i className="fa-solid fa-download"></i>   Resume</NavLink>
    </div>
  )
}

export default Header