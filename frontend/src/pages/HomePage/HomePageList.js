import React from "react";
import { Link } from "react-router-dom";
import { getDate } from "../../helpers/getDate";
import { getTitle } from "../../helpers/getTitle";
import { getContent } from "../../helpers/getContent";
import Loader from "../../components/Loader/Loader";
import { Card } from "semantic-ui-react";
import styles from "./styles.module.css";

const HomePageList = ({ posts, loading }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Link to={`/posts/${posts[0].slug}`} style={{ color: "black" }}>
        <div className="featured-article" style={{ paddingBottom: "100px" }}>
          <img
            className="featured-article-photo"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="blog-pic"
          />
          <span className="fetuared-article-details">
            <h1 className="featured-article-title">
              {getTitle(posts[0].title)}
            </h1>
            <div className="featured-article-author">
              <div className="author">
                <div>Posted by {posts[0].author}</div>
              </div>
            </div>
            <div className="featured-article-desc">
              <p
                dangerouslySetInnerHTML={{
                  __html: getContent(posts[0].content),
                }}
              />
            </div>
            <div className="featured-article-date">
              {getDate(posts[0].published_at)}
            </div>
          </span>
        </div>
      </Link>

      <div
        className="ui stackable two column grid"
        style={{ paddingBottom: "100px" }}
      >
        {posts.slice(1).map((post, index) => (
          <div key={index} className="column">
            <div className={styles.listContainer}>
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
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePageList;
