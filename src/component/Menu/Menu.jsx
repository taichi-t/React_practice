import React, { Component } from "react";
import "./menu.scss";
import Grid from "@material-ui/core/Grid";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

class Menu extends Component {
  componentDidMount() {
    function toggleClass(targetElement, addedClass) {
      if (targetElement.classList.contains(addedClass)) {
        targetElement.classList.remove(addedClass);
      } else {
        targetElement.classList.add(addedClass);
      }
    }

    document.querySelector(".menu-btn").addEventListener("click", function() {
      toggleClass(document.querySelector(".menu"), "menu--open");
      toggleClass(document.querySelector(".menu-btn"), "menu-btn--on");
    });
  }
  render() {
    return (
      <Grid container>
        <Grid item xs={12} className="menu-button">
          <menu className="menu">
            <ul className="link_sns_container">
              <li>
                <span className="link">Home</span>
              </li>
              <li>
                <span className="link">Works</span>
              </li>
              <li>
                <span className="link">About</span>
              </li>
              <li>
                <span className="link pc">What I Can Do</span>
                <span className="sp">Skills</span>
              </li>
              <li>
                <span className="link">Contact</span>
              </li>
              <li className="sns_container">
                <LinkedInIcon className="linkedin" />
                <GitHubIcon className="github" />
              </li>
            </ul>
          </menu>

          <nav className="menu-btn">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>
        </Grid>
      </Grid>
    );
  }
}

export default Menu;
