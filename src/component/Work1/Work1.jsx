import React from "react";
import "./work1.scss";
import Grid from "@material-ui/core/Grid";
import { Reveal, Animation, RevealGlobalStyles } from "react-genie";
import { Link } from "@material-ui/core";
import TopLink from "../TopLink/TopLink";
import Footer from "../Footer/Footer";
import devices from "../../image/Apple-Devices.png";
import img1 from "../../image/work-img-1.png";
import img2 from "../../image/work-img-2.png";
import keyboard from "../../image/keyboard.jpg";
import wordpress from "../../image/wordpress.jpg";

const Work1 = () => {
  return (
    <div className="work1">
      <RevealGlobalStyles />
      <Grid container>
        <Grid item xs={12}>
          <div className="top_container wrap">
            <h1>cafe's website</h1>
            <img src={devices} alt="" className="devices" />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="overview_container wrap">
            <h2>Over View</h2>
            <ul>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </li>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </li>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </li>
            </ul>
          </div>
        </Grid>

        <Grid container className="wrap">
          <Grid item xs={6}>
            <div className="tools_container ">
              <h2>Tools</h2>
              <ul className="tag_list">
                <li className="tag">HTML</li>
                <li className="tag">CSS</li>
                <li className="tag">JavaScript</li>
                <li className="tag">Bootstrap</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="myrole_container">
              <h2>My Role</h2>
              <p className="myrole_text">Designer and Front End Developer</p>
            </div>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Reveal animation={Animation.FadeInUp} delay={200}>
            <Link>
              <div className="resume_button_container wrap">
                <button type="button" className="resume_button">
                  <span className="button_text">View Webpage</span>
                </button>
              </div>
            </Link>
          </Reveal>
        </Grid>
        <Grid item xs={12} className="wrap">
          <Reveal animation={Animation.FadeInUp} delay={250}>
            <div className="img_container">
              <img src={img1} alt="" className="img_item" />
            </div>
          </Reveal>
        </Grid>
        <Grid item xs={12} className="wrap">
          <Reveal animation={Animation.FadeInUp} delay={250}>
            <div className="img_container">
              <img src={img2} alt="" className="img_item" />
            </div>
          </Reveal>
        </Grid>
        <Grid item xs={12} className="wrap">
          <h2 className="text-center">View more works ...</h2>
        </Grid>

        <Grid container className="wrap">
          <Grid item xs={5}>
            <Link>
              <div className="link_container">
                <img src={keyboard} alt="" className="link_item" />
                <p className="link_text">React made App using Unsplash API</p>
              </div>
            </Link>
          </Grid>

          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
            <Link>
              <div className="link_container">
                <div className="mask">
                  <img src={wordpress} alt="" className="link_item" />
                  <p className="link_text">Word press made Blog</p>
                </div>
              </div>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TopLink />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Work1;
