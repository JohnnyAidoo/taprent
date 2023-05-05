import { Card, Col , Carousel, Row, ButtonGroup, Button, Container} from "react-bootstrap";

import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import map from '../images/map.jpg'
import CardTemp from "../component/cardTemp";


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
            <Container fluid style={{ marginBottom: '5%', height:'100%', backgroundColor: 'white', display:'flex', justifyContent:'space-around', flexDirection: 'column'}}>
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
                        <br />
                    <Card style={{backgroundColor:'white'}}>
                        <Container id='grid'>
                        <li>Water</li>
                        <li>Pool</li>
                        <li>2 Bedroom</li>
                        <li>Shower</li>
                        <li>Gated</li>
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

            <Card >
                <Card.Img  src={map} />
            </Card>
            <br />
            <h3><i class="fas fa-directions"></i>Anaji,Takoradi</h3>
        </Container>
        <br />
        <hr />
        <p style={{color:'grey', fontWeight:'bold'}}>Description</p>

        <Container>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti cum impedit veritatis, ut iusto ex vel, reprehenderit repellendus sapiente repellat velit expedita reiciendis aut! Dolor facere deleniti distinctio labore!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint accusamus voluptas, eligendi excepturi voluptatem animi quod voluptatibus cumque quo, nam ad assumenda odit illo quidem saepe! Soluta corporis nemo neque!.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti cum impedit veritatis, ut iusto ex vel, reprehenderit repellendus sapiente repellat velit expedita reiciendis aut! Dolor facere deleniti distinctio labore!
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
        <div id="grid">
              <CardTemp/>
              <CardTemp/>
              <CardTemp/>
              <CardTemp/>
              <CardTemp/>
              <CardTemp/>
              <CardTemp/>
              <CardTemp/>
              <CardTemp/>
            </div>
        </div>
        </>
    );
}

export default MoreDetail;


//Property Location
//Takoradi , Market Circle