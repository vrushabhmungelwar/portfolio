import { Button } from "@mui/material";

export function Home() {
  return (
    <div className="Home-cont">
      <h3>Hi,</h3>
      <h1>My name is Vrushabh Mungelwar</h1>
      <h2>I am a Full-Stack Developer</h2>
      <Button
        href="https://drive.google.com/file/d/1jmuhJlK80jx8-zlrsNOA0qQewRGTFvap/view"
        color="info"
        variant="contained"
        target="_blank"
      >
        Resume
      </Button>
    </div>
  );
}
