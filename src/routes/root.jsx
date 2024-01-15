import { useEffect, useState } from "react";
import { Outlet, Link, useLoaderData } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import { Facebook } from "react-bootstrap-icons";


// const sectionStyle = {
//     backgroundImage: `url(${treesBG})`,
//     height: "100vh",
//     width: "100vw",
//     backgroundAttachment: "fixed"
// }

const strokeStyle = {
    fill:"none",
    stroke:"purple",
    fontSize:"20",
    fontWeight:"bold",
    x:"100",
    y:"20",
    textAnchor:"middle"
}

export async function loader(){

    const root = await fetch(`https://pavlikphotoanddesign.com/wp-json/wp/v2/media?search="root"`)
  
                    


    return root.json();
}

export default function Root() {
    const logo = useLoaderData()[0];
    const background = useLoaderData()[1];

    // useEffect(()=>{
    // fetch(`https://pavlikphotoanddesign.com/wp-json/wp/v2/media?search=background`)
    //     .then(res=>res.json())
    //     .then(data => setBackground(data))        
    // },[])

    console.log(background.guid.rendered)
    const strokeStyle = {
        color: "white",
        textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
        fontWeight: "bold",
    }

    return(
        <div className="vh-100 " style={{backgroundImage: `url(${background.guid.rendered})`, height: "100vh", width: "100vw", backgroundAttachment: "fixed"}}>
            <Container className="bg-light vh-100 overflow-auto ">
                <Row >
                    <Nav
                        className="d-flex justify-content-center "
                        style={{backgroundColor: "dimgray"}}
                        activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                        <Col xs={12} xl={3} className="d-flex text-xl-start justify-content-center text-center align-items-center">
                            <Link to={`/home`} className="">
                                <Image
                                    key={logo.id}
                                    style={{height: "60%", width: "auto"}}
                                    className=""
                                    src={logo.guid.rendered}
                                    alt="Pavlik Logo"
                                />
                            </Link>
                        </Col>
                        <Col xs={12} xl={6} className="d-flex justify-content-xl-center justify-content-center align-items-center">
                            <Nav.Item className="nav-item m-3 ">
                                <Link to={`home`} className="text-decoration-none fs-5" style={strokeStyle}>Home</Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item m-3 ">
                                <Link to={`services`} className="text-decoration-none fs-5" style={strokeStyle}>Services</Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item m-3 ">
                                <Link to={`contact`} className="text-decoration-none fs-5" style={strokeStyle}>Contact</Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item m-3 ">
                                <Link to={`shop`} className="text-decoration-none fs-5" style={strokeStyle}>Shop</Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item m-3 ">
                                <a href={"https://www.pavlikphotostore.com"} target="_blank" className="text-white text-decoration-none fs-5" style={strokeStyle}>Store</a>
                            </Nav.Item>

                        </Col >
                        <Col xs={12} xl={3} className="d-flex p-2 justify-content-xl-end justify-content-center align-items-center">
                        <a href="https://www.facebook.com/pavlikphotography/" target="_blank"><Facebook color="white" size={35} className="mx-1" ></Facebook></a>
                            {/* <Instagram color="black" size={35} className="mx-1" />
                            <Yelp color="red" size={35} className="mx-1" /> */}
                        </Col>
                        

                        
                    </ Nav>
                </Row>
            
                    
                <Outlet />
            </Container>
        </ div>
        
    )
}