import { useEffect, useState } from "react";
import { Outlet, Link, useLoaderData } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

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

    const [expanded, setExpanded] = useState(false);
    
    return(
        <div className="vh-100 " style={{backgroundImage: `url(${background.guid.rendered})`, height: "100vh", width: "100vw", backgroundAttachment: "fixed"}}>
            <Container className="bg-light vh-100 overflow-auto ">
                <Row >
                {['lg'].map((expand) => (
                    
                    <Navbar fixed="top" key={expand} expand={expand} className="inline-flex bg-secondary mb-3" >
                    <Container fluid >
                        <Navbar.Brand  href="#" xs={12} lg={3}>
                            <Col className="d-flex text-xl-start px-3 align-items-center">
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
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="text-center bg-light" />
                        <Navbar.Offcanvas
                            className="bg-secondary "
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="alight-items-center text-decoration-none fs-5 " style={strokeStyle}>
                            Navigation
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="">
                            <Nav className="w-100 d-flex align-items-center justify-content-end">
                                
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
                                        <Link to={`shop`} className="text-decoration-none fs-5" style={strokeStyle}>Print</Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-item m-3 ">
                                        <a href={"https://www.pavlikphotostore.com"} target="_blank" className="text-white text-decoration-none fs-5" style={strokeStyle}>Event-Store</a>
                                    </Nav.Item>
                                    <Nav.Item className="p-2 align-items-center">
                                        <a href="https://www.facebook.com/pavlikphotography/" target="_blank"><Facebook color="white" size={35} className="mx-1" ></Facebook></a>
                                        {/* <Instagram color="black" size={35} className="mx-1" />
                                        <Yelp color="red" size={35} className="mx-1" /> */}
                                    </Nav.Item>
                                

                            </Nav>


                        </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                    </Navbar>
                ))}
                </Row>
            
                <div style={{paddingTop:"120px"}}> 
                    <Outlet />
                </div>  
            </Container>
        </ div>

        // This was an overcomplicated attempt to create a new navbar. The bulk of this code was essentially moved into the original code.
        // <div style={{backgroundImage: `url(${background.guid.rendered})`, height: "100vh", width: "100vw", backgroundAttachment: "fixed"}} >
        //     <Container className="bg-white">
        //         {['lg'].map((expand) => (
                    
        //             <Navbar key={expand} expand={expand} className="bg-secondary mb-3" >
        //             <Container fluid >
        //                 <Navbar.Brand  href="#" xs={12} lg={3}>
        //                     <Col className="d-flex text-xl-start px-3 align-items-center">
        //                         <Link to={`/home`} className="">
        //                             <Image
        //                                 key={logo.id}
        //                                 style={{height: "60%", width: "auto"}}
        //                                 className=""
        //                                 src={logo.guid.rendered}
        //                                 alt="Pavlik Logo"
        //                             />
        //                         </Link>
        //                     </Col>
        //                 </Navbar.Brand>
        //                 <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="text-center bg-light" />
        //                 <Navbar.Offcanvas
        //                     className="bg-secondary "
        //                     id={`offcanvasNavbar-expand-${expand}`}
        //                     aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        //                     placement="end"
        //                 >
        //                 <Offcanvas.Header closeButton>
        //                     <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="alight-items-center text-decoration-none fs-5 " style={strokeStyle}>
        //                     Navigation
        //                     </Offcanvas.Title>
        //                 </Offcanvas.Header>
        //                 <Offcanvas.Body className="">
        //                     <Nav className="w-100 d-flex align-items-center justify-content-end">
                                
        //                             <Nav.Item className="nav-item m-1 ">
        //                                 <Link to={`home`} className="text-decoration-none fs-5" style={strokeStyle}>Home</Link>
        //                             </Nav.Item>
        //                             <Nav.Item className="nav-item m-1 ">
        //                                 <Link to={`services`} className="text-decoration-none fs-5" style={strokeStyle}>Services</Link>
        //                             </Nav.Item>
        //                             <Nav.Item className="nav-item m-1 ">
        //                                 <Link to={`contact`} className="text-decoration-none fs-5" style={strokeStyle}>Contact</Link>
        //                             </Nav.Item>
        //                             <Nav.Item className="nav-item m-1 ">
        //                                 <Link to={`shop`} className="text-decoration-none fs-5" style={strokeStyle}>Print</Link>
        //                             </Nav.Item>
        //                             <Nav.Item className="nav-item m-1 ">
        //                                 <a href={"https://www.pavlikphotostore.com"} target="_blank" className="text-white text-decoration-none fs-5" style={strokeStyle}>Event-Store</a>
        //                             </Nav.Item>
        //                             <Nav.Item className="p-2 align-items-center">
        //                                 <a href="https://www.facebook.com/pavlikphotography/" target="_blank"><Facebook color="white" size={35} className="mx-1" ></Facebook></a>
        //                                 {/* <Instagram color="black" size={35} className="mx-1" />
        //                                 <Yelp color="red" size={35} className="mx-1" /> */}
        //                             </Nav.Item>
                                

        //                     </Nav>


        //                 </Offcanvas.Body>
        //                 </Navbar.Offcanvas>
        //             </Container>
        //             </Navbar>
        //         ))}
        //     <Container className="vh-100 overflow-auto">
        //         <Outlet />

        //     </Container>
           
        //     </Container>   
        // </ div>
        
    )
}