import React from "react";
import PaginationList from "./PaginationList";
import Template from "../../components/Template/Template";
import "./BlogList.css";

const BlogList = () => {
  return (
    <Template>
      <div className="ui center aligned text container">
        <h1 className="bloglist-h1 ">Post Things That Matter</h1>
      </div>
      <PaginationList />
    </Template>
  );
};

export default BlogList;
