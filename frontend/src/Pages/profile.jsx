import { useEffect, useState } from "react";
import axios from "axios";
import Url from "../component/url";
import Sidebar from "../component/sidebar";

import {
  Card,
  Avatar,
  CardContent,
  TextField,
  Typography,
  Box,
  CardHeader,
  Button,
  Modal,
  useMediaQuery,
  ButtonGroup,
  CardActions,
} from "@mui/material";
import MobileNav from "../component/mobileNav";
import CardTemp from "../component/cardTemp";
import ReactGA from "react-ga";

function Profile() {
  // varaibles
  const [open, setopen] = useState(false);
  const mobileScreen = useMediaQuery("(max-width : 700px)");
  const laptopScreen = useMediaQuery("(max-width : 1024px)");
  const [details, setdetails] = useState({
    name: "",
    displayPicture: undefined,
    number: "",
    description: "",
  });
  const [newdetails, setnewdetails] = useState({
    name: "",
    description: "",
  });

  //   use effects / funtions

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  /// get user details
  const getUserData = async (uid) => {
    await axios.get(`${Url}users/${uid}`).then((res) => {
      localStorage.setItem("tel", res.data.phoneNumber);
      setdetails({
        name: res.data.name,
        number: res.data.phoneNumber,
        description: res.data.description,
      });
    });
  };
  useEffect(() => {
    let userid = localStorage.getItem("userid");
    userid ? getUserData(userid) : (window.location.pathname = "/auth");

    const getUsersPosts = () => {};
  }, []);

  const handleUpdate = () => {
    let uid = localStorage.getItem("userid");

    axios
      .patch(`${Url}users/update/${uid}`, {
        name: newdetails.name,
        description: newdetails.description,
      })
      .then((res) => {
        setopen(false);
        getUserData(uid);
      });
  };

  const logout = () => {
    localStorage.removeItem("userid");
    localStorage.removeItem("tel");
    window.location.pathname = "/auth";
  };

  const handleopen = (event) => {
    open == true ? setopen(false) : setopen(true);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    height: "fit-content",
    minWidth: "80%",
    transform: "translate(-50%, -50%)",
    border: ".5px solid grey",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      {/* modal */}
      <Modal open={open} onClose={handleopen}>
        <Box sx={style} component="form">
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "1%",
            }}
          >
            <Box
              sx={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: laptopScreen ? "start" : "center",
                  flexDirection: laptopScreen ? "column" : "row",
                }}
              >
                <Avatar
                  alt={details.name}
                  src={""}
                  sx={{ width: 150, height: 150, margin: 3 }}
                />
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  name="image"
                  itemType="jpg"
                  id=""
                />
              </div>
            </Box>
            <CardContent sx={{ width: "70%" }}>
              <h4 style={{ fontSize: 30, fontWeight: "bold" }}>
                <TextField
                  sx={{ width: "80%" }}
                  variant="standard"
                  label="Name"
                  defaultValue={details.name}
                  onChange={(e) => {
                    setnewdetails({ name: e.target.value });
                  }}
                ></TextField>
              </h4>
              <TextField
                sx={{ width: "80%" }}
                variant="standard"
                label=" Description "
                defaultValue={details.description}
                multiline
                rows={5}
                onChange={(e) => {
                  setnewdetails({ description: e.target.value });
                }}
              ></TextField>
              <CardActions>
                <Button onClick={() => setopen(false)} color="error">
                  Cancel
                </Button>
                <Button onClick={handleUpdate} variant="contained">
                  Confirm
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Box>
      </Modal>
      {/* end of modal */}
      {/*  */}

      {/* side bar */}
      <Sidebar profile={true} />
      {/* end of side bar */}

      {/* main */}
      <div
        id="home"
        style={{
          position: "absolute",
          right: 0,
          paddingRight: "2%",
          paddingLeft: "4%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Card sx={{ width: "80%" }}>
            <CardHeader
              action={
                <div>
                  <Button
                    onClick={handleopen}
                    variant="text"
                    sx={{ color: "black", fontSize: 20 }}
                  >
                    <i className="fa fa-pen"></i>
                  </Button>
                  <Button
                    onClick={logout}
                    variant="text"
                    sx={{ color: "red", fontSize: 20 }}
                  >
                    <i className="fa fa-sign-out"></i>
                  </Button>
                </div>
              }
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: mobileScreen ? "column" : "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                alt={details.name}
                src={""}
                sx={{ width: 150, height: 150, margin: 5 }}
              />
              <div style={{ textAlign: mobileScreen ? "center" : "start" }}>
                <h4 style={{ fontSize: 30, fontWeight: "bold" }}>
                  {details.name}
                </h4>
                <Typography variant="body1">{details.description}</Typography>
              </div>
            </CardContent>
          </Card>
        </div>
        <br />
        <br />
        <br />
        <h1>Your Posts</h1>
        <div
          id="home"
          style={{
            position: "absolute",
            right: 0,
            paddingRight: "2%",
            paddingLeft: "4%",
          }}
        >
          <div id="grid"></div>
        </div>
      </div>
      <MobileNav value={2} />
    </>
  );
}

export default Profile;
