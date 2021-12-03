import React from "react";
import  { colors } from "../../styling/colors";
import SpringBar from "./SpringBar";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { useTrail, animated } from "react-spring";

// Create array for trail animation
const bars = [];
for (let i = 0; i < 10; i++) {
    bars.push(
        <SpringBar barWidth="10vw" barColor={colors.blue} key={i}> </SpringBar>
    );
}

// Function that is actually exported to be rendered:
function Welcome({

}) {
    return (
        <div 
          className="full_section"
          style={{ backgroundColor: colors.blue }}
        >
            <div className="section_main_content">
                <h1> Hi This Is Landing Component </h1>
            </div>
        </div>
    )
}

export default Welcome