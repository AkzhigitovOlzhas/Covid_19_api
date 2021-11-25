import React from "react";
import "./style.css";
export const Loader = ({ type }) => {
  if (type === "ellipsis")
    return (
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  else return <div className="lds-dual-ring"></div>;
};
