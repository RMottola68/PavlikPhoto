import React from "react";
import { useOutletContext } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Services({}){

    return(        
            <Container className="my-5 d-flex justify-content-center border h-75">
                <Row className="text-center ">
                    <Col md={6} className="d-flex justify-content-center align-items-center p-5 ">
                        <div className="">
                            <p>pp $100</p>
                            <br></br>
                            <p>fard $99</p>
                            <br></br>
                            <p>pupu $101</p>
                        </div>
                    </Col>
                    <Col md={6} className="d-flex align-items-center">
                        {/* <img src={images[1].link} style={{width:"100%"}}/> */}
                    </Col>
                </Row>

    
            </Container>       
        
    )
}