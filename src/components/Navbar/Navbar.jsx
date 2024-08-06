import React from 'react'
import './nav.css'
import Home from '../Home/Home'


const Navbar = () => {
  return (
    <>
    <header>
      <nav className="navbar">
        <div className="logo"><img src='./src/assets/crm.png'></img></div>

        <div className="items">
          <a href="#home">HOME</a>
          <a href="#sign">FORM</a>
          <a href="#container">DATABASE</a>
          <a href="#">FOOTER</a>
        </div>
        
       
       
          <button className='button'>Talk to me</button>
        
      </nav>
       
    </header>
    </>
    
  )
}

export default Navbar