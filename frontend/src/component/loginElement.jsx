import {Alert, Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import Url from "./url";
import { useNavigate } from 'react-router-dom'

function LoginElement() {

    const [prompter, setprompter] = useState('');
    const [number, setnumber] = useState('')
    const [password, setPassword] = useState('')

    const navigate= useNavigate()

    const numberInput = (e) => {
       setnumber(e.target.value)
    }
    const passwordInput = (e) => {
        setPassword(e.target.value)
    }
    
    onsubmit = ( (event)=>{
        event.preventDefault()

        axios.post(`${Url}users/login`,{
            phoneNumber: number,
            password: password 
            }).then((res)=>{
                console.log(res)
                let variant = 'danger'
                let message = res.message
                res.status === 200 ? variant = 'success' : variant = 'danger'
                res.status === 200 ? message = 'Login Success' : message = res.message
                setprompter(
                    <Alert variant={variant} style={{position:'absolute', top:0, width:'100%', left:0, textAlign:'center'}}>{message}</Alert>
                )
                if(res.status === 200){
                    localStorage.setItem('userid', res.data.userId)
                    navigate('/profile')
                }
            }).catch((err)=>{console.log(err)
                setprompter(
                    <Alert variant='danger' style={{position:'absolute', top:0, width:'100%', left:0, textAlign:'center'}}>{err.response.data.message}</Alert>
                )
            })
    })

    

    return (
        <>
        {prompter}
        <div  onChange={()=>{setprompter(<></>)}} style={{width:'100vw', height:'90vh',display:'flex',justifyContent:'center', alignItems:'center'}}>
            <Row className="w-75"> 
                <Col id='col' style={{width:'40%',marginRight:100, aspectRatio:9/10}}>
                </Col>
                <Col style={{display:'flex',flexDirection:'column', justifyContent:'center'}} >
                    <Form style={{backgroundcolor:'white', border:'grey solid 0.3px', padding:50, borderRadius:20}}>
                            <Form.Label >
                                number:
                            </Form.Label>
                            <Form.Control required type="number" onChange={numberInput} placeholder="Enter Number" />
                            <Form.Label>
                                Password:
                            </Form.Label>
                            <Form.Control required onChange={passwordInput} type="password" placeholder="Enter Password" />
                            <br />
                            <Button type="submit" style={{width: '100%'}}>
                                Login
                            </Button>
                        </Form>
                </Col>
            </Row>
        </div>
        </>
    );
}

export default LoginElement;