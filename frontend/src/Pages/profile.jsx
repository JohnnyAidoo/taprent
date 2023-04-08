import noImg from '../images/noImg.jpg'
import {Card, ListGroup} from 'react-bootstrap'


function Profile() {
    return (
        <>
        <div id='home' style={{position:'absolute', right:0,paddingRight:'2%',paddingLeft:'4%'}}>
            <Card>
                <div className='d-flex px-5 justify-content-center align-items-center'>
                <Card.Img style={{width: '15vw'}} src={noImg} alt={noImg} />
                <div className='px-5'>
                    <h4> <b> Agent </b></h4>
                    <b>Name:</b><span><p>John Wesly</p></span>
                    <b>Joined in :</b><span><p>48 November 2025</p></span>
                </div>
                </div>
                <Card.Body>
                    <ListGroup>
                        <ListGroup.Item className='p-4 d-flex align-items-center'>
                            <i className='fa fa-pen h-100 p-2'></i>
                            <h3>Edit Profile</h3>
                        </ListGroup.Item>
                        <ListGroup.Item className='p-4 d-flex align-items-center'>
                            <i className='fa fa-gear h-100 p-2'></i>
                            <h3>Settings</h3>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
        </>
    );
}

export default Profile;