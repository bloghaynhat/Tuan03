import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Header/NavBar'
import MyBody from './Body/MyBody'
import MyFooter from './Footeer/MyFooter'
import LaiXuat from './LaiXuat/LaiXuat'
function App() {

  return (
    <>
      {/* <NavBar className="header"/> 
      <MyBody className="body"/>
      <MyFooter className="footer"/> */}

      <LaiXuat/>
    </>
      
  )
}

export default App
