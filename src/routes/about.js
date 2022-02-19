import img from "../image/html.png";
import css from "../image/css.png";
import js from "../image/js.svg";
import git from "../image/git.png";
import bootstrap from "../image/bootstrap.png";
import mui from "../image/mui.png";
import react from "../image/react.png";
import node from "../image/node.jpeg";
import express from "../image/express.jpg";
import mongo from "../image/mongo.png";

export function About() {
  return (
    <div className="about-cont">
      <h2>About Me</h2>
      <h3>Hello, My Name is Vrushabh Mungelwar.</h3>
      <p className="paragraph">
        I am a B.sc Graduate from Chandrapur, Maharashtra, India.<br></br>I am a
        MERN-Stack Developer and I love to create web apps<br></br> that would
        make life easy and enjoyable for people.
      </p>
      <p className="paragraph">Currently, I am looking for a Job.</p>
      <h3 className="skills-head">Skills:</h3>
      <div className="skills-cont">
        <div className="skills">
          <img src={img} alt="html" className="img"></img>
          <h3 className="skill-tag">Html</h3>
        </div>

        <div className="skills">
          <img src={css} alt="css" className="img"></img>
          <h3 className="skill-tag">CSS</h3>
        </div>

        <div className="skills">
          <img src={js} alt="js" className="img"></img>
          <h3 className="skill-tag">JavaScript</h3>
        </div>

        <div className="skills">
          <img src={git} alt="git" className="img"></img>
          <h3 className="skill-tag">Git</h3>
        </div>

        <div className="skills">
          <img src={bootstrap} alt="bootstrap" className="img"></img>
          <h3 className="skill-tag">Bootstrap</h3>
        </div>

        <div className="skills">
          <img src={mui} alt="mui" className="img"></img>
          <h3 className="skill-tag">Material UI</h3>
        </div>

        <div className="skills">
          <img src={mongo} alt="mongo" className="img"></img>
          <h3 className="skill-tag">MongoDB</h3>
        </div>

        <div className="skills">
          <img src={express} alt="express" className="img"></img>
          <h3 className="skill-tag">ExpressJS</h3>
        </div>

        <div className="skills">
          <img src={react} alt="react" className="img"></img>
          <h3 className="skill-tag">ReactJS</h3>
        </div>

        <div className="skills">
          <img src={node} alt="node" className="img"></img>
          <h3 className="skill-tag">NodeJS</h3>
        </div>
      </div>
    </div>
  );
}
