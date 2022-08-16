import React from "react";
import { Pagination } from "semantic-ui-react";

import ListItem from "./ListItem";
import useFetch from "../../helpers/useFetch";

const PaginationList = () => {
  const { data, handleChange, activePage, pageCount, loading } = useFetch("/posts/");

  return (
    <>
      <div className="ui center container">
        <ListItem posts={data} loading={loading}/>
      </div>
      <div
        className="ui center aligned container"
        style={{ paddingBottom: "130px" }}
      >
        <Pagination
          activePage={activePage}
          onPageChange={handleChange}
          totalPages={pageCount}
          ellipsisItem={"..."}
        />
      </div>
    </>
  );
};

export default PaginationList;
