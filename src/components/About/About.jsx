import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.png";
import about_profile from "../../assets/about_profile.png";

const About = () => {
  const skills = [
    { name: "Python", percent: 90 },
    { name: "React", percent: 83 },
    { name: "Java", percent: 76 },
    { name: "CSS", percent: 83 },
    { name: "REST API", percent: 76 },
    { name: "Git", percent: 70 },
    { name: "C", percent: 50 },
    { name: "JavaScript", percent: 83 },
    { name: "SQL", percent: 76 },
    { name: "Flutter", percent: 85 },
    { name: "Dart", percent: 85 },
    { name: "Springboot", percent: 76 },
    { name: "Postgres", percent: 76 },
  ];

  const achievements = [
    { title: "2+", description: "Years Experience" },
    { title: "Web Development", description: "Certified" },
    { title: "GIT", description: "Certified" },
    {
      title: "Awarded",
      description: (
        <>
          <p> Uber DEI Advocate</p>
          <p>JPMorgan Chase Code for Good Honorable Team Member</p>
          <p>AmazonNext Scholar</p>
          <p>RISE In Computing Scholar</p>
        </>
      ),
    },
    { title: "5+", description: "Projects Completed" },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 5 },
    desktop: { breakpoint: { max: 1200, min: 900 }, items: 4 },
    tablet: { breakpoint: { max: 900, min: 600 }, items: 2 },
    mobile: { breakpoint: { max: 600, min: 0 }, items: 1 },
  };

  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_profile} alt="About Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m Courtney Ross, a Computer Science undergraduate with a passion
              for blending technology and creativity.
            </p>
            <p>
              As a full-stack software engineering intern at JPMorgan Chase, I
              gained hands-on experience building solutions that made complex
              information easier to understand and use, while learning the
              importance of collaboration and thoughtful design.
            </p>
            <p>
              Beyond internships, I’ve explored the intersection of design and
              tech through projects that range from mobile apps to interactive
              web experiences, always striving to create tools that are both
              functional and imaginative.
            </p>
            <p>
              I also mentor peers through RISE in Computing and CodePath,
              supporting others in technical growth and career navigation. My
              commitment to impact extends globally, where I volunteered during
              a study abroad program to design an advocacy webpage supporting
              community initiatives. These experiences fuel my drive to not only
              solve problems with code, but also empower people and communities
              through accessible, creative digital solutions.
            </p>
          </div>
          <div className="about-skills-carousel">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000} // scrolls every 2 seconds; adjust as needed
              arrows={true}
              showDots={true}
              containerClass="carousel-container"
              itemClass="carousel-item-padding-40-px"
            >
              {skills.map((skill, idx) => (
                <div className="skill-box" key={skill.name}>
                  <span className="title">{skill.name}</span>
                  <div className="skill-bar">
                    <span
                      className="skill-per"
                      style={{
                        width: `${skill.percent}%`,
                        background:
                          "linear-gradient(90deg, #cc6c92 0%, #4c3a42 100%)",
                        animationDelay: `${0.1 + idx * 0.05}s`,
                      }}
                    >
                      <span className="tooltip">{skill.percent}%</span>
                    </span>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="about-achieve">
            {achievements.map((achieve, index) => (
              <div className="about-achieve-item" key={index}>
                <h2>{achieve.title}</h2>
                <p>{achieve.description}</p>
                {index < achievements.length - 1 && <hr />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
