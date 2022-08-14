import React from "react";
import { Link } from "react-router-dom";
import { getDate } from "../../helpers/getDate";
import { getTitle } from "../../helpers/getTitle";
import { getContent } from "../../helpers/getContent";
import Loader from "../Loader/Loader";
import { Card } from "semantic-ui-react";
import styles from "./styles.module.css";

const ListItem = ({ posts, loading }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {posts.map((post, index) => (
        <div key={index} className={styles.listContainer}>
          <Card centered fluid link>
            <Card.Content>
              <Link to={`/posts/${post.slug}`} style={{ color: "black" }}>
                <Card.Header as="h1" className={styles.listHeader}>
                  {getTitle(post.title)}
                </Card.Header>
                <div className="ui fitted divider" />
                <Card.Meta>Posted by {post.author}</Card.Meta>
                <Card.Description className={styles.listContent}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: getContent(post.content),
                    }}
                  />
                </Card.Description>
                <Card.Meta>{getDate(post.published_at)}</Card.Meta>
              </Link>
            </Card.Content>
          </Card>
        </div>
      ))}
    </>
  );
};

export default ListItem;
