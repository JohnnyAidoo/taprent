import { Card, Col , Carousel, Row, ButtonGroup, Button, Container} from "react-bootstrap";
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import map from '../images/map.jpg'


function MoreDetail() {


    const primary = '#FBF5F3'
    const secondary = '#D3D4D9'
    const ctr = '#FD5200'
    const ctr2 = '#AF3800'

    return (
        <>
        <div id="home" style={{position:'absolute', right:0,paddingRight:'2%',paddingLeft:'4%'}}>
        <div style={{paddingBottom:'2%'}}>
            
        <Row xs={1} md={2} >
         <Col>
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
        </Col>
            
        <Col>
                <Container fluid style={{height:'100%', backgroundColor: 'white', display:'flex', justifyContent:'space-around', flexDirection: 'column'}}>
                    <Card.Title>
                    TWO ROOMS SELF CONTAIN WITH SWIMMING POOL
                    </Card.Title>
                    <Card.Body>
                        <Card.Text>
                            <b>GHS 500</b>/ month
                        </Card.Text>
                        <Card.Text >
                        TAKORADI,ANAJI
                         </Card.Text>
                         <div style={{ position:'relative',width:'100%',display:'flex', justifyContent:'center'}}>
            <ButtonGroup style={{ width:'80%', backgroundColor:ctr}} arial-label='call to action' size='sm'>
                <Button href='#' style={{backgroundColor:ctr, color:'white'}}  variant='primary'><i className='fa fa-phone'></i> Call</Button>
                <Button href='#' style={{backgroundColor:ctr, color:'white'}}  variant='primary'><i className='fa fa-heart'></i> Save</Button>
                <Button href='#' style={{backgroundColor:ctr, color:'white'}}  variant='primary'><i className='fa fa-share'></i> Share</Button>
            </ButtonGroup>
            </div>
                    </Card.Body> 
                </Container>
            </Col>
            </Row>
        </div>

        <Container>
        <h3>More Info</h3>
        <p style={{color:'grey', fontWeight:'bold'}}>Location</p>

        <Card>
            <Card.Img  src={map} />
        </Card>
        </Container>

        </div>
        </>
    );
}

export default MoreDetail;


//Property Location
//Takoradi , Market Circle