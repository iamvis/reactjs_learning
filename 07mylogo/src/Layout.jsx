import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
//ouitlet page pr jo chije sb me sam rahegiusko chhor kar
//dusri chije change karta hai
//jaha pr outlet dete hai wo chije he sirf change hogi 

function Layout() {
  return (
     <>
     <Header/>
     <Outlet />
     <Footer/>
     
     </>
  )
}

export default Layout
