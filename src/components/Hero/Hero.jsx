import React from "react";
import "./hero.css";
import profile_img from "../../assets/profile_img.png";
const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="Profile" />
      <h1>
        <span>Hello, I'm Courtney Ross</span>
      </h1>
      <h3>
        I am a Full Stack Engineer/Developer, Mentor, Advocate, and Creative
        from Georgia, USA with 2 years of experience with companies like Amazon,
        Codepath, and JPMorgan Chase.
      </h3>
      <div className="hero-action">
        <div className="hero-connect">Let's Connect</div>
        <div className="hero-resume">View My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
