import React from "react";
import ListItem from "../../components/ListItem/ListItem";
import Template from "../../components/Template/Template";
import useFetch from "../../helpers/useFetch";

const HomePage = () => {
  const { data, loading } = useFetch("/posts/");

  return (
    <Template>
      <ListItem posts={data} loading={loading} />
    </Template>
  );
};

export default HomePage;
