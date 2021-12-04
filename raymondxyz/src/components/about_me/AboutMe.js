import React from "react";
import Fade from "react-reveal/Fade";
import photo from "./../../assets/profile_photo.jpg";
import { colors } from "../../styling/colors";
import NavArrowDown from "../miscellaneous/NavArrowDown";
import NavArrowUp from "../miscellaneous/NavArrowUp";

function AboutMe({
  scrollDown,
  scrollUp,
  tooltipDown,
  tooltipUp,
  id
}) {
    return (
        <div 
          className="full_section"
          style={{ backgroundColor: colors.grey }}
          id={id}
        >
          <div className="aboutme_left" style={{ color: colors.green }}>
            <div style={{ marginLeft: "15vw", marginTop: "50px" }}>
              <NavArrowUp scrollUp={scrollUp} tooltipUp={tooltipUp} coloring={colors.white}></NavArrowUp>
            </div>

            <div style={{ width: "40vw", height: "auto" }}>
              <img
                src={photo}
                alt="Profile Photo"
                className="profileImage"
              >
              </img>
              <div className="left_about_content">
                <h2 style={{ color: colors.white, textAlign: "center", marginBottom: "10px" }}> Hi There! </h2>
                <h3
                  style={{ color: colors.white, textAlign: "center" }}
                > Information information information information information information information information 
                  information information information information</h3>
              </div>
            </div>

            <div style={{ marginLeft: "15vw" }}>
              <NavArrowDown scrollDown={scrollDown} tooltipDown={tooltipDown} coloring={colors.white}></NavArrowDown>
            </div>
          </div>
          <div className="aboutme_right">
            <h1> About Me Section </h1>
          </div>

        </div>
    )
}

export default AboutMe