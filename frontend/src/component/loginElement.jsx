import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import Url from "./url";

function LoginElement() {
    const primary = '#FBF5F3'
    const ctr = '#FD5200'

    const [number, setnumber] = useState()
    const [password, setPassword] = useState()


    const numberInput = (e) => {
       setnumber(e.target.value)
    }
    const passwordInput = (e) => {
        setPassword(e.target.value)
    }
    
    onsubmit = ( (event)=>{
        event.preventDefault()

        axios.post(`${Url}users/login`,{
            number: number,
            password: password 
            }).then((res)=>{
                console.log(res)
                localStorage.setItem('token', res.data.access);
            }).catch((err)=>{console.log(err)})
    })

    

    return (
        <>
        <Card  style={{minWidth:'60vw', borderRadius: '5%'}}>
            <Card.Body>
            <Card.Title style={{textAlign:'center'}}>
                Login To <i>Tap Rent</i>
            </Card.Title>
                <Form>
                    <Form.Label >
                        number:
                    </Form.Label>
                    <Form.Control onChange={numberInput} placeholder="Enter Number" />
                    <Form.Label>
                        Password:
                    </Form.Label>
                    <Form.Control onChange={passwordInput} type="password" placeholder="Enter Password" />
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