import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
export function Projects() {
  return (
    <div className="project-cont">
      <h2>Projects</h2>

      <div className="projects">
        <div className="proj">
          <h3>Login and SignUp Page</h3>
          <p>Login,SignUp and forgot password with Email Verification.</p>
          <h3>Technologies Used:</h3>
          <p>React.js, Node.js, Express.js, Mongodb</p>
        </div>
        {/* <img src=""></img> */}
        <div className="open-button">
          <div>
            <IconButton
              href="https://xenodochial-curie-f10544.netlify.app"
              target={"_blank"}
            >
              <OpenInNewIcon color="warning" fontSize="large" />
            </IconButton>
          </div>
          <div>
            <IconButton
              href="https://github.com/vrushabhmungelwar/forgot-password-frontend.git"
              target={"_blank"}
            >
              <GitHubIcon color="warning" fontSize="large" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
