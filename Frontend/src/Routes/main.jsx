import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import { Route, Routes } from 'react-router-dom'
import Projects from '../Pages/Projects'

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
      <Route path='#home' element = {<Home/>}/>
      <Route path='#about' element = {<About/>}/>
      <Route path='#projects' element = {<Projects/>}/>
    </Routes>
    </>
  )
}



export default MainRoutes