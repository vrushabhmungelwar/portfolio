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

      <div className="projects">
        <div className="proj">
          <h3>Diary Manager</h3>
          <p>A website which stores upcomming events and Daily Diary</p>
          <h3>Technologies Used:</h3>
          <p>React.js, Node.js, Express.js, Mongodb</p>
        </div>
        {/* <img src=""></img> */}
        <div className="open-button">
          <div>
            <IconButton
              href="https://gifted-sinoussi-8c14db.netlify.app"
              target={"_blank"}
            >
              <OpenInNewIcon color="warning" fontSize="large" />
            </IconButton>
          </div>
          <div>
            <IconButton
              href="https://github.com/vrushabhmungelwar/diary-manager.git"
              target={"_blank"}
            >
              <GitHubIcon color="warning" fontSize="large" />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="projects">
        <div className="proj">
          <h3>Protected Routes & JWT Authentication</h3>
          <h3>Technologies Used:</h3>
          <p>React.js, Node.js, Express.js, Mongodb</p>
        </div>
        <div className="open-button">
          <div>
            <IconButton
              href="https://optimistic-goldstine-cb5efc.netlify.app"
              target={"_blank"}
            >
              <OpenInNewIcon color="warning" fontSize="large" />
            </IconButton>
          </div>
          <div>
            <IconButton
              href="https://github.com/vrushabhmungelwar/protected-routes.git"
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
