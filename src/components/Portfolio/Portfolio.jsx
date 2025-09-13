import React from "react";
import "./Portfolio.css";
import theme_pattern from "../../assets/theme_pattern.png";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="portfolio-container">
        {mywork_data.map((work, index) => {
          return <img src={work.w_img} alt={work.title} key={index} />;
        })}
      </div>
      <button className="mywork-showmore">
        <span>Show More</span>
        <span className="bubble-layer bubble-1"></span>
        <span className="bubble-layer bubble-2"></span>
        <span className="bubble-layer bubble-3"></span>
        <span className="bubble-layer bubble-4"></span>
        <span className="bubble-layer bubble-5"></span>
        <span className="bubble-layer bubble-6"></span>
        <span className="bubble-layer bubble-7"></span>
      </button>
    </div>
  );
};

export default Portfolio;
