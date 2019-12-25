import React, { Component } from "react";
import "./menu.scss";
import Grid from "@material-ui/core/Grid";

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
            <ul>
              <li>Home</li>
              <li>Works</li>
              <li>About</li>
              <li>What I Can Do</li>
              <li>Contact</li>
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
