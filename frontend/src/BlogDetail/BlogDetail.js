import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Template/NavBar"
import Footer from "../Template/Footer"
import API from "../API";
import Comments from "./Comments"

const BlogDetail = () => {
  const [post, setPost] = useState([]);
  const { slug: postSlug } = useParams();


  useEffect(() => {
    API.get(`/posts/${postSlug}/`)
      .then((res) => setPost(res.data))
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status === 404) {
          window.location.href = "/notfound";
          return;
        }
      });
  }, [postSlug]);

  const getDate = () => {
    const date = new Date(post.published_at);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  
    return date.toLocaleString("en-US", options);
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="ui raised very padded text container">
        <div>
          <h4 className="ui left aligned sub header">{getDate()}</h4>
          <h1 className="ui left aligned header">{post.title}</h1>
          <p className="ui left aligned" style={{fontSize:"1em"}}>Posted by {post.author}</p>
        </div>
        <div className="ui hidden divider"></div>
        <div className="ui left aligned text container segment ">
          <div className="ui ">
            <div className="image header">
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="paragraph">
              <p dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </div>

        <div className="form container">
          <div className="ui form">
            <div className="field">
              <textarea
                placeholder="What are your thoughts?"
                defaultValue=""
              ></textarea>
            </div>
          </div>
        </div>
        <div className="ui hidden divider" />
        <Comments />
      </div>
	  <Footer />
    </div>
  );
};

export default BlogDetail;
