import React, { useEffect, useState } from 'react'
import { useTypingEffect } from '../CustomHooks/useTyping'
import { programmingQuotes } from '../Utilis/Utilis'
import Marquee from  "react-fast-marquee"
import { FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
const Home = () => {
    const text = ["Hi 👋, I'm Ankush Kumar Jagga"]
    const [quote,setQuote] = useState("");
    const typing = useTypingEffect(text)
    
    useEffect(() => {
        const getRandomQuote = ()=>{
            const randomIndex = Math.floor(Math.random() * programmingQuotes.length);
            const randomQuote = programmingQuotes[randomIndex];
            
            setQuote(randomQuote)
    
        }
        getRandomQuote()
 const interval = setInterval(getRandomQuote, 2000);
return  () => {
clearInterval(interval)
}

    }, [])
    const projects  =[
      "https://res.cloudinary.com/daqnsxiyw/image/upload/v1729265251/foody_hfev38.png",
      "https://res.cloudinary.com/daqnsxiyw/image/upload/v1729265241/book_xvi7dn.png",
      "https://res.cloudinary.com/daqnsxiyw/image/upload/v1729265236/movie_spp0tv.png",
      "https://res.cloudinary.com/daqnsxiyw/image/upload/v1729265235/weather_jbpnda.webp",
      "https://res.cloudinary.com/daqnsxiyw/image/upload/v1729265350/notes_bkrldh.jpg"
    ]
    const skills = [
      "C",
      "C++",
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Node",
      "Express",
      "MongoDB",
      "SQL",
      "Sequelize ORM",
      "Redis",
      "Docker",
      "React Native"
    ]
   

  return (
    <div id= "home">
    <div className='typing'>

     <h1 >{typing}</h1>
    </div>
     <h1 className='quote'>{quote}</h1>
     <Marquee 
     pauseOnHover = {true}
     speed = {200}
     className='marquee'
     >
      {projects.map(ele=>{
        return  <img src={ele} alt="project"  className='marqueeImg'/>
      })}
     </Marquee>

     <Marquee 
     pauseOnHover = {true}
     speed = {200}
     className='marquee'
     direction='right'
     >
      {skills.map(ele=>{
        return  <h1 className='marqueetext'>{ele}</h1>
      })}
     </Marquee>
     <Marquee 
     pauseOnHover = {true}
     speed = {200}
     className='marquee'
     direction='left'
     >
      <div className='marqueeIcon'>

      <FaCss3Alt/>
      <FaDocker/>
      <FaHtml5/>
      <FaNodeJs/>
      <IoLogoJavascript/>
      <IoLogoReact/>
      <SiExpress/>
      <SiMongodb/>
      <SiMysql/>
      <SiRedis/>
      <SiSequelize/>
      </div>
     </Marquee>
     
     
  </div>
  )
}

export default Home