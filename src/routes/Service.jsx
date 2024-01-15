import React, {useRef} from "react";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import { useLoaderData, useParams, Link, Outlet, useRouteLoaderData } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';

import { XCircleFill } from "react-bootstrap-icons";


export default function Service() {

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
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [showImageModal, setShowImageModal] = useState(undefined);
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);

  const handleCloseImageModal = (id, breakpoint) => setShowImageModal(undefined);
  const handleShowImageModal = (id) => {
    setShowImageModal(id);
    setFullscreen(breakpoint);
  }
  const [showFormModal, setShowFormModal] = useState(undefined)
  const handleCloseFormModal = (id) => setShowFormModal(undefined);
  const handleShowFormModal = (id) => setShowFormModal(id);

  const { service } = useParams()
  // console.log(service)

  const [serviceImages, setServiceImages] = useState([]);
  const [serviceWords, setServiceWords] = useState([]);
  const [pageDescription, setPageDescription] = useState();

    useEffect(()=>{
        fetch(`https://pavlikphotoanddesign.com/wp-json/wp/v2/media?search="${service}"&per_page=20`)
          .then(res=>res.json())
          .then(data => setServiceImages(data))
    },[])


    useEffect(()=>{
      const options = {
        method: "GET",
        headers: {'content-type': 'application/json; charset=utf-8'}
    };
      fetch(`https://pavlikphotoanddesign.com/wp-json/wp/v2/pages?slug="${service}"`, options)
        .then(res=>res.json())
        .then(data => setServiceWords(data))
    },[])

  // console.log(serviceWords)
  // console.log(service)

  // if(serviceWords.length > 0){
  //   setPageDescription(<Col xs={12}><h3 dangerouslySetInnerHTML={{__html: serviceWords[0].content.rendered}}></h3></Col>)
  //   } else {
  //   setPageDescription(<Col xs={12}><h3>Loading...</h3></Col>)
  // }

  return (
    <Container className="my-5 d-flex justify-content-center border">
      <Row className="text-center">
        <Col xs={12}><h1 className="fw-bold">{service}</h1></Col>

        {/* dangerouslySetInnerHTML will translate the strange characters from the json payload to proper utf-8 charset */}
        {serviceWords.length > 0 ? 
          <Col xs={12}>
                <h4 dangerouslySetInnerHTML={{__html: serviceWords[0].content.rendered}}></h4>
          </ Col> 
          : 
          <div>...Loading</div>
        }
        {serviceImages.map((image) =>{
          if(!image.caption.rendered.includes('thumbnail')){ 
          // let thumbLink = image.caption.rendered
          // console.log(image.caption.rendered.includes('thumbnail'))
          return(
              
              <Col xs={12} md={6} xl={4} className="my-2 d-flex justify-content-center" key={image.id} >
                <Image src={image.guid.rendered} key={image.id} className="" style={{width:"100%", height:"auto", objectFit: 'cover', borderRadius: "10px", }} onClick={() => handleShowImageModal(image.id)}/>
                <Modal show={showImageModal === image.id} fullscreen={fullscreen} onHide={handleCloseImageModal} className=""  centered >
                                      
                  <XCircleFill color="white" size={35} className="m-1 position-absolute" onClick={() => handleCloseImageModal()} />
                  <Image src={image.guid.rendered} key={image.id} className="" onClick={() => handleCloseImageModal()} style={{ maxHeight: "850px", width: "100%", marginTop:"50px", objectFit:"contain"}} />
                  
                </Modal>


                      
              </Col>
              
          )}
        })}
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
                <Button type="submit" value="Send" size="lg">Submit</Button>
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
    
  );
}