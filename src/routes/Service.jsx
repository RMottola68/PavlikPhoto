import React from "react";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import { useLoaderData, useParams, Link, Outlet, useRouteLoaderData } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { XCircleFill } from "react-bootstrap-icons";


export default function Service() {


  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [showImageModal, setShowImageModal] = useState(undefined);
  const handleCloseImageModal = (id) => setShowImageModal(undefined);
  const handleShowImageModal = (id) => setShowImageModal(id);

  const { service } = useParams()
  console.log(service)

  const [serviceImages, setServiceImages] = useState([]);

    useEffect(()=>{
        fetch(`https://pavlikphotoanddesign.com/wp-json/wp/v2/media?search="${service}"`)
          .then(res=>res.json())
          .then(data => setServiceImages(data))
    },[])

  // console.log(serviceImages)

  return (
    <Container className="my-5 d-flex justify-content-center border ">
      <Row className="text-center">
        {serviceImages.map((image) =>{
          if(!image.caption.rendered.includes('thumbnail')){ 
          // let thumbLink = image.caption.rendered
          // console.log(image.caption.rendered.includes('thumbnail'))
          return(
              <Col xs={12} md={6} xl={4} className="my-2 d-flex justify-content-center" key={image.id} >
                <Image src={image.guid.rendered} key={image.id} style={{width:"75%", height:"auto", objectFit: 'cover', borderRadius: "10px"}} onClick={() => handleShowImageModal(image.id)}/>
                <Modal show={showImageModal === image.id} onHide={handleCloseImageModal} className="d-flex " centered>
                    <XCircleFill color="white" size={35} className="m-1 position-absolute" onClick={() => handleCloseImageModal()} />
                    <Image src={image.guid.rendered} key={image.id} style={{width:"100%", height:"auto"}} />

                </Modal>
                      
              </Col>
          )}
        })}
        
      </Row>

    
    </Container>   
    
  );
}

// export async function loader(){
//   const currentService = await fetch(`https://pavlikphotoanddesign.com/wp-json/wp/v2/media?search="sports"`)

//   return currentService.json();
// }