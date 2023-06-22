import React from "react";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';

export default function Home({}){  


    const [homeImages, setHomeImages] = useState([]);
    useEffect(()=>{
        fetch(`https://pavlikphotoanddesign.com/wp-json/wp/v2/media?search="Home"`)
          .then(res=>res.json())
          .then(data => setHomeImages(data))
      },[])
    return(        
            <Container className="my-5 d-flex justify-content-center border"  >
                <Row className="text-center ">
                    <Col className="d-flex justify-content-center align-items-center p-5 ">
                        <Carousel variant="dark">
                            {homeImages.map((homeImage) =>{
                                console.log(homeImage)
                                return(

                                    <Carousel.Item className="text-align-center"  >
                                        <Image
                                        key={homeImage.id}
                                        style={{margin: "auto", maxHeight: "500px"}}
                                        className="d-block"
                                        src={homeImage.guid.rendered}
                                        alt="Carousel slide"
                                        image={homeImage}
                                        />
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
                </Row>

    
            </Container>       
        
    )
}