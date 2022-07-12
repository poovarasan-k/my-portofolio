import React, { useState, useRef } from "react"
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"
import emailjs from 'emailjs-com';
import CardHeader from "react-bootstrap/esm/CardHeader";
import "./Contact.css"

export default function Contact() {
    const [validated, setValidated] = useState(false);
    const [result, showResult] = useState(false);
    const formMail = useRef();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            /**Validate the Form By Bootstrap*/
            event.preventDefault();
            event.stopPropagation();
            console.log("NOT SUBMITED");
            setValidated(true);
        }
        else if (form.checkValidity() === true) {
            event.preventDefault();
            console.log("SUBMITED");
            event.stopPropagation();
            /**email.js Logic to sent and clear the form Inputs */
            emailjs.sendForm('service_ydad9nh', 'template_fdsm4wx', formMail.current, 'user_aac8LnAe81BPmMZcPRJBY')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            showResult(true)
            event.currentTarget.reset()
            setValidated(false);
            setTimeout(() => showResult(false), 20000);
        }

    };


    return (
        <Container id="Contact" style={{ marginTop: "9.375rem" }}>
            <div className="Contact">
                <Row>
                    <Col className="colImg" xs={4} lg={6}></Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader style={{ backgroundColor: "rgb(78 73 167)" }}>
                                <h2 className="h mb-3 text-white d-flex align-items-center justify-content-lg-center">Contact Us</h2>
                            </CardHeader>
                            <Card.Body>
                                <Form noValidate validated={validated} onSubmit={handleSubmit} ref={formMail}>

                                    <Form.Group as={Row} className="mb-3" controlId="validationCustom01">
                                        <Form.Label column sm={4}>Your Name</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Enter your Name"
                                                max="30"
                                                name="fullName"

                                            />
                                            <Form.Control.Feedback type="invalid">Please provide a Name.</Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="validationCustom03">
                                        <Form.Label column sm={4}>Your Email</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="email" name="email" placeholder="Enter your Email" required />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid Email Id.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="validationCustom04">
                                        <Form.Label column sm={4}>Phone Number</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type='Mobile Number' name="phone" placeholder="Enter your Phone Number" min="10" max="15" required />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid Phone Number.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="validationCustom05">
                                        <Form.Label column sm={4}>Message</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Leave a comment here"
                                                style={{ maxHeight: '100px' }}
                                                required
                                                name="message"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide any Message.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                    <Row className="justify-content-evenly">
                                        <Col className="d-flex justify-content-around">
                                            <Button type="submit" style={{ backgroundColor: "rgb(108 99 255)" }}>Submit</Button>
                                        </Col>
                                        <Row className="mt-3 text-center fs-6">
                                            <Col>
                                                {
                                                    result ? <p className="bg-success p-2 text-white">Your message has been Sucessfully sent.</p> : null
                                                }
                                            </Col>
                                        </Row>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
