import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Telephone, Envelope } from "react-bootstrap-icons";
40.7554936, -73.641846
export default function Contact(){
    return(      
            <Container className="my-5 justify-content-center">
                <Row className="text-center m-3">
                    <Col>
                        <Telephone color="black" size={35} className="mx-1" />Phone: 607-779-2220
                        <br />
                        <Envelope color="black" size={35} className="mx-1" />Email: Andrew@pavlikphotoanddesign.com
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