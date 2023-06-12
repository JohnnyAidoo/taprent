import { useState } from 'react'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import {Carousel, ButtonGroup, Card, Button} from 'react-bootstrap'
import MoreDetail from '../Pages/moreDetail'

function CardTemp(props) {
    const primary = '#FBF5F3'
    const secondary = '#D3D4D9'
    const ctr = '#FD5200'
    const ctr2 = '#AF3800'


    
    return (
        <a href='details'>
       <Card style={{width:'100%' ,borderRadius: '5%'}}>
        <Carousel interval={null}>
            <Carousel.Item>
                <Card.Img variant='top' src={img1}  style={{borderRadius: '5%'}}/>
            </Carousel.Item> 
            <Carousel.Item>
                <Card.Img variant='top' src={img2}  style={{borderRadius: '5%'}}/>
            </Carousel.Item>
            <Carousel.Item>
                <Card.Img variant='top' src={img2}  style={{borderRadius: '5%'}} />
            </Carousel.Item>
            
        </Carousel>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>TAKORADI,ANJI</Card.Text>
            <div style={{ position:'relative',width:'100%',display:'flex', justifyContent:'center'}}>
            <ButtonGroup style={{ width:'80%', backgroundColor:ctr}} arial-label='call to action' size='sm'>
                <Button href='#' style={{backgroundColor:ctr, color:'white'}}  variant='primary'><i className='fa fa-phone'></i> Call</Button>
                <Button href='#' style={{backgroundColor:ctr, color:'white'}}  variant='primary'><i className='fa fa-heart'></i> Save</Button>
                <Button href='#' style={{backgroundColor:ctr, color:'white'}}  variant='primary'><i className='fa fa-share'></i> Share</Button>
            </ButtonGroup>
            </div>
        </Card.Body>
       </Card>
       </a>
    );
}

export default CardTemp;