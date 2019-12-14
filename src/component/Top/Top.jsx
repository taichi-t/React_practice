import React from "react";
import "./top.scss";
import Grid from "@material-ui/core/Grid";

export function Top() {
  return (
    <Grid container className="works">
      <Grid item xs={12}>
        <div className="top">
          <div className="top_bgc">
            <p className="top_text">
              I'm Taichi Tsujioka. <br />
              Japanese Front-end Developer,
              <br />
              based in Vancouver.
            </p>
            <div className="scroll-button">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Top;
