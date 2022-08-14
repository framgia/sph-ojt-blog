import React from "react";

const Loader = () => {
  return (
    <div class="ui segment" style={{padding: "80px"}}>
      <div class="ui active inverted dimmer">
        <div class="ui medium text loader">Loading</div>
      </div>
      <p></p>
      <p></p>
    </div>
  );
};

export default Loader;
