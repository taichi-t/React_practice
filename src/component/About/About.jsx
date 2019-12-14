import React from "react";
import "./about.scss";
import Grid from "@material-ui/core/Grid";
import me from "../../image/face.png";

const About = () => {
  return (
    <div className="about">
      <Grid container>
        <Grid item xs={12}>
          <h2 className="about_title">About</h2>
        </Grid>
        <Grid item xs={6}>
          <div className="container">
            <img src={me} alt="me" className="img" />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="container">
            <div className="me_discription">
              My name is “Taichi Tsujioka”. I’m a Front-end Developer, currently
              living in Vancouver, Canada. I’m really passionate about building
              and designing websites with up-to-date programming languages and
              technologies. On my daily basis, I constantly learn new
              programming languages and brush up on my skills. When I’m facing
              bugs and problems, I manage to find the most efficient and the
              best way to solve the issues with a logical mindset
            </div>

            <div className="resume_button_container">
              <button type="button" className="resume_button">
                <span className="button_text">Resume</span>
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
