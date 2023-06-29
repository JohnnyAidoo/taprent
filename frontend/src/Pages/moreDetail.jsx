import { Card, Col , Carousel, Row, ButtonGroup, Button, Container} from "react-bootstrap";

import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import map from '../images/map.jpg'
import CardTemp from "../component/cardTemp";
import Sidebar from "../component/sidebar";
import { useEffect, useState } from "react";
import { useParams ,} from "react-router-dom";
import axios from "axios";
import Url from "../component/url";


function MoreDetail() {

    // const [title , setTitle] = useState()
    // const [price , setPrice] = useState()
    // const [location , setLocation] = useState()
    // const [photos , setPhotos] = useState([])

    const [post_item, setPost_item] = useState({
        title : '',
        description : '',
        price : '',
        location : '',
        photos : [],
        features : [],
    }) 

    const params = useParams()
    const postid = params.postid


    const primary = '#FBF5F3'
    const secondary = '#D3D4D9'
    const ctr = '#FD5200'
    const ctr2 = '#AF3800'

    useEffect(() =>{
        axios.get(`${Url}posts/${postid}`).then((res) => {
            console.log(res)
            setPost_item({
                title : res.data.title,
                description : res.data.description,
                price : res.data.price,
                location : res.data.location,
                photos : res.data.photos,
                features : res.data.features
            })
            
        })
    },[])



    return (
        <>
        <Sidebar />
        <div id="home" style={{position:'absolute', right:0,paddingRight:'2%',paddingLeft:'4%'}}>
        <div style={{paddingBottom:'2%'}}>
            
        <Row xs={1} md={2} >
         <Col>
            <Carousel interval={null}>
                {/* <Carousel.Item>
                    <Card.Img variant='top' src={img1}  style={{borderRadius: '5%'}}/>
                </Carousel.Item> 
                <Carousel.Item>
                    <Card.Img variant='top' src={img2}  style={{borderRadius: '5%'}}/>
                </Carousel.Item>
                <Carousel.Item>
                    <Card.Img variant='top' src={img2}  style={{borderRadius: '5%'}} />
                </Carousel.Item> */}
                

                {/* Image Carousel */}
                {post_item.photos.map((photo) => (
                    <Carousel.Item>
                        <Card.Img variant="top" src={photo} style={{borderRadius: '5%', aspectRatio:16/10}} />
                    </Carousel.Item>
                ))}

            </Carousel>
        </Col>
            
        <Col>
            <Container fluid style={{ marginBottom: '5%', height:'100%', backgroundColor: 'white', display:'flex', justifyContent:'space-around', flexDirection: 'column'}}>
                    <Card.Title>

                        {/* title */}
                    {post_item.title} 
                    </Card.Title>
                    <Card.Body>
                        <Card.Text>

                            {/* price */}
                            <b>{post_item.price}</b>/ month
                        </Card.Text>
                        <Card.Text >

                            {/* location */}
                        {post_item.location}
                         </Card.Text>
                         <div style={{ position:'relative',width:'100%',display:'flex', justifyContent:'center'}}>
                            <ButtonGroup style={{ width:'80%', backgroundColor:ctr}} arial-label='call to action' size='sm'>
                                <Button href='#' style={{backgroundColor:ctr, color:'white'}}  variant='primary'><i className='fa fa-phone'></i> Call</Button>
                                <Button href='#' style={{backgroundColor:ctr, color:'white'}}  variant='primary'><i className='fa fa-heart'></i> Save</Button>
                                <Button href='#' style={{backgroundColor:ctr, color:'white'}}  variant='primary'><i className='fa fa-share'></i> Share</Button>
                            </ButtonGroup>
                        </div>
                        <br />
                        {/* features */}
                    <Card style={{backgroundColor:'white'}}>
                        <Container id='grid'>
                        {post_item.features.map((feature) =>(
                            <li>{feature}</li>
                        ))}
                        </Container>
                    </Card>
                    </Card.Body> 
            </Container>

            </Col>
            </Row>
        </div>

        <Container>
            <h3>More Info</h3>
            <p style={{color:'grey', fontWeight:'bold'}}>Location</p>

            {/* <Card >
                <Card.Img  src={map} />
            </Card> */}

            <h3><i style={{padding:'2%', color:ctr}} className="fas fa-directions"></i>{post_item.location}</h3>
        </Container>
        <hr />
        <p style={{color:'grey', fontWeight:'bold'}}>Description</p>

        <Container>
           <p>
            {post_item.description}
           </p>
        </Container>
        <hr />
        <p style={{color:'grey', fontWeight:'bold'}}>Agent Information</p>
        <Container fluid >
            <Row style={{textAlign:'center'}}>
                <Col><img style={{borderRadius:'50%'}} src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" /></Col>
                <Col >
                <b>Agent Something</b>
                <br />
                <b>Location</b>
                <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minima porro, debitis optio repellendus quo possimus maiores quas quasi pariatur obcaecati est quia voluptatum odit ea earum magnam illum quod.</Col>
                </Col>
            </Row>
        </Container>
        <hr />

        <p style={{color:'grey', fontWeight:'bold'}}>Related Listing</p>
        
        </div>
        </>
    );
}

export default MoreDetail;


//Property Location
//Takoradi , Market Circle