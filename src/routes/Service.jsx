import React from "react";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import { useLoaderData, useParams, Link, Outlet, useRouteLoaderData } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

import { XCircleFill } from "react-bootstrap-icons";


export default function Service() {


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
    <Container className="my-5 d-flex justify-content-center border ">
      <Row className="text-center">
        <Col xs={12}><h1>{service}</h1></Col>

        {/* dangerouslySetInnerHTML will turn translate the strange characters from the json payload to proper utf-8 charset */}
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
        
      </Row>

    
    </Container>   
    
  );
}