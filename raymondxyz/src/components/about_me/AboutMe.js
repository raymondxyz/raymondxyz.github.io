import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
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

            <div className="main_background_left" style={{ backgroundColor: colors.brightblue }}>
            <ScrollAnimation animateIn={"animate__fadeInLeft"} delay="200" duration="0.7">

              <div style={{ marginLeft: "16.5vw", marginTop: "50px" }}>
                <NavArrowUp scrollUp={scrollUp} tooltipUp={tooltipUp} coloring={colors.white}></NavArrowUp>
              </div>
              <div className="left_column_content">
                <img
                  src={photo}
                  alt="Profile Photo"
                  className="profileImage"
                >
                </img>

                <h2 style={{ color: colors.white, textAlign: "center", marginBottom: "10px" }}> Hi There! </h2>
                <h3
                  style={{ color: colors.white, textAlign: "center" }}
                > Information information information information information information information information 
                  information information information information
                </h3>
              </div>

              <div style={{ marginLeft: "16.5vw" }}>
                <NavArrowDown scrollDown={scrollDown} tooltipDown={tooltipDown} coloring={colors.white}></NavArrowDown>
              </div>

              </ScrollAnimation>
            </div>


          <div className="main_background_right" style={{ backgroundColor: colors.paleblue }}>
          <ScrollAnimation animateIn={"animate__fadeInRight"} delay="200" duration="0.7">

            <div className="right_column_content">
              <h1 style={{ color: colors.white }}>  About Me </h1>
              <h2 style={{ color: colors.white }}> Information about the sections content which continues on for 
                a decent amount, keeps going and wraps on edge
              </h2>
              <div style={{  display: "flex", overflow: "hidden", marginTop: "30px" }}>
                <div style={{ flex: "100%" }}>
                  <img src={photo} alt="test" style={{ width: "100%", height: "180px" }}></img>
                </div>
              </div>

              <div style={{  display: "flex", overflow: "hidden" }}>
                <div className="image_column">
                  <img src={photo} alt="test" className="collage_image"></img>
                </div>
                <div className="image_column">
                  <img src={photo} alt="test" className="collage_image"></img>
                </div>
                <div className="image_column">
                  <img src={photo} alt="test" className="collage_image"></img>
                </div>
                <div className="image_column">
                  <img src={photo} alt="test" className="collage_image"></img>
                </div>
              </div>

            </div>

            </ScrollAnimation>
          </div>

        </div>
    )
}

export default AboutMe