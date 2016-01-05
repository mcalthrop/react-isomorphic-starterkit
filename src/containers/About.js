import React from "react";

export default (props) => {
  return (
    <div className="about-page">
      <h1>About</h1>
      <p>Hello World. About.</p>

      {props.children}
    </div>
  );
};
