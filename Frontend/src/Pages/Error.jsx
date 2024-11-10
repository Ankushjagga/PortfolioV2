import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error'>
    <img className='errorImg' src='https://res.cloudinary.com/daqnsxiyw/image/upload/v1729529065/pngtree-page-not-found-error-404-concept-with-people-trying-to-fix-png-image_2157908_lh4qju.jpg' alt='notFound'/>
    <h1 className='errorHeading'>404 page not found</h1>
    <p className='errorDesc'>Sorry, the page you are looking for does not exist.</p>
    <NavLink to  = "/">
    <button className='btn'> Go Back To Home 🔙</button>
    </NavLink>

    </div>
  )
}

export default Error