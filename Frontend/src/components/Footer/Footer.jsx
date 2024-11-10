import React from 'react'
import "./Footer.css"
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <>
     <footer className="footer">
        <h4>Designed and Developed By Ankush Kumar Jagga</h4>
        <h4>

            copyright@2022 AJ
        </h4>
        <span className="foo-connect">


            <NavLink to ="https://www.linkedin.com/in/ankush-kumar-jagga-5610271bb/" target="_blank" >

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


        </span>
         <NavLink to = "/login" ><p style={{textDecoration : "underline ", color : "#c289c7b9"}}> Login </p></NavLink>
    </footer>
    </>
  )
}

export default Footer