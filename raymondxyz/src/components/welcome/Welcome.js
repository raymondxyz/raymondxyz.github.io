import React from "react";
import  { colors } from "../../styling/colors";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { useTrail, animated } from "react-spring";

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