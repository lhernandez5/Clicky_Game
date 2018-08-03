import React from "react";
import "./Header.css";

const Header = props => 
<div className="jumbotron jumbotron-fluid">
<div className="container">
  <h1 className="display-4">Click Game!</h1>
  <p className="lead">
    Click on any unique image once to earn points. If you click more than
    once you will reset your score to 0!
  </p>
  <p className="lead"></p>
</div>
</div>;

export default Header;
