import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import { Route, Routes } from 'react-router-dom'
import Projects from '../Pages/Projects'
import Experience from '../Pages/Experience'
import Skills from '../Pages/Skills'
import Education from '../Pages/Education'
import Contact from '../Pages/Contact'

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
      <Route path='/home' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/projects' element = {<Projects/>}/>
      <Route path='/experience' element = {<Experience/>}/>
      <Route path='/skills' element = {<Skills/>}/>
      <Route path='/education' element = {<Education/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route path='*' element = {<Error/>}/>

    </Routes>
    </>
  )
}



export default MainRoutes