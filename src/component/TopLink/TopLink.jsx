import React from "react";
import "./topLink.scss";
import Grid from "@material-ui/core/Grid";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
// import anime from "animejs/lib/anime.es.js";

const Contact = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className="toToppage">
          <button className="toppage-link btn">
            <div>
              <span className="up">
                <ArrowUpwardIcon style={{ fontSize: 25 }} />
              </span>
            </div>
          </button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Contact;
