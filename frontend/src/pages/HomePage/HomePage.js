import React, { useState, useEffect } from "react";
import API from "../../API";
import ListItem from "../../components/ListItem/ListItem";
import Template from "../../components/Template/Template";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get("/posts/")
      .then((res) => setPosts(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Template>
      {posts.map((post, index) => (
        <ListItem key={index} post={post} />
      ))}
    </Template>
  );
};

export default HomePage;
