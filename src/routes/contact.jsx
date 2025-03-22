import React, {useRef} from "react";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal';
import { Telephone, Envelope } from "react-bootstrap-icons";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';

export default function Contact(){
    const form = useRef();
    const [showAlert, setShowAlert] = useState(false);
    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(`${import.meta.env.VITE_SERVICE}`, `${import.meta.env.VITE_TEMPLATE}`, form.current, `${import.meta.env.VITE_PUBLIC}`)
        .then((result) => {
            e.target.reset();
            setShowAlert(true)
        }, (error) => {
            console.log(error.text);
        });
    };

    const [showFormModal, setShowFormModal] = useState(undefined)
    const handleCloseFormModal = (id) => setShowFormModal(undefined);
    const handleShowFormModal = (id) => setShowFormModal(id);

    return(      
            <Container className="my-5 justify-content-center">
                <Row className="text-center m-3">
                    <Col>
                        <h1 className="fw-bold">Book Now</h1>
                        <Telephone color="black" size={35} className="mx-1" />Phone: 607-761-3025
                        <br />
                        <Envelope color="black" size={35} className="mx-1" />Email: Andrew@pavlikphotoanddesign.com
                    </Col>
                    <Col xs={12}>                
                        <Button variant="primary" onClick={handleShowFormModal} size="lg">
                            Contact Us!
                        </Button>

                        <Modal show={showFormModal} onHide={handleCloseFormModal} centered>
                            <Modal.Header closeButton className="bg-white">
                            <Modal.Title>Contact Us</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="bg-white text-center" >
                            { showAlert ? 
                                
                                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible className="text-center">
                                    <Alert.Heading>Thank You!</Alert.Heading>
                                    <p>
                                    Your contact information and request have been submitted to the Pavlik Photo & Design team!
                                    They'll get back to you as soon as possible!
                                    </p>
                                </Alert>
                                
                            : <div></div>
                            }
                            <form ref={form} onSubmit={sendEmail} >
                                <label className="m-2">Your Name</label>
                                <br></br>
                                <input type="text" name="from_name" required/>
                                <br></br>
                                <label className="m-2">Your Email</label>
                                <br></br>
                                <input type="email" name="user_email" required/>
                                <br></br>
                                <label className="m-2">Tell us how we can help!</label>
                                <br></br>
                                <textarea name="message" style={{width:"350px", height: "250px"}} required/>
                                <br></br>
                                <Button type="submit" value="Send" >Submit</Button>
                            </form>
                                {/* <Form className="bg-white">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                                </Form> */}
                            </Modal.Body>
                            <Modal.Footer className="bg-white" >

                            </Modal.Footer>
                        </Modal>
                    </Col>
                    <Col>
                        <div id={"map-container-google-1"} className={"d-flex z-depth-1-half map-container justify-content-center py-5"} >
                            <iframe title="PAVMAP" width="1000" height="600" loading="lazy" 
                            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d11844.620446084082!2d-75.8380008273657!3d42.0827260495999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89dae5c16a45f623%3A0x922c6589def4b674!2spavlik%20photo%20and%20design%20store!3m2!1d42.0840732!2d-75.8294809!5e0!3m2!1sen!2sus!4v1686163042082!5m2!1sen!2sus"></iframe>


                        </div>
                    </Col>
                </Row>
            </ Container>
    )
}<iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>