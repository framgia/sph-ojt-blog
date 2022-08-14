import React from "react";
import ListItem from "../../components/ListItem/ListItem";
import Template from "../../components/Template/Template";
import useFetch from "../../helpers/useFetch";

const HomePage = () => {
  const { data } = useFetch("/posts/");

  return (
    <Template>
      <ListItem posts={data} />
    </Template>
  );
};

export default HomePage;
