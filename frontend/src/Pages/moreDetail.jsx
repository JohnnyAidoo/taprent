import {
  Card,
  Col,
  Carousel,
  Row,
  ButtonGroup,
  Button,
  Container,
} from "react-bootstrap";

import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import map from "../images/map.jpg";
import CardTemp from "../component/cardTemp";
import Sidebar from "../component/sidebar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Url from "../component/url";
import { Avatar, Grid, Modal, Paper, Typography } from "@mui/material";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
import ReactGA from "react-ga";

function MoreDetail() {
  const [current_loc, setcurrent_loc] = useState("");
  const [popupShare, setPopupShare] = useState(false);
  const [open, setopen] = useState({ open: false, message: "" });

  useEffect(() => {
    setcurrent_loc(window.location.pathname);
  }, []);

  const [author_info, setAuthor_info] = useState({
    author: "",
    description: "",
  });

  const [post_item, setPost_item] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    photos: [],
    features: [],
    author: "",
    telephone: "",
  });

  const params = useParams();
  const postid = params.postid;

  const primary = "#FBF5F3";
  const secondary = "#D3D4D9";
  const ctr = "#FD5200";
  const ctr2 = "#AF3800";
  const message = "Check Out This House Available For Rent At OneRent ";

  // axios

  const handleSaveItem = (e) => {
    let userid = post_item.author;
    axios
      .post(`${Url}saved`, {
        uid: userid,
        itemId: postid,
      })
      .then((res) => {
        console.log(res.status);
        res.status === 201
          ? setopen({ open: true, message: "Item Saved Sucessfully" })
          : setopen({ open: true, message: "Item Already Saved" });
      })
      .catch((err) => {
        setopen({ open: true, message: err });
      });
  };

  useEffect(() => {
    axios
      .get(`${Url}posts/${postid}`)
      .then((res) => {
        sessionStorage.setItem("author", res.data.author);
        setPost_item({
          title: res.data.title,
          description: res.data.description,
          price: res.data.price,
          location: res.data.location,
          photos: res.data.photos,
          features: res.data.features,
          author: res.data.author,
          telephone: res.data.telephone,
        });
      })
      .then(() => {
        let author = sessionStorage.getItem("author");
        axios.get(`${Url}users/${author}`).then((res) => {
          setAuthor_info({
            author: res.data.name,
            description: res.data.description,
          });
        });
      });
  }, []);

  return (
    <>
      {/* modal for share component */}
      <Modal
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "transparent",
        }}
        open={popupShare}
        onClose={() => {
          setPopupShare(false);
        }}
      >
        <Paper sx={{ padding: 2 }}>
          <Grid container spacing={3}>
            <Grid item>
              <FacebookShareButton
                url={`${current_loc}details/${postid}`}
                quote={message}
              >
                <FacebookIcon size={40} round={true} />
              </FacebookShareButton>
            </Grid>
            <Grid item>
              <TwitterShareButton
                url={`${current_loc}details/${postid}`}
                title={message}
              >
                <TwitterIcon size={40} round={true} />
              </TwitterShareButton>
            </Grid>
            <Grid item>
              <WhatsappShareButton
                url={`${current_loc}details/${postid}`}
                title={message}
              >
                <WhatsappIcon size={40} round={true} />
              </WhatsappShareButton>
            </Grid>
            <Grid item>
              <EmailShareButton
                url={`${current_loc}details/${postid}`}
                body={message}
              >
                <EmailIcon size={40} round={true} />
              </EmailShareButton>
            </Grid>
            <Grid item>
              <TelegramShareButton
                url={`${current_loc}details/${postid}`}
                title={message}
              >
                <TelegramIcon size={40} round={true} />
              </TelegramShareButton>
            </Grid>
          </Grid>
        </Paper>
      </Modal>

      {/* end of modal for share */}

      {/* modal for saved */}
      <Modal
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "transparent",
        }}
        open={open.open}
        onClose={() => {
          setopen(false);
        }}
      >
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h5" color="green">
            {" "}
            <i className="fa fa-check"></i> {open.message}
          </Typography>
        </Paper>
      </Modal>

      {/* end of modal */}

      <Sidebar />
      <div
        id="home"
        style={{
          position: "absolute",
          right: 0,
          paddingRight: "2%",
          paddingLeft: "4%",
        }}
      >
        <div style={{ paddingBottom: "2%" }}>
          <Row xs={1} md={2}>
            <Col>
              <Carousel interval={null}>
                {/* Image Carousel */}
                {post_item.photos.map((photo) => (
                  <Carousel.Item>
                    <Card.Img
                      variant="top"
                      src={photo}
                      style={{ borderRadius: "5%", aspectRatio: 16 / 10 }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>

            <Col>
              <Container
                fluid
                style={{
                  marginBottom: "5%",
                  height: "100%",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "column",
                }}
              >
                <Card.Title>
                  {/* title */}
                  {post_item.title}
                </Card.Title>
                <Card.Body>
                  <Card.Text>
                    {/* price */}
                    <b>{post_item.price}</b>/ month
                  </Card.Text>
                  <Card.Text>
                    {/* location */}
                    {post_item.location}
                  </Card.Text>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <ButtonGroup
                      style={{ width: "80%", backgroundColor: ctr }}
                      arial-label="call to action"
                      size="sm"
                    >
                      <Button
                        href={`tel:${post_item.telephone}`}
                        style={{
                          backgroundColor: ctr,
                          color: "white",
                          width: "100%",
                        }}
                        variant="primary"
                      >
                        <i className="fa fa-phone"></i> Call
                      </Button>
                      <Button
                        onClick={handleSaveItem}
                        style={{
                          width: "100%",
                          backgroundColor: ctr,
                          color: "white",
                        }}
                        variant="primary"
                      >
                        <i className="fa fa-heart"></i> Save
                      </Button>
                      <Button
                        onClick={() => {
                          setPopupShare(true);
                        }}
                        style={{
                          width: "100%",
                          backgroundColor: ctr,
                          color: "white",
                        }}
                        variant="primary"
                      >
                        <i className="fa fa-share"></i> Share
                      </Button>
                    </ButtonGroup>
                  </div>
                  <br />
                  {/* features */}
                  <Card style={{ backgroundColor: "white" }}>
                    <Container id="grid">
                      {post_item.features.map((feature) => (
                        <li>{feature}</li>
                      ))}
                    </Container>
                  </Card>
                </Card.Body>
              </Container>
            </Col>
          </Row>
        </div>

        <Container>
          <h3>More Info</h3>
          <p style={{ color: "grey", fontWeight: "bold" }}>Location</p>

          {/* <Card >
                <Card.Img  src={map} />
            </Card> */}

          <h3>
            <i
              style={{ padding: "2%", color: ctr }}
              className="fas fa-directions"
            ></i>
            {post_item.location}
          </h3>
        </Container>
        <hr />
        <p style={{ color: "grey", fontWeight: "bold" }}>Description</p>

        <Container>
          <p style={{ paddingInline: 50 }}>{post_item.description}</p>
        </Container>
        <hr />
        <p style={{ color: "grey", fontWeight: "bold" }}>Agent Information</p>
        <Container fluid style={{ display: "flex", justifyContent: "center" }}>
          <Row style={{ textAlign: "center", display: "flex", width: "70%" }}>
            <Col>
              <Avatar style={{ width: 150, height: 150 }} />
            </Col>
            <Col>
              <b style={{ fontSize: 25 }}>{author_info.author}</b>
              <br />
              <b>About</b>
              <Col>{author_info.description}</Col>
            </Col>
          </Row>
        </Container>
        <hr />

        <p style={{ color: "grey", fontWeight: "bold" }}>Related Listing</p>
      </div>
    </>
  );
}

export default MoreDetail;

//Property Location
//Takoradi , Market Circle
