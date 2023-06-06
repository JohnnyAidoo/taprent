import {Alert, Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import Url from "./url";
import { useNavigate } from 'react-router-dom'

function LoginElement() {
    const primary = '#FBF5F3'
    const ctr = '#FD5200'

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
                    localStorage.setItem('token', res.data.userId)
                    navigate('/')
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
        <Card  style={{minWidth:'60vw', borderRadius: '5%'}}>
            <Card.Body>
            <Card.Title style={{textAlign:'center'}}>
                Login To <i>Tap Rent</i>
            </Card.Title>
                <Form>
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
            </Card.Body>
        </Card>
        </>
    );
}

export default LoginElement;