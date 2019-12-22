import React, { Component } from "react";
import "./about.scss";
import Grid from "@material-ui/core/Grid";
import { Reveal, Animation, RevealGlobalStyles } from "react-genie";
import me from "../../image/face.png";

class About extends Component {
  render() {
    return (
      <div className="about">
        <RevealGlobalStyles />
        <Grid container>
          <Grid item xs={12}>
            <h2 className="about_title">About</h2>
          </Grid>

          <Grid item xs={12}>
            <Reveal animation={Animation.FadeInUp} delay={250}>
              <div className="container">
                <img src={me} alt="me" className="img" />
              </div>
            </Reveal>
          </Grid>

          <Grid item xs={6}>
            <Reveal animation={Animation.FadeInUp} delay={250}>
              <div className="container">
                <div className="me_discription">
                  <h5>I'm really passionate about</h5>
                  <p>
                    codingand designing. I've always enjoyed being creative,
                    ever since I was a child. I get a sense of satisfaction and
                    joy whenever what I create brings others happiness.
                  </p>
                  <h5>My ambition is </h5>
                  <p>
                    to create my own web service, so I'm very interested in
                    back-end programming. I believe in continuous learning and
                    am always looking to brush up my skills. I see myself
                    becoming a web developer who understands the ins and outs of
                    what back-end developers and designers do as well.
                  </p>
                </div>
              </div>
            </Reveal>
          </Grid>
          <Grid item xs={6}>
            <Reveal animation={Animation.FadeInUp} delay={250}>
              <div className="container">
                <div className="me_discription">
                  <h5>When I work on a project,</h5>
                  <p>
                    I'm a great team player. I'm the sort of person who helps
                    others when they're stuck with buggy codes and manages to
                    find efficient solutions logically. On top of that, I'm
                    always on time.
                  </p>
                  <h5>Me time involves</h5>
                  <p>
                    taking photos—especially of interesting architecture—working
                    out, coming up with new beats, and camping. I also love
                    coding and programming in my spare time.
                  </p>
                </div>
              </div>
            </Reveal>
          </Grid>
          <Grid>
            <div className="resume_button_container">
              <button type="button" className="resume_button">
                <span className="button_text">Resume</span>
              </button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default About;
