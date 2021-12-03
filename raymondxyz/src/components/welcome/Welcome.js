import React, { useState } from "react";
import  { colors } from "../../styling/colors";
import SpringBar from "./SpringBar";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { Trail, animated, config } from "react-spring";

function Welcome({

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
            <div className="section_main_content" style={{position:"absolute"}}>
                <div>
                    
                </div>
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