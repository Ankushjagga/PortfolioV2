import React from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About"
import {CustomCursor} from "./Utilis/CustomCursor"
import Projects from "./Pages/Projects"
import Experience from "./Pages/Experience"
import Skills from "./Pages/Skills"
import Education from "./Pages/Education"
import Contact from "./Pages/Contact"
import Error from "./Pages/Error"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainRoutes from "./Routes/main"

function App() {

  

  return (
    <>
{/* routes ka kuch karna hain sahiii */}
   <CustomCursor/>
<ToastContainer/>
  <MainRoutes/>
  {/* <Home/>
  <About/>
  <Projects/>
  <Experience/>
  <Skills/>
  <Education/>
  <Contact/>
  <Error/> */}
  {/* <Footer/> */}
    </>
  )
}

export default App
