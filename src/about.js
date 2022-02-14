import img from "./image/html.png";
import css from "./image/css.png";
import js from "./image/js.svg";
import git from "./image/git.png";

export function About() {
  return (
    <div className="about-cont">
      <h2>About Me</h2>
      <h3>Hello, My Name is Vrushabh Mungelwar.</h3>
      <p className="paragraph">
        I am a Bsc Graduate from Chandrapur, Maharashtra, India.<br></br>I am a
        MERN-Stack Developer and i love to create web apps<br></br> that would
        make life easy and enjoyable for people.
      </p>
      <p className="paragraph">Currently, I am looking for a Job.</p>
      <h3>Skills:</h3>
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
      </div>
    </div>
  );
}
