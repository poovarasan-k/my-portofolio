import React, { useEffect } from "react"
import { Container, Row, Col, Image, Button } from "react-bootstrap"
import AOS from 'aos';
import "aos/dist/aos.css"
import "./Resume.css"
import ResumeImg from "./Resume.gif"
import MyResume from "./ResumePO.pdf"

export default function Resume() {
    useEffect(() => {
        /**Aos Initalization */
        AOS.init({ duration: 3000 });
    }, [])
    return (
        <Container id="Resume" style={{ marginTop: "9.375rem" }}>
            <div className="Resume" data-aos="fade-up" data-aos-once="false">
                <Row className="flex-column flex-md-row">
                    <Col>
                        <h2 className="h mb-3 d-flex align-items-center justify-content-start">Resume</h2>
                        <Image src={ResumeImg} className="mb-3" fluid />
                    </Col>
                    <Col className="d-flex flex-column justify-content-evenly">
                        <h3 className="text-muted">Hello,</h3>
                        <p className="p fw-light text-break">I am Poovarasan, front-end developer from Chennai, India. I have knowledge in website and Web design, also I am good at PWA.</p>
                        <h6>To Download My Resume: </h6>
                        <Button href={MyResume} download>Download CV</Button>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
