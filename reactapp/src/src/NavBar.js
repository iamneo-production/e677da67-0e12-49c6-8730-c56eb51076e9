import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav>
        
        <svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" class="ccompli2" fill="#FFBC7D"></path> </svg>
        
        <div class="header">
       <h1>STAR INSURANCE</h1>
       </div>
        <div>
        <ul id="navbar">
        
        <div class="dropdown">
        <button class="dropbtn" style={{color:"white"}}>Claims</button>
        <div class="dropdown-content">
        <a href="#">Cliam Intimation</a>
        <a href="#">Cliam Process</a>
        <a href="#">Cliam Status</a>
        <a href="#">Cliam HelpDesk</a>
        </div>
        </div>
        <div class="dropdown">
        <button class="dropbtn" style={{color:"white"}}>Plans</button>
        <div class="dropdown-content">
        <a href="/car">Car Insurance Plans
        </a>
        <a href="/home">Home Insurance Plan
        </a>
        <a href="/life">Life Insurance Plan</a>
        </div>
        </div>
        <br></br>
        <br></br>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        </ul>
        </div>
        <div className='none'>
        </div>
        </nav>
  )
}

export default NavBar