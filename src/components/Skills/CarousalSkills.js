import React from "react"
import { Container, Carousel, Card, CardGroup, Row, Col } from "react-bootstrap"
import "./CarousalSkills.css"
import HtmlLogoCard from "./CardImage/HtmlLogoCard.svg"
import CssLogoCard from "./CardImage/CssLogoCard.svg"
import JsLogoCard from "./CardImage/JsLogoCard.svg"
import BootstrapLogoCard from "./CardImage/BootstrapLogoCard.svg"
import JqureyLogoCard from "./CardImage/JqureyLogoCard.svg"
import ReactLogoCard from "./CardImage/ReactLogoCard.svg"
import ReduxLogoCard from "./CardImage/ReduxLogoCard.svg"
import JsonLogoCard from "./CardImage/JsonLogoCard.svg"
import GitLogoCard from "./CardImage/GitLogoCard.svg"
import ResponsiveDesignLogoCard from "./CardImage/ResponsiveDesignLogoCard.svg"


function CarousalSkills() {
    return (
        <Container className="mt-5 mb-5">
            <Carousel indicators={false} nextIcon="" nextLabel="" prevIcon="" prevLabel="" variant="dark" fade>
                <Carousel.Item interval={1500}>
                    <Row>
                        <Col xs={12}>
                            <CardGroup className="d-flex justify-content-evenly">
                            <Card className="me-2">
                                <Card.Header className="d-flex justify-content-evenly">
                                    <Card.Img className="mt-3" variant="top" src={HtmlLogoCard} />
                                </Card.Header>
                                <Card.Body className="mx-auto">
                                    <Card.Title className="text-center fs-6">HTML</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Header className="d-flex justify-content-evenly">
                                    <Card.Img className="mt-3" variant="top" src={CssLogoCard} />
                                </Card.Header>
                                <Card.Body className="mx-auto">
                                    <Card.Title className="text-center fs-6">CSS</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                </Card.Footer>
                            </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Carousel.Item>

                <Carousel.Item interval={1500}>
                    <Row>
                    <Col xs={12}>
                            <CardGroup className="d-flex justify-content-evenly">
                            <Card className="me-2">
                                <Card.Header className="d-flex justify-content-evenly">
                                    <Card.Img className="mt-3" variant="top" src={JsLogoCard} />
                                </Card.Header>
                                <Card.Body className="mx-auto">
                                    <Card.Title className="text-center fs-6">JAVASCRIPT</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Header className="d-flex justify-content-evenly">
                                    <Card.Img className="mt-3" variant="top" src={BootstrapLogoCard} />
                                </Card.Header>
                                <Card.Body className="mx-auto">
                                    <Card.Title className="text-center fs-6">BOOTSTRAP</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                </Card.Footer>
                            </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Carousel.Item>
                
                <Carousel.Item interval={1500}>
                    <Row>
                    <Col xs={12}>
                            <CardGroup className="d-flex justify-content-evenly">
                            <Card className="me-2">
                                <Card.Header className="d-flex justify-content-evenly">
                                    <Card.Img className="mt-3" variant="top" src={ReactLogoCard} />
                                </Card.Header>
                                <Card.Body className="mx-auto">
                                    <Card.Title className="text-center fs-6">REACT JS</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Header className="d-flex justify-content-evenly">
                                    <Card.Img className="mt-3" variant="top" src={JqureyLogoCard} />
                                </Card.Header>
                                <Card.Body className="mx-auto">
                                    {/* Web Automation With Python */}
                                    <Card.Title className="text-center fs-6">JQUERY</Card.Title>  
                                </Card.Body>
                                <Card.Footer>
                                </Card.Footer>
                            </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Carousel.Item>

                <Carousel.Item interval={1500}>
                    <Row>
                    <Col xs={12}>
                            <CardGroup className="d-flex justify-content-evenly">
                            <Card className="me-2">
                                <Card.Header className="d-flex justify-content-evenly">
                                    <Card.Img className="mt-3" variant="top" src={JsonLogoCard} />
                                </Card.Header>
                                <Card.Body className="mx-auto">
                                    <Card.Title className="text-center fs-6">JSON</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Header className="d-flex justify-content-evenly">
                                    <Card.Img className="mt-3" variant="top" src={GitLogoCard} />
                                </Card.Header>
                                <Card.Body className="mx-auto">
                                    <Card.Title className="text-center fs-6">GIT</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                </Card.Footer>
                            </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Carousel.Item>

                <Carousel.Item interval={1500}>
                    <Row>
                    <Col xs={12}>
                            <CardGroup className="d-flex justify-content-evenly">
                            <Card className="me-2">
                                <Card.Header className="d-flex justify-content-evenly">
                                    <Card.Img className="mt-3" variant="top" src={ReduxLogoCard} />
                                </Card.Header>
                                <Card.Body className="mx-auto">
                                    <Card.Title className="text-center fs-6">REDUX JS</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Header className="d-flex justify-content-evenly">
                                    <Card.Img className="mt-3" variant="top" src={ResponsiveDesignLogoCard} />
                                </Card.Header>
                                <Card.Body className="mx-auto">
                                    <Card.Title className="text-center fs-6">WEB DESIGN</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                </Card.Footer>
                            </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Carousel.Item>
                
            </Carousel>
        </Container>
    )
}

export default CarousalSkills
