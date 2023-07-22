import { useEffect, useState } from "react";
import CardTemp from "../component/cardTemp";
import axios from "axios";
import Sidebar from "../component/sidebar";
import Url from "../component/url";
import Loading from "../component/loading";
import MobileNav from "../component/mobileNav";

function Home() {
  const [posts, setposts] = useState([]);
  const [load, setload] = useState();

  useEffect(() => {
    axios.get(`${Url}posts`).then((res) => {
      setposts(res.data);
    });

    document.readyState !== "complete" ? setload(<Loading />) : setload("");
  }, []);

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
          {posts.map((post) => (
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
      {load}
    </>
  );
}

export default Home;
