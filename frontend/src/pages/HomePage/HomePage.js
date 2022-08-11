import React, { useState, useEffect } from "react";
import API from "../../API";
import NavBar from "../Template/NavBar"
import ListItem from "../ListItem/ListItem";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get("/posts/")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      {posts.map((post, index) => (
        <ListItem key={index} post={post} />
      ))}
    </div>
  );
};

export default HomePage;
