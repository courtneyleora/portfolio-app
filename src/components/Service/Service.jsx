import React from "react";
import "./Service.css";
import theme_pattern from "../../assets/theme_pattern.png";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Service = () => {
  return (
    <div className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="Services-container">
        {Services_Data.map((service, index) => {
          return (
            <div className="service-format" key={index}>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="service-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="Arrow Icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
