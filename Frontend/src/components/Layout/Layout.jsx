import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { CustomCursor } from '../../Utilis/CustomCursor'

const Layout = () => {
  return (
   <>
   <CustomCursor/>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout