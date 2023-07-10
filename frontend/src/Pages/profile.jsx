import { useEffect, useState } from 'react';
import noImg from '../images/noImg.jpg'
import axios from 'axios';
import Url from '../component/url';
import Sidebar from '../component/sidebar';
import Home from './home';
import {Card, Avatar, CardContent, CardMedia, Typography, Box, CardHeader, Button, Modal, filledInputClasses, TextField} from '@mui/material'


function Profile() {

 
    const [open, setopen] = useState(false)
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
     
    const handleopen = (event) => {
        open == true ? setopen(false) : setopen(true)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        height: 'fit-content',
        minWidth: '80%',
        transform: 'translate(-50%, -50%)',
        border: '.5px solid grey',
        boxShadow: 24,
        p: 4,
      };


    return (
        <>

            {/* modal */}
            <Modal 
            open={open}
            onClose={handleopen}
            >
                <Box sx={style} component='form'>
                <Card sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'5%'}} >
                <Box sx={{width:'50%',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <Avatar  alt={name} src={''} sx={{width:150, height:150}} />
                    <input type="file" name="image" itemType='jpg' id="" />
                </Box>
                <CardContent sx={{width:'70%'}} >
                    <h4 style={{fontSize:30, fontWeight:'bold'}}>
                        <TextField sx={{width:'80%'}}
                        variant='standard'
                        label="Name"
                        defaultValue={name}
                        ></TextField>
                    </h4>
                    <TextField sx={{width:'80%'}}
                    variant='standard'
                    label= ' Description '
                    defaultValue=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis enim veritatis quis iusto sed officiis, rem dolores libero eveniet omnis sunt cupiditate explicabo
                    neque voluptas reprehenderit blanditiis quisquam. Dolores, blanditiis?"
                    multiline
                    rows={5}
                    maxRows={8}
                    ></TextField>
                </CardContent>
            </Card>
                </Box>
            </Modal>


        <Sidebar profile={true} />
        <div id='home' style={{position:'absolute', right:0,paddingRight:'2%',paddingLeft:'4%'}}>
            
            <Card sx={{display:'flex'}} >
                <Box sx={{width:'40%',display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Avatar  alt={name} src={''} sx={{width:150, height:150}} />
                </Box>
                <CardContent sx={{width:'70%'}} >
                    <CardHeader action={<Button onClick={handleopen} variant='text' sx={{color:'black'}} ><i className='fa fa-pen'></i></Button>} >

                    </CardHeader>
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