import React, { useState } from "react";
import { colors } from "./../../styling/colors"
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-scroll";
import { useSpring, animated, config } from  "react-spring";

function NavArrowDown({ 
    scrollDown,
    scrollUp,
    tooltipDown,
    tooltipUp,
}) {

    const AnimatedIcon = animated(IoIosArrowDown)
    const [isHover, setIsHover] = useState(false);

    const navArrow = useSpring({
        size: isHover ? "50px" : "30px",
        opacity: isHover? 1 : 0,
        config: config.stiff
    });

    function toggleIsHover() {
        (setIsHover(!isHover))
    }

    return (
            <div style={{ marginTop: "60px" }}>
            <Link
                onMouseEnter={toggleIsHover}
                onMouseLeave={toggleIsHover}
                to={scrollDown}
                smooth={true}
            >
                <AnimatedIcon
                    size={navArrow.size}
                    style={{ color: colors.white, cursor: "pointer", marginLeft: "30px" }}
                ></AnimatedIcon>
            </Link>

            <animated.div
                style={{
                    justifyContent: "row",
                    opacity: navArrow.opacity,
                }}
            >
                <h4 style={{ color: colors.white, marginLeft: "20px" }}>{tooltipDown}</h4>
            </animated.div>
        </div> 
    )
}

export default NavArrowDown