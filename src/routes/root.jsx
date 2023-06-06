import { useEffect, useState } from "react";
import { Outlet, Link, useLoaderData, Form, redirect, NavLink, useNavigation } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Facebook, Instagram, Yelp  } from "react-bootstrap-icons";
import treesBG from "../assets/treesbg.jpg"


const sectionStyle = {
    backgroundImage: `url(${treesBG})`,
    height: "100vh",
    width: "100vw",
    backgroundAttachment: "fixed"
}

export default function Root() {

    // https://example.com/wp-json/wp/v2/media
    const [images, setImages] = useState([]);

    useEffect(()=>{
        fetch('https://pavlikphotoanddesign.com/wp-json/wp/v2/media?per_page=20')
          .then(res=>res.json())
          .then(data => setImages(data))
      },[])

    

    return(
        <div className="vh-100  overflow-auto" style={sectionStyle}>
            <Container className="bg-light vh-100  overflow-auto">
                <Row >
                    <Nav
                        className="d-flex justify-content-center p-3"
                        style={{backgroundColor: "lavenderblush"}}
                        activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                        <Col md={4} className="d-flex justify-content-">
                            <h2 className="px-5 pt-2 text-dark">Pavlik Photo & Design</h2>
                        </Col>
                        <Col md={4} className="d-flex justify-content-end">
                            <Nav.Item className="nav-item m-3 ">
                                <Link to={`home`} className="text-dark text-decoration-none font-weight-bold">Home</Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item m-3 ">
                                <Link to={`services`} className="text-dark text-decoration-none">Services</Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item m-3 ">
                                <Link to={`gallery`} className="text-dark text-decoration-none">Gallery</Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item m-3 ">
                                <Link to={`contact`} className="text-dark text-decoration-none">Contact</Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item m-3 ">
                                <a href={"https://www.pavlikphotostore.com"} target="_blank" className="text-dark text-decoration-none">Store</a>
                            </Nav.Item>
                        </Col >
                        <Col md={4} className="d-flex p-2 justify-content-end">
                            <Facebook color="blue" size={35} className="mx-1" />
                            {/* <Instagram color="black" size={35} className="mx-1" />
                            <Yelp color="red" size={35} className="mx-1" /> */}
                        </Col>
                        

                        
                    </ Nav>
                </Row>
            
                    
                <Outlet context={[images]}/>
            </Container>
        </ div>
        
    )
}