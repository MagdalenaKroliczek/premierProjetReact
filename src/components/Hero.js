import React from "react";
import "./Hero.css";
import Kwiat from "../assets/kwiat.jpg";

const Hero = () => {
  return (
    <div className="heroContainer" style={{ backgroundImage: `url(${Kwiat})` }}>
      <div className="photo">
        <span class="text">Discover our bag collection</span>
      </div>
    </div>
  );
};

export default Hero;
