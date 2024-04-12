import React, {useRef} from "react";
import { useEffect, useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';

export default function Home({}){  
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

    const [homeImages, setHomeImages] = useState([]);
    useEffect(()=>{
        fetch(`https://pavlikphotoanddesign.com/wp-json/wp/v2/media?search="Home"`)
          .then(res=>res.json())
          .then(data => setHomeImages(data))
      },[])
    return(        
            <Container className="my-5 justify-content-center"  >
                <Row className="d-flex justify-content-center align-items-center "><h1 className="text-center fw-bold">Welcome to Pavlik Photo and Design!</h1></Row>
                <Row className="text-center ">
                    <Col className="justify-content-center ">
                        <Carousel className="d-block" slide={true} touch={true} style={{}}>
                            {homeImages.map((homeImage) =>{
                                // console.log(homeImage)
                               let url = homeImage.caption.rendered.split(" ")[0].slice(3)
                                return(

                                    <Carousel.Item className="text-align-center bg-black" style={{}} key={homeImage.id}>
                                        <Link to={`/services/${url}`} >
                                            <Image
                                                
                                                style={{margin: "auto", maxHeight: "600px", width: "100%", marginRigt: -1, borderRadius:"10px", objectFit: "contain"}}
                                                className="d-block "
                                                src={homeImage.guid.rendered}
                                                alt="Carousel slide"
                                            />
                                        </Link>
                                    </Carousel.Item>
                                )
                            })}
                            {/* <Carousel.Item className="text-align-center"  >
                                <img
                                style={{margin: "auto"}}
                                className="d-block h-75 w-75"
                                src={images[1].guid.rendered}
                                alt="First slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item  className="text-align-center">
                                <img
                                style={{margin: "auto"}}
                                className="d-block h-75 w-75"
                                src={images[3].guid.rendered}
                                alt="Second slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item className="text-align-center">
                                <img
                                style={{margin: "auto"}}
                                className="d-block h-75 w-75"
                                src={images[2].guid.rendered}
                                alt="Third slide"
                                />
                            </Carousel.Item> */}

                        </Carousel>
                    </Col>
                    <Col xs={12} className="mt-2">                
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
                    
                </Row>

    
            </Container>       
        
    )
}