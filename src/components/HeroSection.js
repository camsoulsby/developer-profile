import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <img className="hero-image" alt="Cam Soulsby" src="./images/cam.jpg" />

      <h1>Cam Soulsby</h1>
      <p> Web Developer</p>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          path="/about"
        >
          ABOUT ME
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          path="/contact"
        >
          GET IN TOUCH <i className="fas fa-arrow-right"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
