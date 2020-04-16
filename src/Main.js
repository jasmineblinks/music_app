import React from "react";
import partyImage from "./assets/img/px7.jpeg";

const Main = () => {
  return (
    <main className="container flex">
      <div className="music-info">
        <h1 className="title">PARTY NEXT DOOR</h1>
        <h3 className="sub-title">It's time to party</h3>
        <div className="tags">
          <button className="btn-white">#rnb</button>
          <button className="btn-white">#Soul</button>
          <button className="btn-white">#Let's party</button>
          <button className="btn-white">#easyvibes</button>
        </div>
      </div>
      <div className="music-cover-image">
        <img src={partyImage} alt="album cover" />
      </div>
    </main>
  );
};

export default Main;
