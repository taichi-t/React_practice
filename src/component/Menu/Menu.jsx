import React, { Component } from "react";
import "./menu.scss";
import Grid from "@material-ui/core/Grid";
import { Link } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import anime from "animejs/lib/anime.es.js";

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
  handleClick(elementId) {
    const target = document.getElementById(elementId);

    const targetY = target.offsetTop;
    console.log(targetY);

    const scrollElement =
      window.document.scrollingElement ||
      window.document.body ||
      window.document.documentElement;

    function foo() {
      anime({
        targets: scrollElement,
        scrollTop: targetY,
        duration: 1000,
        easing: "easeInOutQuad"
      });
    }
    foo();
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12} className="menu-button">
          <menu className="menu">
            <ul className="link_sns_container">
              <li id="home" className="button">
                <span className="link">Home</span>
              </li>

              <li id="works" className="button">
                <span
                  className="link"
                  onClick={e => this.handleClick("works_link")}
                >
                  Works
                </span>
              </li>
              <li id="about" className="button">
                <span
                  className="link"
                  onClick={e => this.handleClick("about_link")}
                >
                  About
                </span>
              </li>
              <li id="skills" className="button">
                <span
                  className="link pc"
                  onClick={e => this.handleClick("skills_link")}
                >
                  What I Can Do
                </span>
                <span
                  className="sp"
                  onClick={e => this.handleClick("skills_link")}
                >
                  Skills
                </span>
              </li>
              <li id="contact" className="button">
                <span
                  className="link"
                  onClick={e => this.handleClick("contact_link")}
                >
                  Contact
                </span>
              </li>
              <li className="sns_container">
                <Link
                  href="https://www.linkedin.com/in/taichi-tsujioka-b17885190/"
                  target="_blank"
                >
                  <LinkedInIcon className="linkedin" />
                </Link>

                <Link href="https://github.com/taichi-t" target="_blank">
                  <GitHubIcon className="github" />
                </Link>
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
