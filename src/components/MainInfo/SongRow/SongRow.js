import React from "react";
import "./SongRow.scss";

const SongRow = () => {
  return (
    <div className="songRow">
      <img className="songRow__album" src='' alt="" />
      <div className="songRow__info">
        <h1>name</h1>
        <p>
          song name
        </p>
      </div>
    </div>
  );
}

export default SongRow;