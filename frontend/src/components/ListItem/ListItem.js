import React from "react";
import { Link } from "react-router-dom";
import { getDate } from "../../helpers/getDate";
import { getTitle } from "../../helpers/getTitle";
import { getContent } from "../../helpers/getContent";

const ListItem = ({ post }) => {
  return (
    <Link to={`/posts/${post.slug}`}>
      <div>
        <h1>{getTitle(post.title)}</h1>
        <h4>{post.author}</h4>
        <p>
          <span>{getDate(post.published_at)}</span>
        </p>
        <p dangerouslySetInnerHTML={{ __html: getContent(post.content) }} />
      </div>
    </Link>
  );
};

export default ListItem;
