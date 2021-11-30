import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { colors } from "../../styling/colors";

function Footer({

}) {
    return (
        <div 
          className="footer_bar"
          style={{ backgroundColor: colors.green }}
        >
            <div className="footer_content">
                <a
                  href="https://www.linkedin.com/in/raymondxyz/"
                >
                    <FaLinkedin color={colors.white} size="30px"></FaLinkedin>
                </a>
                <a
                  href="https://github.com/raymondxyz"
                >
                    <AiFillGithub color={colors.white} size="30px"></AiFillGithub>
                </a>
                <a
                  href="https://www.instagram.com/raymond.xyz/"
                >
                    <FaInstagram color={colors.white} size ="30px"></FaInstagram>
                </a>
                <a
                  href="mailto:raymondxyzhang@gmail.com"
                >
                    <AiOutlineMail color={colors.white} size="30px"></AiOutlineMail>
                </a>
            </div>
        </div>
    )
}

export default Footer

