
import {Card , Button, CardContent, Typography, CardActionArea, ButtonGroup, CardMedia, Modal, Paper} from '@mui/material'
import {Carousel} from 'react-bootstrap'
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
    const [popup, setPopup] = useState()
    const [open, setopen] = useState({open : false , message: ''})

    useEffect(()=>{
        setUserId(localStorage.getItem('userid'))
    })
    

    const handleSaveItem = (e) =>{

        if (e.target.id == 'un'){
            console.log('saved')
        }else{
            axios.post(`${Url}saved`,{
                uid: userid,
                itemId: props.id
            }).then((res) => {
                console.log(res.status)
                res.status === 201 ? setopen({open:true, message:'Item Saved Sucessfully'}) : setopen({open:true, message:'Item Already Saved'})
            }).catch((err) => {
                setopen({open:true, message:err})
            })
        }

       
    }

    
    return (
        <>
        {popup}
        <Modal 
        sx={{width:'100%', height:'100%', display:'flex',justifyContent:'center', alignItems:'center',bgcolor:'transparent'}} 
        open={open.open}
        onClose={() =>{setopen(false)}}
        >
            <Paper sx={{padding:2}} >
                <Typography variant='h5' color='green'> <i className='fa fa-check'></i> Item Saved Successfully</Typography>
            </Paper>
        </Modal>



            <Card sx={{bgcolor:primary,width:'100%',aspectRatio:3/4}} elevation={0}>
                <CardContent>
                    <a href={`details/${props.id}`}>
                <Carousel interval={null}>
                    {photoarray.map((photo) =>(
                        <Carousel.Item key={photo}>
                            <CardMedia image={photo} 
                            key={photo} style={{borderRadius: '5%', aspectRatio:16/10, }}/>
                        </Carousel.Item>
                    ))}    
                </Carousel>
                     </a>

                <a href={`details/${props.id}`}>
                    <h5>{props.title}</h5>
                    <Typography><i className='fa fa-location' 
                        style={{padding:'2%',color:ctr, fontSize:15}}></i>{props.location}</Typography>
                </a>
                </CardContent>
                <br />
                <CardActionArea sx={{width:'100%', display:'flex', justifyContent:'center',borderColor:'grey', borderWidth:1}}>
                    <ButtonGroup color='warning' variant='contained' sx={{width:'80%'}}>
                        <Button  href={`tel:${props.tel}`} ><i className='fa fa-phone'></i> Call</Button>
                        <Button onClick={handleSaveItem} style={{width:'100%'}} id={props.remove} ><i className='fa fa-heart'></i> {props.remove}Save</Button>
                        <Button href={`details/${props.id}`} ><i className='fa fa-share'></i> Share</Button>
                    </ButtonGroup>
                </CardActionArea>
            </Card>

        
        </>
    );
}

export default CardTemp;