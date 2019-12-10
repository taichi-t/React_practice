import React from "react";
import { Link } from "react-router-dom";
import keyboard from "../../image/keyboard.jpg";
import coming from "../../image/coming-soon.png";

export function Works() {
  return (
    <div className="works">
      <div className="row" id="works1">
        <div className="col-xs-7 works-image comming-relative">
          <Link href="#" className="works-image-link">
            <img src={keyboard} alt="" id="works-image-link1" />
          </Link>
          <div className="comming-container">
            <img src={coming} alt="" className="comming-soon" />
          </div>
        </div>

        <div className="col-xs-3 works-text">
          <Link href="#" className="works-image-link">
            <div className="text-container">
              <p className="works-title text-center">
                React made App using Unsplash API
              </p>
              <p className="works-subtitle text-center">React.js</p>

              <div className="button-container">
                <button className="works-button" id="works-button1">
                  View more ...
                </button>
              </div>
            </div>
            <div className="triangle"></div>
          </Link>
        </div>
      </div>

      <div className="row" id="works2">
        <div className="col-xs-3 works-text-odd">
          <Link href="#" className="works-image-link">
            <div className="text-container">
              <p className="works-title text-center works-title-odd">
                cafe's website
              </p>
              <p className="works-subtitle text-center works-subtitle-odd">
                HTML/CSS/JavaSctipt
              </p>

              <div className="button-container">
                <button className="works-button-odd" id="works-button2">
                  View more ...
                </button>
              </div>
            </div>
          </Link>

          <div className="triangle-odd"></div>
        </div>

        <div className="col-xs-7 works-image-odd comming-relative">
          <Link href="#" className="works-image-link">
            <img
              src="../../image/coffeehouse.jpg"
              alt=""
              id="works-image-link2"
            />
          </Link>
          <div className="comming-container">
            <img
              src="../image/Coming-Soon.png"
              alt=""
              className="comming-soon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
