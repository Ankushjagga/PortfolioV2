import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import profileImg from '../assests/profile.jpg';
const About = () => {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key={0} id = "terminal">$ npm install about_ankush</TerminalOutput>,
      <TerminalOutput key={1}>loading...</TerminalOutput>,
    <TerminalOutput key={2}>identity adding...</TerminalOutput>,
    <TerminalOutput key={3} className= "terminal">$ name: Ankush Kumar Jagga</TerminalOutput>,
    <TerminalOutput key={4} className= "terminal">$ Profession: Full Stack Developer</TerminalOutput>,
    <TerminalOutput key={5} className= "terminal">$Current Company: Masters Union </TerminalOutput>
  ]);
  return (
    <div id='about'>
    <h1 className='about'> <span className='headColor'> About</span> Me</h1>
    <div className='profileImage'>

    <img src={profileImg} alt='Ankush Kumar Jagga' className='profile'/>
    </div>
    <div className='terminal-wraper'>

    <Terminal name='bash' colorMode={ ColorMode.dark } height='250px' prompt >
        { terminalLineData }
      </Terminal>
    </div>
    <div className="contact" id="contact">


<div className="row">

    <div className="content">
<h1 className="heading"> <span >contact</span> me :</h1>


        <div className="infos">
              <NavLink to="mailto:ankushjagga97@gmail.com">
            <h3> 


                    <i className="fas fa-envelope"></i>ankushjagga97@gmail.com </h3>
            </NavLink>
               <NavLink to="tel:9876054247">
            <h3>
                    <i className="fas fa-phone"></i>
                    9876054247
            </h3>
                </NavLink>

                <NavLink to="https://www.google.com/maps/place/Jagga+Book+Center/@30.1914532,74.5021976,17z/data=!3m1!4b1!4m5!3m4!1s0x3917172bce8a5227:0xb6dc4097ec6881d!8m2!3d30.1914532!4d74.5043863"
                    target="_blank">
                      <h3>

                    <i className="fas fa-map-marker-alt"></i> Malout, Punjab, india.
            </h3>
                </NavLink>

        </div>

    </div>
    <div className="connect">
            <h1 id="feel">Find Me On 😎</h1>
            <div className="links-connect">

                <NavLink to="https://www.linkedin.com/in/ankush-kumar-jagga-5610271bb/" target="_blank">

                    <i className="fa-brands fa-linkedin"></i>
                </NavLink>
                <NavLink to="https://github.com/Ankushjagga?tab=overview&from=2022-03-01&to=2022-03-31" target="_blank">

                    <i className="fa-brands fa-github"></i>
                </NavLink>
                <NavLink to="https://www.facebook.com/ankush.jagga.125" target="_blank">

                    <i className="fa-brands fa-facebook"></i>
                </NavLink>
                <NavLink to="https://www.instagram.com/ankushjagga18/" n target="_blank">

                    <i className="fa-brands fa-instagram"></i>
                </NavLink>
            </div>
            <h1 id="feel" >Feel Free To contact with me 😄</h1>
        </div>
    </div>
    </div>
    </div>
  )
}

export default About