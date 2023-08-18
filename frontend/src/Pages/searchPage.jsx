import { useEffect, useState } from "react";
import Sidebar from "../component/sidebar";
import axios from "axios";
import Url from "../component/url";
import Loading from "../component/loading";
import CardTemp from "../component/cardTemp";
import { useParams } from "react-router-dom";

function Search() {
  const array = [1, 2, 3, 4, 5, 6, 7];
  const [posts, setposts] = useState([]);

  const query = useParams().query;

  useEffect(() => {
    handleSearch();
  });
  const handleSearch = () => {
    axios.get(`${Url}posts/search/${query}`).then((res) => {
      setposts(res.data);
    });
  };

  return (
    <>
      <Sidebar search={true} />
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
    </>
  );
}

export default Search;
