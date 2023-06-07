import React from "react";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';

export default function Gallery({}){


    const [thumbImages, setThumbImages] = useState([]);
    useEffect(()=>{
        fetch(`https://pavlikphotoanddesign.com/wp-json/wp/v2/media?search="thumbnail"`)
          .then(res=>res.json())
          .then(data => setThumbImages(data))
    },[])
    //   console.log(thumbImages)
    return(        
            <Container className="my-5 d-flex justify-content-center border ">
                <Row className="text-center">
                <Row className="my-2 border-light border border-5 text-center justify-content-center bg-dark" style={{borderRadius: "30px"}}>

                        </Row>
                        
                        {/* {thumbImages.map((thumbImage) =>{
                            return(
                                <Col xs={12} md={6} lg={4} className="my-2 d-flex justify-content-center" key={image.id} fluid >
                                    <Image src={thumbImage.guid.rendered} game={thumbImage} key={thumbImage.id} style={{width:"330px", height:"auto", objectFit: 'cover', borderRadius: "10px"}} />                  
                                </Col>
                            )
                        })} */}
                        
                    {/* <Col md={6} className="d-flex align-items-center">
                        <img src={images[1].guid.rendered} style={{width:"100%"}}/>
                    </Col> */}
                </Row>

    
            </Container>       
        
    )
}