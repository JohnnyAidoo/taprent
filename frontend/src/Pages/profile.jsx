import { useEffect, useState } from 'react';
import noImg from '../images/noImg.jpg'
import axios from 'axios';
import Url from '../component/url';
import Sidebar from '../component/sidebar';
import Home from './home';
import {Card, Avatar, CardContent, CardMedia, Typography, Box} from '@mui/material'


function Profile() {

 
    const [name, setname] = useState('')
    const [number, setnumber] = useState('')


    useEffect(()=>{
        let userid = localStorage.getItem('userid')
        const getUserData = (uid) => {
          axios.get(`${Url}users/${uid}`).then(res => {
           localStorage.setItem('tel', res.data.phoneNumber)
           setname(res.data.name)
           setnumber(res.data.phoneNumber)
          })
            
        }
        userid ? getUserData(userid) : window.location.pathname = '/auth'
    },[])

    const logout = () => {
        localStorage.removeItem('userid')
        localStorage.removeItem('tel')
        window.location.pathname = '/auth'
    }

    return (
        <>
        <Sidebar profile={true} />
        <div id='home' style={{position:'absolute', right:0,paddingRight:'2%',paddingLeft:'4%'}}>
            {/* <Card>
                <div className='d-flex px-5 justify-content-center align-items-center'>
                <Card.Img style={{width: '15vw'}} src={noImg} alt={noImg} />
                <div className='px-5'>
                    <h4> <b> Agent </b></h4>
                    <b>Name:</b><span><p>{name}</p></span>
                    <b>Joined in:</b><span><p>48 November 2025</p></span>
                    <p>{number}</p>
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
                        <ListGroup.Item onClick={logout} className='p-4 d-flex align-items-center'>
                            <i className='fa fa-gear h-100 p-2'></i>
                            <h3>Logout</h3>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card> */}
            <Card sx={{display:'flex'}} >
                <Box sx={{width:'40%',display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Avatar  alt={name} src={''} sx={{width:150, height:150}} />
                </Box>
                <CardContent sx={{width:'70%'}} >
                    <h4 style={{fontSize:30, fontWeight:'bold'}}>
                        {name}
                    </h4>
                    <Typography variant='body1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis enim veritatis quis iusto sed officiis, rem dolores libero eveniet omnis sunt cupiditate explicabo
                         neque voluptas reprehenderit blanditiis quisquam. Dolores, blanditiis?
                    </Typography>
                </CardContent>
            </Card>
            <br />
            <br />
            <br />
            <h1>post</h1>
            <Home />
        </div>
        
        </>
    );
}

export default Profile;