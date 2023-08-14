import { useEffect, useState } from "react";
import CardTemp from "../component/cardTemp";
import axios from "axios";
import Sidebar from "../component/sidebar";
import Url from "../component/url";
import Loading from "../component/loading";
import MobileNav from "../component/mobileNav";
import ReactGA from "react-ga";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  const [posts, setposts] = useState([]);
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
