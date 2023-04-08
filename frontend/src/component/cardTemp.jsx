import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import {Carousel, ButtonGroup, Card} from 'react-bootstrap'

function CardTemp() {
    const primary = '#FBF5F3'
    const secondary = '#D3D4D9'
    const ctr = '#FD5200'
    const ctr2 = '#AF3800'
    
    return (
       <Card style={{width:'100%'}}>
        <Carousel interval={null}>
            <Carousel.Item>
                <Card.Img variant='top' src={img1} />
            </Carousel.Item> 
            <Carousel.Item>
                <Card.Img variant='top' src={img2} />
            </Carousel.Item>
        </Carousel>
        <Card.Body>
            <Card.Title>TWO ROOMS SELF CONTAIN WITH SWIMMING POOL</Card.Title>
            <Card.Text>TAKORADI,ANAJI</Card.Text>
            <div style={{ position:'relative',width:'100%',display:'flex', justifyContent:'center'}}>
            <ButtonGroup style={{ width:'80%', backgroundColor:ctr}} arial-label='call to action' id='button'>
                <button style={{backgroundColor:ctr, color:'white'}} id='button' className='btn' variant='secondary'><i className='fa fa-phone'></i> Call</button>
                <button style={{backgroundColor:ctr, color:'white'}} id='button' className='btn' variant='secondary'><i className='fa fa-heart'></i> Save</button>
                <button style={{backgroundColor:ctr, color:'white'}} id='button' className='btn' variant='secondary'><i className='fa fa-share'></i> Share</button>
            </ButtonGroup>
            </div>
        </Card.Body>
       </Card>
    );
}

export default CardTemp;