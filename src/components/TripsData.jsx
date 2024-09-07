import React from "react";

export default function TripsData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.img} alt="" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.para}</p>
    </div>
  );
}
