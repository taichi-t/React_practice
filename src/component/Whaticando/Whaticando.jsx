import React from "react";
import "./whaticando.scss";
import Grid from "@material-ui/core/Grid";
import CircleGraph from "../CircleGraph/CircleGraph";
// import BarGraph from "../BarGraph/BarGraph";

const About = () => {
  return (
    <div className="whaticando box">
      <Grid container>
        <Grid item xs={12}>
          <h2 className="cando_title">What I can do</h2>
        </Grid>
        <Grid item xs={12}>
          <h3>Front End</h3>
        </Grid>

        <Grid item xs={4}>
          <div className="relative">
            <CircleGraph endAngle={-360} />
            <p className="circle_text">HTML</p>
          </div>
        </Grid>

        <Grid item xs={4}>
          <div className="relative">
            <CircleGraph endAngle={-250} />
            <p className="circle_text">CSS</p>
          </div>
        </Grid>

        <Grid item xs={4}>
          <div className="relative">
            <CircleGraph endAngle={-200} />
            <p className="circle_text">JacaSCript</p>
          </div>
        </Grid>

        <Grid item xs={1}>
          <div className="box1"></div>
        </Grid>
        <Grid item xs={4}>
          <div className="bargraph_left">
            <h3 className="sub_title">CMS/Frameworks</h3>
            <div className="bar-graph-container">
              <div className="slide-bottom2 bar-list">
                <h4>React.js</h4>
                <div className="bar-container">
                  <div className="Reactjs">
                    <p className="bar"></p>
                  </div>
                </div>
              </div>

              <div className="slide-bottom2 bar-list">
                <h4>Ruby on Rails</h4>
                <div className="bar-container">
                  <div className="RubyOnRails">
                    <p className="bar"></p>
                  </div>
                </div>
              </div>

              <div className="slide-bottom2 bar-list">
                <h4>Bootstrup</h4>
                <div className="bar-container">
                  <div className="Bootstrap">
                    <p className="bar"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className="box3"></div>
        </Grid>
        <Grid item xs={4}>
          <div className="bargraph_right">
            <h3 className="sub_title"> Graphic Design</h3>
            <div
              className="bar-graph-container"
              data-plugin-options='{"speed":500, "distance":50, "reverse":false}'
            >
              <div className="slide-bottom2 bar-list">
                <h4>PhotoShop</h4>
                <div className="bar-container">
                  <div className="PhotoShop">
                    <p className="bar"></p>
                  </div>
                </div>
              </div>

              <div className="slide-bottom2 bar-list">
                <h4>Illustrator</h4>
                <div className="bar-container">
                  <div className="Illustrator">
                    <p className="bar"></p>
                  </div>
                </div>
              </div>

              <div className="slide-bottom2 bar-list">
                <h4>Web Design</h4>
                <div className="bar-container">
                  <div className="WebDesign">
                    <p className="bar"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={1}>
          <div className="box5"></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
