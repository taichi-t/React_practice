import React from "react";
import "./topLink.scss";
import Grid from "@material-ui/core/Grid";
import { Link } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const Contact = () => {
  return (
    <Grid container>
      <Grid item xs={12} cla>
        <div className="toToppage">
          <Link href="" className="toppage-link" id="scroll">
            <div>
              <span className="up">
                <ArrowUpwardIcon style={{ fontSize: 25 }} />
              </span>
            </div>
          </Link>
        </div>
      </Grid>
    </Grid>
  );
};

export default Contact;
