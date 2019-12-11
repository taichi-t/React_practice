import React from "react";
import { Link } from "react-router-dom";
import "./works1.scss";
import Grid from "@material-ui/core/Grid";
import keyboard from "../../image/keyboard.jpg";

export function Works1() {
  return (
    <React.Fragment>
      <Link className="work_link">
        <Grid container className="works">
          <Grid item xs={8}>
            <img src={keyboard} alt="" className="work_img" />
          </Grid>
          <Grid item xs={4}>
            <div className="work_contents">
              <div className="work_contents_main">
                <p className="work_title">React made App using Unsplash API</p>
                <p className="work_tool">React.js</p>
                <div class="button_container">
                  <Link className="work-button">
                    <p className="button_text">View more ...</p>
                  </Link>
                </div>
              </div>
              <div class="triangle"></div>
            </div>
          </Grid>
        </Grid>
      </Link>
    </React.Fragment>
  );
}

export default Works1;
