import React from "react";
import "./Character.css";

const Character = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.image} src={props.image} onClick={()=>props.handleIncrement(props.id)} className="clickItem"/>
    </div>
  </div>
);

export default Character;
