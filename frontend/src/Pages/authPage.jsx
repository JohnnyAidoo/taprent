import { Tabs, Tab } from "react-bootstrap";
import LoginElement from "../component/loginElement";
import RegisterElement from "../component/registerElement";
import { useMediaQuery } from "@mui/material";

function AuthPage() {
  const mobileScreen = useMediaQuery("(max-width : 500px)");

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Tabs
          defaultActiveKey={1}
          fill
          style={{ width: mobileScreen ? "90vw" : "50vw" }}
        >
          <Tab eventKey={1} title="login">
            <LoginElement />
          </Tab>
          <Tab eventKey={2} title="register">
            <RegisterElement />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default AuthPage;
