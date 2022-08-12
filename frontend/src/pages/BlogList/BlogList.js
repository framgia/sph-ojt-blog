import React from "react";
import PaginationList from "./PaginationList";
import BlogContainer from "./BlogContainer";
import Template from "../../components/Template/Template";
import "./BlogList.css";

const BlogList = () => {
  return (
    <Template>
      <div className="blog_list">
        <div className="ui center aligned text container">
          <h1>Post Things that Matter!</h1>
        </div>
        <div className="ui center container">
          <BlogContainer />
          <BlogContainer />
          <BlogContainer />
        </div>
        <div className="ui center aligned container">
          <PaginationList />
        </div>
      </div>
    </Template>
  );
};

export default BlogList;
