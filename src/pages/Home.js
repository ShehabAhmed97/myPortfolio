import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-particles-js';

import './Home.css'

import Header from "../components/header"
import About from "./About"
import Skills from "./skills"
import Portfolio from "./portfolio"
import Services from "./Services"



 const Home = () => {
    return (
        <>
        <Particles
         params={{
           particles:{
             number:{
               value:30,
               density:{
                 enable:true,
                 value_area:1000
               }
             },
             shape:{
               type:"polygon",
               stroke:{
                 width:5,
                 color:"#FF0000"
               }
             }
           }
         }}
        >
        </Particles>
        <Header/>
        <About/>
        <Services/>
       <Skills/>
       <Portfolio/>
        </>
    )
}
export default Home
