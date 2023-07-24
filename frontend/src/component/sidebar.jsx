import { useState, useEffect, memo } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Sidebar = (props) => {
  const [uid, setuid] = useState();

  const primary = "#FBF5F3";
  const secondary = "#D3D4D9";
  const ctr = "#FD5200";
  const ctr2 = "#AF3800";

  useEffect(() => {
    setuid(localStorage.getItem("userid"));
  });

  return (
    <>
      <div
        id="sidebar"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          background: "white",
          width: "20vw",
          height: "100vh",
          borderRight: "solid 0.1px grey",
        }}
      >
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", width: "100%" }}>
            <a href="/">
              <img
                src={logo}
                alt=""
                style={{ aspectRatio: 1 / 1, width: "60%" }}
              />
            </a>
          </div>
          <Nav id="nav" variant="pills">
            <Nav.Item>
              <Nav.Link
                className="text-dark"
                active={props.home}
                href="/"
                style={{ padding: "12%" }}
              >
                <i className="fa fa-home"></i> Home{" "}
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
                <Nav.Link  className="text-dark" active={props.explore} href="/explore" style={{padding:'12%'}}> <i className="fa fa-compass"></i> Explore</Nav.Link>
                </Nav.Item> */}
            <Nav.Item>
              <Nav.Link
                className="text-dark"
                active={props.saved}
                href={`mysaved`}
                style={{ padding: "12%" }}
              >
                {" "}
                <i className="fa fa-heart"></i> Saved
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="text-dark"
                active={props.profile}
                href="/profile"
                style={{ padding: "12%" }}
              >
                {" "}
                <i className="fa fa-user"></i> Profile
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
