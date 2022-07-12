import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css"


function Footer() {
    return (
        <Container>
            <div className="Footer">
                <Row>
                    <Col>
                        <h3 className="h text-center">Get In Touch</h3>
                    </Col>
                </Row>
                <Row>
                    <Card.Header>
                        <Col className="d-flex justify-content-center">
                            <a className="anchor" href="https://www.linkedin.com/in/poovarasan-k-550891239" target="_blank"
                                rel="noopener noreferrer"><FaLinkedin /></a>
                            <a className="anchor" href="https://github.com/poovarasan-k" target="_blank"
                                rel="noopener noreferrer"><FaGithub /></a>
                        </Col>
                    </Card.Header>
                </Row>
            </div>
        </Container>
    )
}

export default Footer
