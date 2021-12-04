import React, { useState } from "react";
import  { colors } from "../../styling/colors";
import SpringBar from "./SpringBar";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { Trail, animated, config } from "react-spring";
import NavArrowDown from "../miscellaneous/NavArrowDown";

function Welcome({
    scrollTo,
    tooltip
}) {
    const [springDone, setSpringDone] = useState(false);

    // Create array for trail animation
    const bars = [];
    for (let i = 0; i < 6; i++) {
        bars.push(
            <SpringBar barWidth="16.7vw" barColor={colors.blue} key={i}></SpringBar>
        )
    }
    
    return (
        <div
          className="full_section"
          style={{ backgroundColor: colors.white }}
        >
            <div className="section_main_content" style={{ position:"absolute" }}>
                <div style={{ margin: "50px 0 0 0" }}>
                        <a 
                          href="https://www.linkedin.com/in/raymondxyz/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          style={{ paddingRight: "20px" }}>
                            <FaLinkedin color={colors.white} size="40px"></FaLinkedin>
                        </a>
                        <a 
                          href="https://github.com/raymondxyz" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ paddingRight: "20px"  }}
                        >
                            <AiFillGithub color={colors.white} size="40px"></AiFillGithub>
                        </a>
                        <a 
                          href="https://www.instagram.com/raymond.xyz/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ paddingRight: "20px" }}
                        >
                            <FaInstagram color={colors.white} size ="40px"></FaInstagram>
                        </a>
                        <a 
                          href="mailto:raymondxyzhang@gmail.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ paddingRight: "20px" }}
                        >
                            <AiOutlineMail color={colors.white} size="40px"></AiOutlineMail>
                        </a>
                </div>
                <h1 style={{ color: colors.white }}>Welcome!</h1>
                <h2 style={{ color: colors.white, paddingLeft: "20px", paddingTop: "20px" }}> - Information point 1 </h2>
                <h2 style={{ color: colors.white, paddingLeft: "20px", paddingTop: "20px" }}> - Information point 2 </h2>
                <h2 style={{ color: colors.white, paddingLeft: "20px", paddingTop: "20px" }}> - Information point 3 </h2>
                <h2 style={{ color: colors.white, paddingLeft: "20px", paddingTop: "20px" }}> - Information point 4 </h2>

                <NavArrowDown scrollDestination={scrollTo} destinationName={tooltip}></NavArrowDown>

            </div>

            { springDone ? (
                <div 
                  style={{ 
                    backgroundColor: colors.blue,
                    width: "100vw",
                    height: "100vh"
                }}
                >
                </div>

             ) : (
                <Trail
                  items={bars}
                  from={{ marginTop: "-100vh" }}
                  to={{ marginTop: "0" }}
                  keys={(item) => item.key }
                  config={config.slow}
                  onRest={() => setTimeout(() => setSpringDone(true), 2000)}
                >
                    {item => styles => <animated.div style={styles}>{item}</animated.div>}
                </Trail>
             )
            }
        </div>
    )
}

export default Welcome