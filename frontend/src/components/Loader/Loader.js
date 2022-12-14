import React from "react";

const Loader = () => {
  return (
    <div className="ui segment" style={{ padding: "80px" }}>
      <div className="ui active inverted dimmer">
        <div className="ui medium text loader">Loading</div>
      </div>
    </div>
  );
};

export default Loader;
