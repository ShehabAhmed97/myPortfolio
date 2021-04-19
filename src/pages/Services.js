import React from 'react'
import "./services.css"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'


 const Services = () => {
    return (
        <div id="services" className="services-container">
            <h1>Services</h1>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <Jumbotron fluid className="servicesWrapper">
                        <Container>
                            <h1 style={{ fontSize: '10vh' }}>Web Design</h1>
                        </Container>
                    </Jumbotron>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <Jumbotron fluid className="servicesWrapper">
                        <Container>
                            <h1 style={{ fontSize: '10vh' }}>Responsive Design</h1>
                        </Container>
                    </Jumbotron>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <Jumbotron fluid className="servicesWrapper">
                        <Container >
                            <h1 style={{ fontSize: '10vh' }}>React Apps</h1>
                        </Container>
                    </Jumbotron>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <Jumbotron fluid className="servicesWrapper">
                        <Container>
                            <h1 style={{ fontSize: '10vh',  verticalAlign: "middle", }}>websites Edits and Updates</h1>
                        </Container>
                    </Jumbotron>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <Jumbotron fluid className="servicesWrapper">
                        <Container>
                            <h1 style={{ fontSize: '10vh'}}>Deployment</h1>
                        </Container>
                    </Jumbotron>
                </Carousel.Item>

            </Carousel>    

        </div>
    )
}
export default Services
