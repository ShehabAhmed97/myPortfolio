import React from 'react'
import "./cards.css"
import Card from "./card"

const CardsSection = () => {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Card
                          src="./quran.png" 
                          label="quraanyjanaty"
                          text="This is a simple multible pages website that presents an agncey's services"
                          githup="https://github.com/ShehabAhmed97/quraanyjanaty.git"
                          website="https://quranyjanaty.herokuapp.com/"
                        />
                         <Card
                          src="./game.png" 
                          label="Memory Game"
                          text="This is a simple game in which you get to flip two cards and try to match them, it involves a lot of javascript, dom manibulations and animations"
                          githup="https://github.com/ShehabAhmed97/memory-game.git"
                          website="https://shehabahmed97.github.io/memory-game/"
                        />
                         <Card
                          src="./img-4.jpg" 
                          label="travel"
                          text="Travel through the ilands of bali"
                          githup="https://github.com/ShehabAhmed97/quraanyjanaty.git"
                          website="https://quranyjanaty.herokuapp.com/"
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default CardsSection
