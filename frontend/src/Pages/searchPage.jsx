import { useEffect, useState } from "react";
import GradientCard from "../component/graientCard";
import Sidebar from "../component/sidebar";
import axios from "axios";
import Url from "../component/url";
import Header from "../component/header";
import Loading from "../component/loading";
import CardTemp from "../component/cardTemp";

function Search() {
  const array = [1, 2, 3, 4, 5, 6, 7];
  const [posts, setposts] = useState([]);
  const [query, setquery] = useState("");

  onsubmit = () => {
    handleSearch();
  };
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
        <Header
          defaultSearch="none"
          children={
            <>
              <form id="searchBar" className="d-flex align-content-center">
                <input
                  type="text"
                  onChange={(e) => {
                    setquery(e.target.value);
                  }}
                />
                <button type="submit" onClick={handleSearch}>
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </>
          }
        />

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
