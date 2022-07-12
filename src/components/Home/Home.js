import React from "react"
import { Container, Row, Col, Image, Button } from "react-bootstrap"
import Typed from "react-typed"
import "./Home.css"
import Human from "./Human.gif"

export default function Home() {
    return (
        <Container id="Home" style={{marginTop: "3.125rem"}}>
            <div className="Home">
                <Row>
                    <Col md={6} className="d-flex flex-column justify-content-evenly">
                        <h3 className="t1" style={{ marginBottom: "0px", color: "#493ecf" }}>Hi There ! </h3>
                        <h2 className="t1" style={{ paddingLeft: "10px" }}>I'm Poovarasan</h2>
                        <Typed className="t2" style={{ paddingLeft: "20px" }} strings={["Front-End Developer", "Web Developer", "React Developer", "QA Lead", "Web Auto-Testing"]} 
                        typeSpeed={70} backSpeed={70}
                        loop
                        />
                        <div className="d-flex flex-column">
                            <Button variant="outline-secondary" href="#Contact">Hire Me...</Button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <Image src={Human} fluid className="mt-2" />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
