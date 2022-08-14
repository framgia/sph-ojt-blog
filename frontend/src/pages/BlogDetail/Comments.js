import React from "react";

const Comments = () => {
  return (
    <>
      <div>
        <button className="ui right floated blue button">Comment </button>
      </div>
      <div className="ui hidden section divider" />
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        <div className="comment">
          {/* <div className="avatar"> */}
          {/* <img src="/images/avatar/small/matt.jpg"> */}
          {/* </div> */}
          <div className="content">
            <div className="author">
              Matt
              <div className="metadata">
                <span className="date">Today at 5:42PM</span>
              </div>
            </div>
            <div className="text">How artistic!</div>
          </div>
        </div>
        <div className="comment">
          {/* <div className="avatar"> */}
          {/* <img src="/images/avatar/small/elliot.jpg"> */}
          {/* </div> */}
          <div className="content">
            <div className="author">
              Elliot Fu
              <div className="metadata">
                <span className="date">Yesterday at 12:30AM</span>
              </div>
            </div>
            <div className="text">
              <p>This has been very useful for my research. Thanks as well!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
