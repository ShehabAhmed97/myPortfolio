import React from 'react'
import "./skills.css"
import Badge from 'react-bootstrap/Badge'
import Carousel from 'react-bootstrap/Carousel'




const Skills = () => {
    return (
        <div id="skills" className="skills-container">
            <h1>skills</h1>
            <Carousel className="wrapper">
                <Carousel.Item className="icon-orange">
                <i className="fab fa-html5"></i>
                </Carousel.Item>
                <Carousel.Item className="icon-blue">
                <i class="fab fa-css3-alt"></i>
                </Carousel.Item>
                <Carousel.Item className="icon-pink">
                <i class="fab fa-sass"></i>
                </Carousel.Item>
                <Carousel.Item className="icon-purple">
                <i class="fab fa-bootstrap"></i>
                </Carousel.Item>
                <Carousel.Item className="icon-blue">
                <i class="fab fa-font-awesome"></i>
                </Carousel.Item>
                <Carousel.Item className="icon-yellow">
                <i class="fab fa-js-square"></i>
                </Carousel.Item>
                <Carousel.Item className="icon-blue">
                <i class="fab fa-react"></i>
                </Carousel.Item>
                <Carousel.Item className="icon-red">
                <i class="fab fa-angular"></i>
                </Carousel.Item>
                <Carousel.Item className="icon">
                <i class="fab fa-git"></i>
                </Carousel.Item>
                <Carousel.Item className="icon">
                <i class="fab fa-github"></i>
                </Carousel.Item>
            </Carousel>
            </div>
    )
}

export default Skills
