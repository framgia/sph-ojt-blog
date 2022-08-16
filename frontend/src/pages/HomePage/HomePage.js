import React from "react";
import "./HomePage.css";

import Template from "../../components/Template/Template";
import Loader from "../../components/Loader/Loader";
import HomePageList from "./HomePageList";
import useFetch from "../../helpers/useFetch";

const HomePage = () => {
  const { data, loading } = useFetch("/posts/");
  return (
    <Template>
      <div className="post-matters">
        <div className="ui center aligned header">
          <h1 className="homeLogoName">SunPosterisk*</h1>
        </div>
      </div>
      <div className="placholders-temp">
        {loading ? <Loader /> : <HomePageList posts={data} />}
      </div>
    </Template>
  );
};

export default HomePage;
