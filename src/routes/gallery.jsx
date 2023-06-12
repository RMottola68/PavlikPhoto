import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData, useOutletContext, Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';

export async function loader(){
    const services = await fetch(`https://pavlikphotoanddesign.com/wp-json/wp/v2/media?search="thumbnail"`)

    return services.json();
}

export default function Gallery({}){
    const thumbImages = useLoaderData();

    // const [thumbImages, setThumbImages] = useState([]);
    // useEffect(()=>{
    //     fetch(`https://pavlikphotoanddesign.com/wp-json/wp/v2/media?search="thumbnail"`)
    //       .then(res=>res.json())
    //       .then(data => setThumbImages(data))
    // },[])
    // console.log(thumbImages[0].caption.rendered)
    return(        
            <Container className="my-5 d-flex justify-content-center border ">
                <Row className="text-center">
                    

                        
                        
                        {thumbImages.map((thumbImage) =>{
                            let thumbLink = thumbImage.caption.rendered.split(" ")[0].slice(3)
                            console.log(thumbLink)
                            return(
                                <Col xs={12} md={6} xl={4} className="my-2 d-flex justify-content-center" key={thumbImage.id} >
                                    <Link to={`/services/${thumbLink}`} style={{objectFit: 'cover'}} ><Image src={thumbImage.guid.rendered} game={thumbImage} key={thumbImage.id} style={{width:"auto", height:"400px", objectFit: 'cover', borderRadius: "10px"}} />     </Link>             
                                </Col>
                            )
                        })}
                    
                </Row>

    
            </Container>       
        
    )
}