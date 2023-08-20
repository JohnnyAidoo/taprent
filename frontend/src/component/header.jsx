import { useEffect, useState } from "react";
import { Button, ButtonGroup, CloseButton, Form, Modal } from "react-bootstrap";
import Url from "./url";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import {
  Paper,
  Typography,
  Modal as SuccessModal,
  Autocomplete,
  TextField,
  useMediaQuery,
} from "@mui/material";

function Header(props) {
  const [popup, setpopup] = useState(false);
  const [postObj, setPostObj] = useState({
    title: "",
    price: "",
    location: "",
    description: "",
    imageUrls: [],
    features: [],
    author: "",
  });
  const navigate = useNavigate();
  const [seacrhedPost, setSearchedPost] = useState();
  const [open, setopen] = useState({ open: false, message: "" });

  const [display_upload_btn, setdisplay_upload_btn] = useState();

  const primary = "#FBF5F3";

  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    const userid = localStorage.getItem("userid");
    userid ? setPostObj({ author: userid }) : setPostObj({ author: "" });
    userid ? setdisplay_upload_btn("block") : setdisplay_upload_btn("none");
  });

  useEffect(() => {
    axios.get(`${Url}posts`).then((res) => {
      setPostObj(res.data);
    });
  }, []);

  const handleUpload = async (event) => {
    const files = event.target.files;

    // Create an array to store the uploaded image URLs

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Create a new FormData object
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "taprent");

      try {
        // Make the POST request to Cloudinary
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/djpaffvsj/image/upload",
          formData
        );

        // Retrieve the URL of the uploaded image
        const imageUrl = response.data.url;
        setPostObj({ imageUrls: [...postObj.imageUrls, imageUrl] });
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  onsubmit = async (e) => {
    e.preventDefault();
    let uid = await localStorage.getItem("userid");
    let telephone = await localStorage.getItem("tel");
    axios
      .post(`${Url}posts`, {
        title: postObj.title,
        price: postObj.price,
        location: postObj.location,
        features: postObj.features,
        description: postObj.description,
        photos: postObj.imageUrls,
        telephone: telephone,
        author: postObj.author,
      })
      .then((res) => {
        setpopup(false);
        setopen({ message: "Post Successful", open: true });
        redirect("/");
      })
      .catch((err) => console.error(err));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${seacrhedPost}`);
  };

  const searchTerms = [
    "Single Room",
    "One-Bedroom Apartment",
    "Studio Apartment",
    "One Room Self Contain",
    "Two-Bedroom Apartment",
    "Three-Bedroom Apartment",
    "Four-Bedroom Apartment",
    "Five-Bedroom Apartment",
    "Six-Bedroom Apartment",
    "Chamber and Hall",
    "Furnished Apartment",
    "Unfurnished Apartment",
    "Loft Apartment",
    "Penthouse Suite",
    "Duplex",
    "Townhouse",
    "Condo",
    "Shared Apartment",
    "Co-living Space",
    "Serviced Apartment",
    "Student Housing",
    "Guest Room",
    "Bachelor Apartment",
    "Micro-Apartment",
    "Efficiency Apartment",
    "Office Space for Rent",
    "Commercial Property",
    "Shared Office",
    "Coworking Space",
    "Retail Space",
    "Executive Suite",
    "Virtual Office",
    "Conference Room Rental",
    "Small Office",
    "Startup Incubator Space",
    "Creative Studio",
    "Medical Office Space",
    "Industrial Workspace",
    "Warehouse Space",
    "Flexible Workspace",
    "Retail Storefront",
    "Open-Plan Office",
    "Executive Office Suite",
    "Home Office",
  ];

  return (
    <>
      {/* modal for upload */}

      <Modal centered backdrop="static" size="lg" show={popup}>
        <Modal.Header>
          Uplaod For Rent
          <CloseButton
            onClick={() => {
              setpopup(false);
              //! to check
              setPostObj({ features: [] });
            }}
          />
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control onChange={handleUpload} type="file" />
            <Form.Control onChange={handleUpload} type="file" />
            <Form.Control
              onChange={handleUpload}
              style={{ marginBottom: "2%" }}
              type="file"
            />

            <Form.Control
              placeholder="Title"
              maxLength={40}
              style={{ marginBottom: "2%" }}
              onChange={(e) => {
                setPostObj({ title: e.target.value });
              }}
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Form.Control
                style={{ marginBottom: "2%" }}
                type="number"
                placeholder="Price"
                onChange={(e) => {
                  setPostObj({ price: e.target.value });
                }}
              />
              <Form.Control
                style={{ marginBottom: "2%" }}
                placeholder="Ghs/Montly"
                disabled
              />
            </div>
            <Form.Control
              style={{ marginBottom: "2%" }}
              placeholder="Location"
              onChange={(e) => {
                setPostObj({ location: e.target.value });
              }}
            />
            <div className="d-flex mb-2">
              <Form.Select>
                <option>Number of Bed rooms</option>
                {list.map((numberOfRoom) => (
                  <option key={numberOfRoom}>{numberOfRoom}</option>
                ))}
              </Form.Select>
              <Form.Select>
                <option>Number of Bath rooms</option>
                {list.map((numberOfRoom) => (
                  <option key={numberOfRoom}>{numberOfRoom}</option>
                ))}
              </Form.Select>
            </div>

            <Form.Control
              style={{ marginBottom: "2%", minHeight: "30vh" }}
              placeholder="description"
              size="lg"
              as="textarea"
              onChange={(e) => {
                setPostObj({ description: e.target.value });
              }}
            />

            <Modal.Footer>
              <ButtonGroup>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setpopup(false);
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit"> Upload</Button>
              </ButtonGroup>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      {/* end of modal for upload */}

      {/* modal for success */}
      <SuccessModal
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
            <i className="fa fa-check"></i> {open.message}
          </Typography>
        </Paper>
      </SuccessModal>
      {/* end of modal for success */}

      {/* header */}

      <header
        style={{ marginBottom: "2%" }}
        className=" d-flex p-4 justify-content-between align-items-center"
      >
        <a href="/" style={{ display: "flex", width: "5%" }}>
          <img
            id="headimg"
            src={logo}
            alt="one rent logo"
            style={{ aspectRatio: 1 / 1, width: "100%" }}
          />
        </a>

        {/* search bar */}
        {props.children}

        <Autocomplete
          freeSolo
          id="search"
          onChange={(event, value) => setSearchedPost(value)}
          options={searchTerms}
          sx={{ width: "30%" }}
          renderInput={(params) => (
            <form onSubmit={handleSearch} style={{ display: "flex" }}>
              <TextField
                {...params}
                label="search"
                sx={{ width: "80%", border: "none", outline: "none" }}
              />
              <Button type="submit">
                <i className="fa fa-search"></i>
              </Button>
            </form>
          )}
        />

        {/* Upload btn */}
        <div className="d-flex">
          <Button
            onClick={() => {
              setpopup(true);
            }}
            style={{ height: "100%", display: display_upload_btn }}
            variant="ouline"
          >
            <i className="fa fa-upload"></i>
          </Button>
          <Button
            id="profilebtn"
            style={{ height: "100%" }}
            variant="outline"
            href="/profile"
          >
            <i className="fa fa-user"></i>
          </Button>
        </div>
      </header>
    </>
  );
}

export default Header;
