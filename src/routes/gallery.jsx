import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData, useOutletContext, Link, Outlet, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import Service from './Service';

export async function loader(){
    const services = await fetch(`https://pavlikphotoanddesign.com/wp-json/wp/v2/media?search="thumbnail"`)

    return services.json();
}

export default function Gallery({}){
    const services = useLoaderData();

    // const [services, setservices] = useState([]);
    // useEffect(()=>{
    //     fetch(`https://pavlikphotoanddesign.com/wp-json/wp/v2/media?search="thumbnail"`)
    //       .then(res=>res.json())
    //       .then(data => setservices(data))
    // },[])
    // console.log(services[0].caption.rendered)
    return(        
            <Container className="my-5 d-flex justify-content-center ">
                <Row className="text-center">
                        
                        
                        {services.map((service) =>{
                            let thumbLink = service.caption.rendered.split(" ")[0].slice(3)
                            // console.log(service)
                            return(
                                <Col xs={12} md={6} xl={4} className="my-2 d-flex justify-content-center" key={service.id} >
                                    <Link to={`/services/${thumbLink}`} ><Image src={service.guid.rendered} key={service.id} style={{width:"auto", height:"400px", objectFit: 'cover', borderRadius: "10px"}} />     </Link>             
                                </Col>
                            )
                        })}
                    
                </Row>

    
            </Container>       
        
    )
}