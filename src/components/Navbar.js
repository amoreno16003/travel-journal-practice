import React from 'react'

import TravelLogo from '../images/travellogo.png'
import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <div className='NavbarRoot'>
            <img src={TravelLogo} className='TravelLogo' alt="" />
            <h1>Alejandro Moreno's Travel Journal</h1>
    </div>
  )
}

export default Navbar