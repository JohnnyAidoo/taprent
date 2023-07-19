
import {Card , Button, CardContent, Typography, CardActionArea, ButtonGroup, CardMedia, Modal, Paper, Alert, AlertTitle, Grid,} from '@mui/material'
import {Carousel} from 'react-bootstrap'
import axios from 'axios'
import Url from './url'
import { useEffect, useState } from 'react'
import {FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappShareButton, WhatsappIcon,EmailShareButton,EmailIcon,TelegramShareButton, TelegramIcon} from 'react-share'
import { useLocation } from 'react-router-dom'

function CardTemp(props) {
    const primary = '#FBF5F3'
    const secondary = '#D3D4D9'
    const ctr = '#FD5200'
    const ctr2 = '#AF3800'
    const message = 'Check Out This House Available For Rent At OneRent '
    let photoarray = props.photos


    const [userid, setUserId] = useState('')
    const [current_loc, setcurrent_loc] = useState('')
    const [popupShare, setPopupShare] = useState(false)
    const [open, setopen] = useState({open : false , message: ''})
    

    const location = useLocation()
    useEffect(()=>{
        setUserId(localStorage.getItem('userid'))
    })
    useEffect(()=>{
        setcurrent_loc(window.location.href)
    },[])
    
    

    const handleSaveItem = (e) =>{

        if (e.target.id == 'un'){
            axios.delete(`${Url}saved/delete/${props.id}`).then((res) =>{
                // console.log(res.data)
                setopen({open:true, message: res.data})
            })
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
        <Modal 
        sx={{width:'100%', height:'100%', display:'flex',justifyContent:'center', alignItems:'center',bgcolor:'transparent'}} 
        open={popupShare}
        onClose={() =>{setPopupShare(false)}}
        >
            <Paper sx={{padding:2}} >
                <Grid container spacing={3}>
                    <Grid item>
                        <FacebookShareButton url={`${current_loc}details/${props.id}`}
                        quote={message}
                        >
                            <FacebookIcon size={40} round={true} />
                        </FacebookShareButton>
                    </Grid>
                    <Grid item>
                        <TwitterShareButton url={`${current_loc}details/${props.id}`} title={message}>
                            <TwitterIcon size={40} round={true} />
                        </TwitterShareButton>
                    </Grid>
                    <Grid item>
                        <WhatsappShareButton url={`${current_loc}details/${props.id}`} title={message}>
                            <WhatsappIcon size={40} round={true} />
                        </WhatsappShareButton>
                    </Grid>
                    <Grid item>
                        <EmailShareButton url={`${current_loc}details/${props.id}`} body={message}>
                            <EmailIcon size={40} round={true} />
                        </EmailShareButton>
                    </Grid>
                    <Grid item>
                        <TelegramShareButton url={`${current_loc}details/${props.id}`} title={message} >
                            <TelegramIcon size={40} round={true}  />
                        </TelegramShareButton>
                    </Grid>
                </Grid>
            </Paper>
        </Modal>



        <Modal 
        sx={{width:'100%', height:'100%', display:'flex',justifyContent:'center', alignItems:'center',bgcolor:'transparent'}} 
        open={open.open}
        onClose={() =>{setopen(false)}}
        >
            <Paper sx={{padding:2}} >
                <Typography variant='h5' color='green'> <i className='fa fa-check'></i> {open.message}</Typography>
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
                        <Button onClick={() => {setPopupShare(true)}} style={{width:'100%'}} ><i className='fa fa-share'></i> Share</Button>
                    </ButtonGroup>
                </CardActionArea>
            </Card>

        
        </>
    );
}

export default CardTemp;