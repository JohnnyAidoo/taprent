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
} from "@mui/material";
import MobileNav from "../component/mobileNav";
import CardTemp from "../component/cardTemp";

function Profile() {
  // varaibles
  const [open, setopen] = useState(false);
  const mobileScreen = useMediaQuery("(max-width : 700px)");
  const laptopScreen = useMediaQuery("(max-width : 1024px)");
  const [details, setdetails] = useState({
    name: "",
    displayPicture: undefined,
    number: "",
  });

  //   use effects / funtions
  useEffect(() => {
    let userid = localStorage.getItem("userid");
    const getUserData = async (uid) => {
      await axios.get(`${Url}users/${uid}`).then((res) => {
        localStorage.setItem("tel", res.data.phoneNumber);
        setdetails({ name: res.data.name, number: res.data.phoneNumber });
      });
    };
    userid ? getUserData(userid) : (window.location.pathname = "/auth");

    const getUsersPosts = () => {};
  }, []);

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
              padding: "2%",
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
                ></TextField>
              </h4>
              <TextField
                sx={{ width: "80%" }}
                variant="standard"
                label=" Description "
                defaultValue=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis enim veritatis quis iusto sed officiis, rem dolores libero eveniet omnis sunt cupiditate explicabo
                    neque voluptas reprehenderit blanditiis quisquam. Dolores, blanditiis?"
                multiline
                rows={5}
                maxRows={8}
              ></TextField>
            </CardContent>
          </Card>
        </Box>
      </Modal>
      {/* end of modal */}

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
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis enim veritatis quis iusto sed officiis, rem dolores
                  libero eveniet omnis sunt cupiditate explicabo neque voluptas
                  reprehenderit blanditiis quisquam. Dolores, blanditiis?
                </Typography>
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
