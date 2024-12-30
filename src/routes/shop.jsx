import React, {useRef} from "react";
import { useEffect, useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function Shop({}){  
    const [shopImages, setShopImages] = useState([]);
    useEffect(()=>{
        fetch(`https://pavlikphotoanddesign.com/wp-json/wp/v2/media?search="Shop"`)
          .then(res=>res.json())
          .then(data => setShopImages(data))
      },[])
    return(        
        <Container className="my-5 justify-content-center w-100 h-100" >
            {/* <Container className="my-5 d-flex justify-content-center ">
                <Row className="text-center">
                        
                        <Col xs={12}><h1 className="fw-bold ">Print Shop</h1></Col>
                        {shopImages.map((shopImage) =>{
                            let thumbLink = shopImage.caption.rendered.split(" ")[1].split("<")[0]
                            // console.log(service)
                            return(
                                <Col sm={12} lg={6} xxl={4} className="my-2 d-flex justify-content-center" key={shopImage.id} >
                                    <Link to={`/shop/${thumbLink}`} ><Image src={shopImage.guid.rendered} key={shopImage.id} style={{width:"auto", height:"400px", objectFit: 'cover', borderRadius: "10px"}} />     </Link>             
                                </Col>
                            )
                        })}
                    
                </Row>


            </Container>        */}
            <div xs={12} className="my-2 d-flex justify-content-center" style={{height: "100%"}}>
                <iframe className="my-2 d-flex vh-100" style={{margin: "auto", width: "100%"}} src={`https://pavlikphotoanddesign.com/shop/`} />
            </div>
            
        </Container>       
        
    )
}