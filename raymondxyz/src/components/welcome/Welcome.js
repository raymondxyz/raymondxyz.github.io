import React, { useState } from "react";
import { colors } from "../../styling/colors";
import SpringBar from "./SpringBar";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiOutlineMail, AiFillGithub, AiOutlineBgColors } from "react-icons/ai";
import { Trail, animated, config } from "react-spring";
import NavArrowDown from "../miscellaneous/NavArrowDown";
import videoSource from "./../../assets/black_video.mp4";

function Welcome({
  scrollDown,
  tooltipDown,
  id,
}) {
  const [springDone, setSpringDone] = useState(false);

  // Create array for trail animation
  const bars = [];
  for (let i = 0; i < 5; i++) {
    bars.push(
      <SpringBar barHeight="20vh" barColor={colors.black} key={i}></SpringBar>
    )
  }

  // Create array for actual displayed content
  const content = [];

  content.push(
    <div style={{ margin: "50px 0 0 0" }}>
      <a 
        href="https://www.linkedin.com/in/raymondxyz/" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ paddingRight: "20px" }}
        key="1"
      >
        <FaLinkedin color={colors.white} size="40px"></FaLinkedin>
      </a>
      <a 
        href="https://github.com/raymondxyz" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ paddingRight: "20px"  }}
        key="2"
      >
        <AiFillGithub color={colors.white} size="40px"></AiFillGithub>
      </a>
      <a 
        href="https://www.instagram.com/raymond.xyz/" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ paddingRight: "20px" }}
        key="3"
      >
        <FaInstagram color={colors.white} size ="40px"></FaInstagram>
      </a>
      <a 
        href="mailto:raymondxyzhang@gmail.com" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ paddingRight: "20px" }}
        key="4"
      >
        <AiOutlineMail color={colors.white} size="40px"></AiOutlineMail>
      </a>
    </div>
  )

  content.push(
    <h1 style={{ color: colors.white }} key="5">Welcome!</h1>
  )

  content.push(
    <div
      key="6"
    >
      <h2 style={{ color: colors.white, paddingLeft: "20px", paddingTop: "20px" }}> - Information point 1 </h2>
      <h2 style={{ color: colors.white, paddingLeft: "20px", paddingTop: "20px" }}> - Information point 2 </h2>
      <h2 style={{ color: colors.white, paddingLeft: "20px", paddingTop: "20px" }}> - Information point 3 </h2>
      <h2 style={{ color: colors.white, paddingLeft: "20px", paddingTop: "20px" }}> - Information point 4 </h2>
    </div>
  )
          
  content.push(
    <div
      style={{ marginLeft: "1.5vw" }}
      key="7"
    >
      <div className="arrow_section" style={{ margin: "30px", marginLeft: "2.5vw" }}>
        <NavArrowDown scrollDown={scrollDown} tooltipDown={tooltipDown} coloring={colors.white}></NavArrowDown>
      </div>
    </div>
  )

  return (

    <div
      className="full_section"
      id={id}
    >
      <div
        className="landing_main_content"
        style={{ position: "absolute" }}
      >
        <Trail
            items={content}
            delay={700}
            from={{ marginTop: "-30vh" }}
            to={{ marginTop: "0" }}
            config={{ mass: 1, tension: 110, friction: 7 }}
            keys={(item) => item.key}
          >
            {item => styles => <animated.div style={styles}>
              {item}
            </animated.div>
            }
        </Trail>
      </div>

      {springDone ? (
        <div
          style={{
            backgroundColor: colors.black,
            width: "100vw",
            height: "100vh",
            zIndex: "-3"
          }}
        >
          <video className="video_background" autoPlay loop muted>
            <source src={videoSource} type='video/mp4'></source>
          </video>
        </div>

      ) : (
        <div>
          <Trail
            items={bars}
            delay={200}
            from={{ marginLeft: "-100vw" }}
            to={{ marginLeft: "0" }}
            keys={(item) => item.key}
            config={config.slow}
            onRest={() => setTimeout(() => setSpringDone(true), 2000)}
          >
              {item => styles => <animated.div style={styles}>{item}</animated.div>}
            </Trail>
        </div>
      )
      }
    </div>
  )
}

export default Welcome