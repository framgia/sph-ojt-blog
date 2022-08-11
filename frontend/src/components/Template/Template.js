import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const Template = ({children}) => {
  return (
    <div>
        <NavBar />
        {children}
        <Footer />
    </div>
  )
}

export default Template
