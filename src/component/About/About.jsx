import React, { Component } from "react";
import "./about.scss";
import Grid from "@material-ui/core/Grid";
import { Reveal, Animation, RevealGlobalStyles } from "react-genie";
import me from "../../image/face.png";
import passionate from "../../image/passion.svg";
import ambition from "../../image/ambition.svg";
import team from "../../image/team.svg";
import metime from "../../image/metime.svg";

class About extends Component {
  render() {
    return (
      <div className="about">
        <RevealGlobalStyles />
        <Grid container>
          <Grid item xs={12}>
            <h2 className="about_title">About</h2>
          </Grid>

          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <div className="flex">
              <div className="container">
                <img src={me} alt="me" className="img" />
              </div>
              <div className="w_50">
                <Reveal animation={Animation.FadeInUp} delay={400}>
                  <div className="bubble06">
                    Hi there! <br />
                    My name is Taichi Tsujioka.
                  </div>
                </Reveal>
              </div>
            </div>
          </Grid>
          <Grid item xs={1}></Grid>

          <Grid item xs={12}>
            <Reveal animation={Animation.FadeInUp} delay={550}>
              <div className="discription_container flex">
                <div className="me_discription_left">
                  <img src={passionate} alt="" className="svg" />
                  <h5 className="m">I'm really passionate about ...</h5>
                  <p>
                    codingand designing. I've always enjoyed being creative,
                    ever since I was a child. I get a sense of satisfaction and
                    joy whenever what I create brings others happiness.
                  </p>
                </div>
                <div className="me_discription_right">
                  <img src={ambition} alt="" className="svg" />
                  <h5 className="m">My ambition is ...</h5>
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

          <Grid item xs={12}>
            <Reveal animation={Animation.FadeInUp} delay={550}>
              <div className="discription_container flex">
                <div className="me_discription_left">
                  <img src={team} alt="" className="svg" />
                  <h5 className="m">When I work on a project, ...</h5>
                  <p>
                    I'm a great team player. I'm the sort of person who helps
                    others when they're stuck with buggy codes and manages to
                    find efficient solutions logically. On top of that, I'm
                    always on time.
                  </p>
                </div>
                <div className="me_discription_right">
                  <img src={metime} alt="" className="svg" />
                  <h5 className="m">Me time involves ...</h5>
                  <p>
                    taking photos—especially of interesting architecture—working
                    out, coming up with new beats, and camping. I also love
                    coding and programming in my spare time.
                  </p>
                </div>
              </div>
            </Reveal>
          </Grid>
          <Grid item xs={12}>
            <Reveal animation={Animation.FadeInUp} delay={400}>
              <div className="resume_button_container">
                <button type="button" className="resume_button">
                  <span className="button_text">Resume</span>
                </button>
              </div>
            </Reveal>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default About;