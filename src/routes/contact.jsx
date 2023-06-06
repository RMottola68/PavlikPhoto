import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Telephone, Envelope } from "react-bootstrap-icons";

export default function Contact(){
    return(      
            <Container className="my-5 justify-content-center">
                <Row className="text-center m-3">
                    <Col><Telephone color="black" size={35} className="mx-1" />Phone: 607-779-2220</Col>
                </Row>
                <Row className="text-center m-3">
                    <Col><Envelope color="black" size={35} className="mx-1" />Email: Andrew@pavlikphotoanddesign.com</Col>
                </Row>
            </ Container>
    )
}