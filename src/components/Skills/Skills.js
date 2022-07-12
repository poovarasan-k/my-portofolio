import React, { useEffect } from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import CarousalSkills from "./CarousalSkills"
import AOS from 'aos';
import "aos/dist/aos.css"
import "./Skills.css"
import ImgReact from "./ReactJs.gif"


export default function Skills() {
    useEffect(()=>{
        AOS.init({ duration: 3000});
    },[])
    return (
        <Container  id="Skills" style={{marginTop: "9.375rem"}}>
            <div className="Skills" data-aos="fade-up" data-aos-once="false">
                <Row className="align-items-center">
                    <Col>
                        <h2 className="h mb-3 d-flex align-items-center justify-content-start">Skills</h2>
                    </Col>
                    <Col>
                        <Image src={ImgReact} className="mb-3" fluid />
                    </Col>
                </Row>
            </div>
            <div className="ListSkill" data-aos="fade-up" data-aos-once="false">
                <CarousalSkills />
            </div>
        </Container>
    )
}
