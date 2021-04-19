import React from 'react'
import "./portfolio.css"
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
const portfolio = () => {
    return (
        <div id="portfolio" className="portfolio-container" >
            <h1>check out my portfilio</h1>
            <CardGroup>
                <Card style={{ width: '18rem' }}>
                    <Card.Body className="cards">
                        <Card.Title>Quraany Janaty</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Multible html/css website</Card.Subtitle>
                        <Card.Text>
                        This is a simple multible pages website made entirly with html/css, It presents an agncey's different services, 
                        the website consists of home page, about, one page for each service, and contact page, the website is fully responsive and works on any device. 
                        </Card.Text>
                        <Card.Link href="https://github.com/ShehabAhmed97/quraanyjanaty.git" target="_blank">github link</Card.Link>
                        <Card.Link href="https://quranyjanaty.herokuapp.com/" target="_blank">Website link</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body className="cards">
                        <Card.Title>Memory Game</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Single page html/css/javascript</Card.Subtitle>
                        <Card.Text>
                        This is a simple game in which you get to flip two cards and try to match them,
                         it involves a lot of javascript, dom manibulations and animations
                        </Card.Text>
                        <Card.Link href="https://github.com/ShehabAhmed97/memory-game.git" target="_blank">github link</Card.Link>
                        <Card.Link href="####" target="_blank">Website link</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body className="cards">
                        <Card.Title>My Portfolio</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">React app</Card.Subtitle>
                        <Card.Text>
                         This a portfolio website, made with react.js and react-bootstrap
                        </Card.Text>
                        <Card.Link href="https://github.com/ShehabAhmed97/myPortfolio.git" target="_blank">github link</Card.Link>
                    </Card.Body>
                </Card>
            </CardGroup>

        </div>
    )
}

export default portfolio
