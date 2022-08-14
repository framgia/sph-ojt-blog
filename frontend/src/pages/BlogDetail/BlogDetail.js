import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../API";
import Comments from "./Comments";
import { getDate } from "../../helpers/getDate";
import Template from "../../components/Template/Template";

const BlogDetail = () => {
  const [post, setPost] = useState([]);
  const { slug: postSlug } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    API.get(`/posts/${postSlug}/`)
      .then((res) => setPost(res.data))
      .catch(() => navigate("/404"));
  }, [postSlug, navigate]);

  return (
    <Template>
      <div className="ui raised very padded text container" style={{paddingBottom: "120px"}}>
        <div>
          <h4 className="ui left aligned sub header">
            {getDate(post.published_at)}
          </h4>
          <h1 className="ui left aligned header">{post.title}</h1>
          <p className="ui left aligned" style={{ fontSize: "1em" }}>
            Posted by {post.author}
          </p>
        </div>
        <div className="ui hidden divider" />
        <div className="ui left aligned text container segment ">
          <div className="ui ">
            <div className="image header">
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="paragraph">
              <p style={{fontSize:"18px"}} dangerouslySetInnerHTML={{ __html: post.content }} />
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
    </Template>
  );
};

export default BlogDetail;
