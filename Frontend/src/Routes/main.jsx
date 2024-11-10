import React, { lazy } from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import { Route, Routes } from 'react-router-dom'
import Projects from '../Pages/Projects'
import Experience from '../Pages/Experience'
import Skills from '../Pages/Skills'
import Education from '../Pages/Education'
import Contact from '../Pages/Contact'
import Error from '../Pages/Error'
import Login from '../Pages/Login'
import AdminDashboard from '../Pages/Admin/AdminDashboard'
import AdminProjects from '../Pages/Admin/AdminProjects'
import AdminSkills from '../Pages/Admin/AdminSkills'
import AdminEducation from '../Pages/Admin/AdminEducation'
import AdminExperience from '../Pages/Admin/AdminExperience'
import AdminMessages from '../Pages/Admin/AdminMessages'
import EditProjects from '../Pages/Admin/EditProjects'
import EditSkills from '../Pages/Admin/EditSkills'

// const Home  = lazy(()=> import ("../Pages/Home"))
// const About  = lazy(()=> import ("../Pages/About"))
// const Projects  = lazy(()=> import ("../Pages/Projects"))
// const Experience  = lazy(()=> import ("../Pages/Experience"))
// const Skills  = lazy(()=> import ("../Pages/Skills"))
// const Education  = lazy(()=> import ("../Pages/Education"))
// const Contact  = lazy(()=> import ("../Pages/Contact"))
// const Error  = lazy(()=> import ("../Pages/Error"))

// const mainRoutes = [
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { path: '/', element: <Home /> },
//       { path: '#about', element: <About /> },
      
//     ],
//   },
// ]
const MainRoutes = () =>{
  return (
    <>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/projects' element = {<Projects/>}/>
      <Route path='/experience' element = {<Experience/>}/>
      <Route path='/skills' element = {<Skills/>}/>
      <Route path='/education' element = {<Education/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/adminDashboard' element = {<AdminDashboard/>}/>
      <Route path='/adminProjects' element = {<AdminProjects/>}/>
      <Route path='/editProject/:id' element = {<EditProjects/>}/>
      <Route path='/adminSkills' element = {<AdminSkills/>}/>
      <Route path='/editSkill/:id' element = {<EditSkills/>}/>

      <Route path='/adminEducation' element = {<AdminEducation/>}/>
      <Route path='/adminExperience' element = {<AdminExperience/>}/>
      <Route path='/adminMessages' element = {<AdminMessages/>}/>
      <Route path='*' element = {<Error/>}/>

    </Routes>
    </>
  )
}



export default MainRoutes