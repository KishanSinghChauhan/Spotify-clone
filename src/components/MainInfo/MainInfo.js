import React from "react";
import "./MainInfo.scss";
import Header from "./Header/Header";

const MainInfo = ({ spotify }) => {
  return (
    <div className="main">
      <Header spotify={spotify} />
    </div>
  );
}

export default MainInfo;
