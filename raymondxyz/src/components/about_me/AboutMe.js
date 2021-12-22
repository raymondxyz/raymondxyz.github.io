import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import photo from "./../../assets/profile_photo.jpg";
import collage from "./../../assets/collage.png";
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
          style={{ background: "linear-gradient(90deg, #2684FF 35%, #4C9AFF 35%)" }}
          id={id}
        >
          <div className="section_two_column">
          <ScrollAnimation animateIn={"animate__fadeInLeft"} delay="200" duration="0.7" animateOnce={true}>
          
            <div className="left_column_content">
              <div className="arrow_section_up">
                <NavArrowUp scrollUp={scrollUp} tooltipUp={tooltipUp} coloring={colors.white}></NavArrowUp>
              </div>
              <img src={photo} alt="Profile Photo" className="profileImage"></img>
              <h2 style={{ color: colors.white, textAlign: "center", marginBottom: "10px" }}> Hi There! </h2>
              <h3
                style={{ color: colors.white, textAlign: "center" }}
              > Information information information information information information information information 
                information 
              </h3>
              <div className="arrow_section_down">
                <NavArrowDown scrollDown={scrollDown} tooltipDown={tooltipDown} coloring={colors.white}></NavArrowDown>
              </div>
            </div>

          </ScrollAnimation>


          <ScrollAnimation animateIn={"animate__fadeInRight"} delay="200" duration="0.7" animateOnce={true}>

            <div className="right_column_content">
              <h1 style={{ color: colors.white }}>  About Me </h1>
              <h2 style={{ color: colors.white }}> Information about the sections content which continues on for 
                a decent amount, keeps going and wraps on edge
              </h2>

              <div className="collage_container">
                <img src={collage} alt="Collage Image" className="collage_image"></img>
              </div>

            </div>

            </ScrollAnimation>
          </div>

        </div>
    )
}

export default AboutMe