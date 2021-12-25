import React from "react";
import { FaLinkedin, FaInstagram, FaReact, FaCss3Alt } from "react-icons/fa";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { colors } from "../../styling/colors";

function Footer({

}) {
    return (
        <div className="footer_bar">
            <ul className="footer_content_left">
                    <li className="footer_link">
                        <a 
                          href="https://www.linkedin.com/in/raymondxyz/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                        >
                            <FaLinkedin color={colors.black} size="30px"></FaLinkedin>
                        </a>
                    </li>
                    <li className="footer_link">
                        <a 
                          href="https://github.com/raymondxyz" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                            <AiFillGithub color={colors.black} size="30px"></AiFillGithub>
                        </a>
                    </li>
                    <li className="footer_link">
                        <a 
                          href="https://www.instagram.com/raymond.xyz/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                            <FaInstagram color={colors.black} size ="30px"></FaInstagram>
                        </a>
                    </li>
                    <li className="footer_link"> 
                        <a 
                          href="mailto:raymondxyzhang@gmail.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                            <AiOutlineMail color={colors.black} size="30px"></AiOutlineMail>
                        </a>
                    </li>
                </ul>
            <div className="footer_content_right">
                <p>
                    Made using <FaReact className="footer_icon" color={colors.black} size="25px"></FaReact>
                    + <FaCss3Alt className="footer_icon" color={colors.black} size="25px"></FaCss3Alt>
                    RZ {new Date().getFullYear()}
                </p>
            </div>
        </div>
    )
}

export default Footer

