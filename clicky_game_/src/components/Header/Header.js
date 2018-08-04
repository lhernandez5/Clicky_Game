import React from "react";
import "./Header.css";

const Header = props => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Clicky Game!</h1>
      <p className="lead">
        Click on any unique image once to earn points. If you click more than
        once you will reset your score to 0!
      </p>
    </div>
    <div className="scoreDiv">{props.children}</div>
  </div>
);

export default Header;
