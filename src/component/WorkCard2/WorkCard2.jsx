import React from "react";
import { Link } from "react-router-dom";
import "./workCard2.scss";
import Grid from "@material-ui/core/Grid";
import cafe from "../../image/coffeehouse.jpg";

export function WorkCard2() {
  return (
    <React.Fragment>
      <div className="works2">
        <Link to="work1" className="work_link">
          <Grid container>
            <Grid item xs={4}>
              <div className="work_contents">
                <div className="work_contents_main">
                  <p className="work_title">Rcafe’s website</p>
                  <p className="work_tool">HTML/CSS/JavaScript</p>
                  <div className="button_container">
                    <div to="work1" className="work-button">
                      <p className="button_text">View more ...</p>
                    </div>
                  </div>
                </div>
                <div className="triangle"></div>
              </div>
            </Grid>
            <Grid item xs={8}>
              <div className="work_img_container">
                <img src={cafe} alt="" className="work_img" />
              </div>
            </Grid>
          </Grid>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default WorkCard2;
