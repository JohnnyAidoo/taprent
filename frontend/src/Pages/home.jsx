import { useEffect, useState } from "react";
import CardTemp from "../component/cardTemp";
import axios from "axios";
import Sidebar from "../component/sidebar";
import Url from "../component/url";
import Loading from "../component/loading";
import MobileNav from "../component/mobileNav";
import ReactGA from "react-ga";
import { useNavigate } from "react-router-dom";
import Header from "../component/header";
import { Autocomplete, TextField } from "@mui/material";
import { Button } from "react-bootstrap";

function Home(props) {
  const navigate = useNavigate();
  const [posts, setposts] = useState([]);
  const [search, setSearch] = useState();
  const array = [1, 2, 3, 4, 5, 6, 7];
  useEffect(() => {
    if (props.saved === "saved") {
      navigate("/mysaved");
    }
  }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  useEffect(() => {
    axios.get(`${Url}posts`).then((res) => {
      setposts(res.data);
    });
  });

  const handleSearch = () => {
    axios.get(`${Url}posts/search/${search}`).then((res) => {
      console.log(res);
    });
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
      <Sidebar home={true} />
      <div
        id="home"
        style={{
          position: "absolute",
          right: 0,
          paddingRight: "2%",
          paddingLeft: "4%",
        }}
      >
        <div id="grid">
          {posts.length == 0
            ? array.map((item) => <Loading />)
            : posts.map((post) => (
                <CardTemp
                  key={post._id}
                  id={post._id}
                  photos={post.photos}
                  title={post.title}
                  location={post.location}
                  tel={post.telephone}
                />
              ))}
        </div>
      </div>

      <MobileNav value={0} />
    </>
  );
}

export default Home;
