import React, { useState } from "react";
import my_worship from "./assets/music/my_worship"
import glimmer from "./assets/music/Glimmer In the Dust.mp3";
import goodGoodFather from "./assets/music/Good_Good_Father.mp3";

const Player = () => {
  const [buttonType, setButtonType] = useState("fa-play")
  const [playStatus, setPlayStatus] = useState("play");
  const playAudio = () => {
    let audio = document.getElementById("music");
    let status = playStatus;
    if (status === "play") {
      status = "pause";
      audio.play();
      setButtonType("fa-pause")
    } else if (status === "pause") {
      status = "play";
      audio.pause();
      setButtonType("fa-play")
    }
    setPlayStatus(status);
  };

  const stopAudio = () => {
    // let audio = document.getElementById("music");
    // setPlayStatus("play");
    // setButtonType("fa-play")
  }

  return (
    <footer>
      <div className="container control-bar">
        <div className="flex items-center">
          <button
            className="control-btn play-btn"
            id="btn-play-pause"
            onClick={playAudio}
          >
            <i id="play-pause-button" className={`fas ${buttonType} btn-red`}></i>
          </button>

          <button
            className="control-btn play-btn"
            id="btn-play-pause"
            onClick={stopAudio}
          >
            <i id="play-pause-button" className={`fas fa-stop btn-red`}></i>
          </button>

          <div className="artist-info">
            <h3>Phil Thompson</h3>
            <p>My Worship</p>
          </div>
        </div>
        <audio id="music">
          <source src={my_worship} />
          <source src={glimmer} />
          <source src={goodGoodFather} />
        </audio>

        <div className="players flex items-center">
          <button id="heart" className="control-btn">
            {" "}
            <i className="fas fa-heart"></i>
          </button>
          <button id="redo" className="control-btn">
            <i className="fas fa-redo"></i>
          </button>
          <button id="download" className="control-btn">
            <i className="fas fa-download"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Player;
