import { Button, Card, Form } from "react-bootstrap";

function LoginElement() {
    const primary = '#FBF5F3'
    const ctr = '#FD5200'


    return (
        <>
        <Card style={{minWidth:'50vw', borderRadius: '5%'}}>
            <Card.Body>
            <Card.Title style={{textAlign:'center'}}>
                Login To <i>Tap Rent</i>
            </Card.Title>
                <Form>
                    <Form.Label>
                        Username:
                    </Form.Label>
                    <Form.Control placeholder="Enter User Name" />
                    <Form.Label>
                        Password:
                    </Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                    <br />
                    <Button style={{width: '100%'}}>
                        Login
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        </>
    );
}

export default LoginElement;