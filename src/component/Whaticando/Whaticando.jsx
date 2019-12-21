import React, { Component } from "react";
import "./whaticando.scss";
import Grid from "@material-ui/core/Grid";
import CircleGraph from "../CircleGraph/CircleGraph";
// import BarGraph from "../BarGraph/BarGraph";
import { Reveal, Animation } from "react-genie";

class whatICanDo extends Component {
  constructor(props) {
    super(props);
    this.state = { isAnimationActive: false };
  }
  render() {
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
            <Reveal
              animation={Animation.FadeInUp}
              delay={200}
              onShowDone={() => {
                this.setState({ isAnimationActive: true });
              }}
            >
              <div className="relative">
                <CircleGraph
                  endAngle={-360}
                  isAnimationActive={this.state.isAnimationActive}
                />
                <p className="circle_text">HTML</p>
              </div>
            </Reveal>
          </Grid>

          <Grid item xs={4}>
            <Reveal
              animation={Animation.FadeInUp}
              delay={200}
              onShowDone={() => {
                this.setState({ isAnimationActive: true });
              }}
            >
              <div className="relative">
                <CircleGraph
                  endAngle={-250}
                  isAnimationActive={this.state.isAnimationActive}
                />
                <p className="circle_text">CSS</p>
              </div>
            </Reveal>
          </Grid>

          <Grid item xs={4}>
            <Reveal
              animation={Animation.FadeInUp}
              delay={200}
              onShowDone={() => {
                this.setState({ isAnimationActive: true });
              }}
            >
              <div className="relative">
                <CircleGraph
                  endAngle={-200}
                  isAnimationActive={this.state.isAnimationActive}
                />
                <p className="circle_text">JacaScript</p>
              </div>
            </Reveal>
          </Grid>

          <Grid item xs={1}></Grid>

          <Grid item xs={4}>
            <div className="bargraph_left">
              <h3 className="sub_title">CMS/Frameworks</h3>

              <Reveal
                animation={Animation.FadeInUp}
                onShowDone={() => {
                  const elementLeft = document.querySelectorAll(
                    ".element-left"
                  );
                  elementLeft.forEach(e => {
                    e.classList.add("isActive");
                  });
                }}
              >
                <div className="bar-graph-container">
                  <div className="slide-bottom2 bar-list">
                    <h4>React, Redux</h4>
                    <div className="bar-container">
                      <div className="Reactjs element-left">
                        <p className="bar"></p>
                      </div>
                    </div>
                  </div>

                  <div className="slide-bottom2 bar-list">
                    <h4>Material-UI</h4>
                    <div className="bar-container">
                      <div className="RubyOnRails element-left">
                        <p className="bar"></p>
                      </div>
                    </div>
                  </div>

                  <div className="slide-bottom2 bar-list">
                    <h4>SCSS</h4>
                    <div className="bar-container">
                      <div className="Bootstrap element-left">
                        <p className="bar"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
            <div className="bargraph_right">
              <h3 className="sub_title"> Graphic Design</h3>

              <Reveal
                animation={Animation.FadeInUp}
                onShowDone={() => {
                  const elementRight = document.querySelectorAll(
                    ".element-right"
                  );
                  elementRight.forEach(e => {
                    e.classList.add("isActive");
                  });
                }}
              >
                <div
                  className="bar-graph-container"
                  data-plugin-options='{"speed":500, "distance":50, "reverse":false}'
                >
                  <div className="slide-bottom2 bar-list">
                    <h4>PhotoShop</h4>
                    <div className="bar-container">
                      <div className="PhotoShop element-right">
                        <p className="bar"></p>
                      </div>
                    </div>
                  </div>

                  <div className="slide-bottom2 bar-list">
                    <h4>Illustrator</h4>
                    <div className="bar-container">
                      <div className="Illustrator element-right">
                        <p className="bar"></p>
                      </div>
                    </div>
                  </div>

                  <div className="slide-bottom2 bar-list">
                    <h4>Web Design</h4>
                    <div className="bar-container">
                      <div className="WebDesign element-right">
                        <p className="bar"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
    );
  }
}
export default whatICanDo;
