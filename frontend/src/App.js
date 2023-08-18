import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/home";
import Header from "./component/header";
import Search from "./Pages/searchPage";
import SavedPage from "./Pages/savedPage";
import Profile from "./Pages/profile";
import MobileNav from "./component/mobileNav";
import AuthPage from "./Pages/authPage";
import MoreDetail from "./Pages/moreDetail";
import { useEffect, useState } from "react";
import { analytics } from "./component/firebase";
import ReactGA from "react-ga";
import { getAnalytics, logEvent } from "firebase/analytics";

function App() {
  const TRACKINGID = "G-VJCWW5TCVC";
  ReactGA.initialize(TRACKINGID);
  const [header, setheader] = useState();

  const analytics = getAnalytics();
  logEvent(analytics, "notification_received");

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search/:query" element={<Search />} />
        <Route path="/mysaved" element={<SavedPage />} />
        <Route path="/details/mysaved" element={<Home saved="saved" />} />
        <Route path="profile" element={<Profile />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="details/:postid" element={<MoreDetail />} />
      </Routes>
    </>
  );
}

export default App;
