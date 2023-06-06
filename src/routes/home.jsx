import React from "react";
import { useOutletContext } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home({}){
    const [images] = useOutletContext();
    console.log(images)
    return(        
            <Container className="my-5 d-flex justify-content-center border h-75 ">
                <Row className="text-center ">
                    <Col className="d-flex justify-content-center align-items-center p-5 ">
                        <div className="justify-content-center">
                            <p>123 east poo poo pee pee street</p>
                            <br></br>
                            <p>1poopee45</p>
                            <br></br>
                            <p>pee pee poo poo village, NY</p>
                        </div>
                    </Col>
                    {/* <Col md={6} className="d-flex align-items-center">
                        <img src={images[1].link} style={{width:"100%"}}/>
                    </Col> */}
                </Row>

    
            </Container>       
        
    )
}