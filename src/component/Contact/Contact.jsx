import React from "react";
import "./contact.scss";
import Grid from "@material-ui/core/Grid";
import { Link } from "@material-ui/core";

const Contact = () => {
  return (
    <Grid container>
      <Grid item xs={12} className="contact">
        <div className="contact_container">
          <div className="contact-text">
            <p className="contact-message">Drop me a line :&#041;</p>
            <Link
              href="mailto:t.tujioka.0925&#64;gmail.com"
              className="contact-email"
            >
              t.tujioka.0925&#64;gmail.com
            </Link>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Contact;
