import React from "react";
import "./Card.component.css";

export default function Card(props) {
  return (
    <div className="creditcard">
      <h1 className="right-al">Company Name</h1>
      <img
        className="puce"
        src="https://s4i6r5r7.stackpathcdn.com/wp/wp-content/themes/simoptions/assets/img/sim-card-bg-min.png"
        alt=""
      ></img>
      <div className="infos">
        <p>{props.number}</p>
        <p className="right-al">{String(props.infos.valid).padEnd(5, "*")}</p>
        <p>{props.infos.name.toUpperCase()}</p>
      </div>
      <img
        className="smartcard"
        src="https://i.pinimg.com/originals/28/99/08/289908a6bb2d5f2ab846f0606e72e0fe.png"
        alt=""
      ></img>
    </div>
  );
}
