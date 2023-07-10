
import {Carousel, ButtonGroup, Card, Button} from 'react-bootstrap'
import axios from 'axios'
import Url from './url'
import { useEffect, useState } from 'react'

function CardTemp(props) {
    const primary = '#FBF5F3'
    const secondary = '#D3D4D9'
    const ctr = '#FD5200'
    const ctr2 = '#AF3800'
    let photoarray = props.photos

    const [userid, setUserId] = useState('')

    useEffect(()=>{
        setUserId(localStorage.getItem('userid'))
    })
    

    const handleSaveItem = (e) =>{
        axios.post(`${Url}saved`,{
            uid: userid,
            itemId: props.id
        }).then((res) => {
            console.log(res)
        })
    }

    
    return (
        <>
        
            <Card style={{width:'100%' ,borderRadius: '5%'}}>
            <a href={`details/${props.id}`}>
                <Carousel interval={null}>
                    {photoarray.map((photo) =>(
                        <Carousel.Item key={photo}>
                            <Card.Img variant='top' src={photo} 
                            key={photo} style={{borderRadius: '5%', aspectRatio:16/10, }}/>
                        </Carousel.Item>
                    ))}    
                </Carousel>
            </a>
                <Card.Body>
                <a href={`details/${props.id}`}>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text><i className='fa fa-location' 
                        style={{padding:'2%',color:ctr, fontSize:15}}></i>{props.location}</Card.Text>
                </a>
                    <div style={{ position:'relative',width:'100%',display:'flex', justifyContent:'center'}}>
                        <ButtonGroup style={{ width:'90%', backgroundColor:ctr}} arial-label='call to action' size='sm'>
                            <Button href={`tel:${props.tel}`} style={{backgroundColor:ctr, color:'white', width:'100%'}}  variant='primary'><i className='fa fa-phone'></i> Call</Button>
                            <Button onClick={handleSaveItem} style={{backgroundColor:ctr, color:'white', width:'100%'}}  variant='primary'><i className='fa fa-heart'></i> Save</Button>
                            <Button href={`details/${props.id}`}  style={{backgroundColor:ctr, color:'white', width:'100%'}}  variant='primary'><i className='fa fa-share'></i> Share</Button>
                        </ButtonGroup>
                    </div>
                </Card.Body>
            </Card>
        
        </>
    );
}

export default CardTemp;