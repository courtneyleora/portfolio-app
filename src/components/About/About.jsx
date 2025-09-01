import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.png";
import about_profile from "../../assets/about_profile.png";

const About = () => {
  const skills = [
    { name: "Python", width: "100%" },
    { name: "React", width: "70%" },
    { name: "Java", width: "70%" },
    { name: "CSS", width: "100%" },
    { name: "REST API", width: "90%" },
    { name: "Git", width: "100%" },
    { name: "C", width: "50%" },
    { name: "JavaScript", width: "80%" },
    { name: "SQL", width: "90%" },
    { name: "Flutter", width: "90%" },
    { name: "Dart", width: "90%" },
    { name: "Springboot", width: "70%" },
    { name: "Postgres", width: "90%" },
  ];

  const achievements = [
    { title: "2+", description: "Years Experience" },
    { title: "Web Development", description: "Certified" },
    { title: "GIT", description: "Certified" },
    {
      title: "Awarded",
      description: (
        <>
          <p>Uber DEI Advocate</p>
          <p>JPMorgan Chase Code for Good Honorable Team Member</p>
          <p>AmazonNext Scholar</p>
          <p>RISE In Computing Scholar</p>
        </>
      ),
    },
    { title: "5+", description: "Projects Completed" },
  ];

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
          <div className="about-skills">
            {skills.map((skill, index) => (
              <div className="about-skill" key={index}>
                <p>{skill.name}</p>
                <hr style={{ width: skill.width }} />
              </div>
            ))}
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
