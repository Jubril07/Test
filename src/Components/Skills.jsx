import React from "react";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1 style={{ textAlign: "center" }}>My Skills</h1>
      <div className="skill-div">
        <div className="skill">
          <img src="react.png" alt="" />
          <br />
          <br />
          REACT
        </div>
        <div className="skill">
          <img src="html.png" alt="" />
          <br />
          <br />
          HTML5
        </div>
        <div className="skill">
          <img src="css.png" alt="" />
          <br /> <br />
          CSS3
        </div>
        <div className="skill">
          <img src="js.png" alt="" />
          <br />
          <br />
          JAVASCRIPT
        </div>
        <div className="skill">
          <img src="bootstrap.jpg" alt="" />
          <br />
          <br />
          BOOTSTRAP
        </div>
        <div className="skill">
          <img src="jquery.png" alt="" />
          <br />
          <br />
          JQUERY
        </div>
      </div>
    </div>
  );
};

export default Skills;
