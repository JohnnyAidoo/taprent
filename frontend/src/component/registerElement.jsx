import axios from "axios";
import { useState } from "react";
import { Alert, Button, Col, Form, Modal, Row, Spinner } from "react-bootstrap";
import Url from "./url";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

function RegisterElement() {
  const navigate = useNavigate();
  const mobileScreen = useMediaQuery("(max-width : 500px)");

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [number, setNumber] = useState("");
  const [error, seterror] = useState("");
  const [password, setPassword] = useState("");
  const [prompter, setprompter] = useState("");

  const firstnameInput = (e) => {
    setFirstname(e.target.value);
  };
  const lastnameInput = (e) => {
    setLastname(e.target.value);
  };
  const phoneInput = (e) => {
    setNumber(e.target.value);
  };
  const passwordInput = (e) => {
    setPassword(e.target.value);
  };

  const checkpassword = (e) => {
    let password1 = password;
    let password2 = e.target.value;
    if (password1 !== password2) {
      seterror(<Alert variant="danger">Password Does Not Match</Alert>);
    } else {
      seterror("");
    }
  };
  onsubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${Url}users`, {
        name: firstname + " " + lastname,
        phoneNumber: number,
        password: password,
      })
      .then((res) => {
        setprompter(
          <Modal centered>
            <Spinner variant="warning" />
            <p>Loading...</p>
          </Modal>
        );
        localStorage.setItem("userid", res.data._id);
        setprompter(
          <Alert
            variant="success"
            style={{
              position: "absolute",
              top: 0,
              width: "100%",
              left: 0,
              textAlign: "center",
            }}
          >
            {res.message}
          </Alert>
        );
        // uid ? navigate('/') : setprompter(<Modal size='lg' centered backdrop='static'>
        //     <Modal.Title>Loading</Modal.Title>
        // </Modal>)
        navigate("/profile");
      })
      .catch((err) => {});
  };

  return (
    <>
      {prompter}

      <div
        onChange={() => {
          setprompter(<></>);
        }}
        style={{
          width: "100vw",
          height: "90vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Row className="w-75">
          <Col
            style={{
              width: "40%",
              backgroundColor: "white",
              border: "grey solid 0.3px",
              padding: mobileScreen ? 20 : 40,
              borderRadius: 20,
            }}
          >
            <Form>
              <Form.Label>Enter First Name:</Form.Label>
              <Form.Control
                required
                onChange={firstnameInput}
                placeholder="John"
              />
              <Form.Label>Enter Last Name:</Form.Label>
              <Form.Control
                required
                onChange={lastnameInput}
                placeholder="Elder"
              />
              <Form.Label>Enter Phone Number:</Form.Label>
              <Form.Control
                required
                onChange={phoneInput}
                type="number"
                placeholder="0200000000"
              />
              <Form.Label>Create A Password:</Form.Label>
              <Form.Control
                required
                onChange={passwordInput}
                type="password"
                placeholder="Enter Password"
              />
              <Form.Label>Re-Type Password:</Form.Label>
              <Form.Control
                required
                onChange={checkpassword}
                type="password"
                placeholder="Re-Type Password"
              />
              {error}
              <br />
              <Button type="submit" style={{ width: "100%" }}>
                Sign Up
              </Button>
            </Form>
          </Col>
          <Col id="col" style={{ width: "40%", marginLeft: 100 }}></Col>
        </Row>
      </div>
    </>
  );
}

export default RegisterElement;
