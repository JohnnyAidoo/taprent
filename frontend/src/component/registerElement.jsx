
import { Button, Card, Form } from "react-bootstrap";


function RegisterElement() {
    return (
        <>
        <Card style={{minWidth:'50vw', borderRadius: '5%'}}>
            <Card.Body >
            <Card.Title style={{textAlign:'center'}}>
                Signup To <i>Tap Rent</i>
            </Card.Title>
                <Form>
                    <Form.Label>
                        Enter First Name:
                    </Form.Label>
                    <Form.Control placeholder="Enter First Name" />
                    <Form.Label>
                        Enter Last Name:
                    </Form.Label>
                    <Form.Control placeholder="Enter Last Name" />
                    <Form.Label>
                        Create A Password:
                    </Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                    <Form.Label>
                        Re-Type Password:
                    </Form.Label>
                    <Form.Control type="password" placeholder="Re-Type Password" />
                    <br />
                    <Button style={{width: '100%'}}>
                        Sign Up
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        </>
    );
}

export default RegisterElement;