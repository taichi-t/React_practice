import React, { Component } from "react";
import "./top.scss";
import Grid from "@material-ui/core/Grid";
import anime from "animejs/lib/anime.es.js";
// import { WorkCard1 } from "../WorkCard1/WorkCard1";

class Top extends Component {
  componentDidMount() {
    const button = document.querySelector(".btn1");
    const scrollElement =
      window.document.scrollingElement ||
      window.document.body ||
      window.document.documentElement;
    const scrollTop = document.getElementById("top").clientHeight;

    button.addEventListener("click", () => {
      // use anime.js
      anime({
        targets: scrollElement,
        scrollTop: scrollTop,
        duration: 1000,
        easing: "easeInOutQuad"
      });
      console.log(scrollTop);
    });
  }
  render() {
    return (
      <Grid container className="top" id="top">
        <Grid item xs={12}>
          <div className="top">
            <div className="top_bgc">
              <p className="top_text">
                I'm Taichi Tsujioka. <br />
                Japanese Front-end Developer,
                <br />
                based in Vancouver.
              </p>
              <div className="scroll-button btn1">
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
}

// class Contact extends Component {
//   componentDidMount() {
//     const button = document.querySelector(".btn");
//     const scrollElement =
//       window.document.scrollingElement ||
//       window.document.body ||
//       window.document.documentElement;
//     button.addEventListener("click", () => {
//       // use anime.js
//       anime({
//         targets: scrollElement,
//         scrollTop: 0,
//         duration: 1000,
//         easing: "easeInOutQuad"
//       });
//     });
//   }

//   render() {
//     return (
//       <Grid container>
//         <Grid item xs={12}>
//           <div className="toToppage">
//             <button className="toppage-link btn">
//               <div>
//                 <span className="up">
//                   <ArrowUpwardIcon style={{ fontSize: 25 }} />
//                 </span>
//               </div>
//             </button>
//           </div>
//         </Grid>
//       </Grid>
//     );
//   }
// }

export default Top;
