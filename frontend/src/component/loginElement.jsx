import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import Url from "./url";

function LoginElement() {
    const primary = '#FBF5F3'
    const ctr = '#FD5200'

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()


    const usernameInput = (e) => {
       setUsername(e.target.value)
    }
    const passwordInput = (e) => {
        setPassword(e.target.value)
    }
    
    onsubmit = ( (event)=>{
        event.preventDefault()
        let newusername = username.replace(/ /g,'_')

        axios.post(`${Url}login/`,{
            username: newusername,
            password: password 
            }).then((res)=>{
                localStorage.setItem('token', res.data.access);
                window.location.pathname = '/'
            }).catch((err)=>{console.log(err)})
    })

    

    return (
        <>
        <Card style={{minWidth:'50vw', borderRadius: '5%'}}>
            <Card.Body>
            <Card.Title style={{textAlign:'center'}}>
                Login To <i>Tap Rent</i>
            </Card.Title>
                <Form>
                    <Form.Label >
                        Username:
                    </Form.Label>
                    <Form.Control onChange={usernameInput} placeholder="Enter User Name" />
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