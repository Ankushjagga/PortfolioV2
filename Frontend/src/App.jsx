import React from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About"
import {CustomCursor} from "./Utilis/CustomCursor"
function App() {

  return (
    <>

   <CustomCursor/>

  <Header/> 
  <Home/>
  <About/>
  <Footer/>
    </>
  )
}

export default App
