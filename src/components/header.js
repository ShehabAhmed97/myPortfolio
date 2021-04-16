import { Button } from './button'
import React from 'react'
import Typed from "react-typed"
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>Web Development</h1>
                <Typed
                strings={["Web development","Front-End","Responsive Designs","React App"]}
                className="typed-text"
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <Link to="/contacts">
                  <Button buttonStyle="btn--outline">Contact Me</Button>
                </Link>
            </div>
        </div>
    )
}

export default Header
