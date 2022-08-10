import React from "react";
import { Link } from "react-router-dom";

const getTitle = (post) => {
  let title = post.title.split("\n")[0];

  if (title.length > 45) {
    return title.slice(0, 45);
  }

  return title;
};

const getDate = (post) => {
  const date = new Date(post.published_at);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleString("en-US", options);
};

const getContent = (post) => {
  let title = getTitle(post);
  let content = post.content.replaceAll("\n", " ");
  content = content.replaceAll(title, "");

  if (content.length > 100) {
    return content.slice(0, 200) + "...";
  } else {
    return content;
  }
};

const ListItem = ({ post }) => {
  return (
    <Link to={`/posts/${post.slug}`}>
      <div>
        <h1>{post.title}</h1>
        <h4>{post.author}</h4>
        <p>
          <span>{getDate(post)}</span>
        </p>
        <p dangerouslySetInnerHTML={{ __html: getContent(post) }} />
      </div>
    </Link>
  );
};

export default ListItem;
