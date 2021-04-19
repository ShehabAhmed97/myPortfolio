import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom"
import React, {useState} from 'react'
const Navbar = () => {

  const [click,setClick]=useState(false)
  const handleClick = () =>{setClick(!click)} 
  const closeMobileMenu =() =>{setClick(false)}

  return (
    <div >
                <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
              <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleClick}>
                <i className= {click? "fas fa-times":"fas fa-bars"} style={{color:"white"}} ></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/myPortfolio#home" onClick={closeMobileMenu}>Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/myPortfolio#about" onClick={closeMobileMenu}>About me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/myPortfolio#services" onClick={closeMobileMenu}>services</a>
                </li>
                <li className="nav-item" >
                <a className="nav-link" href="/myPortfolio#skills" onClick={closeMobileMenu}>skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/myPortfolio#portfolio" onClick={closeMobileMenu}>Portfolio</a>
                </li>
                <li className="nav-item">
                  <Link to="/contacts" className="nav-link" onClick={closeMobileMenu}>
                  Contact
                  </Link>
                </li>
              </ul>
            </div>
            </div>
          </nav>
    </div>
  )
}

export default Navbar
