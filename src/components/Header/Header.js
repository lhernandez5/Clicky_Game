import React from "react";
import "./Header.css";

const Header = props => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="title">Clicky Game!</h1>
      <p className="lead">
        Click on any image ONCE to earn a point. If you click an image more than once you will reset your score to 0!
      </p>
    </div>
    <div className="scoreDiv">{props.children}</div>
  </div>
);

export default Header;
