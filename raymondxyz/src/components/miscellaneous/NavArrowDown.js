import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-scroll";
import { useSpring, animated, config } from  "react-spring";

function NavArrowDown({ 
    scrollDown,
    scrollUp,
    tooltipDown,
    tooltipUp,
    coloring
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
        <div style={{ display: "inline-block" }}>
            <div style={{ marginTop: "30px", alignItems: "center", display: "inline-flex"}}>
                <Link
                    onMouseEnter={toggleIsHover}
                    onMouseLeave={toggleIsHover}
                    to={scrollDown}
                    smooth={true}
                >
                    <AnimatedIcon
                        size={navArrow.size}
                        style={{ color: coloring, cursor: "pointer", marginLeft: "30px", display: "inline-flex" }}
                    ></AnimatedIcon>
                </Link>

                <animated.div
                    style={{
                        opacity: navArrow.opacity
                    }}
                >
                    <h4 style={{ color: coloring, marginLeft: "10px", display: "inline-flex" }}>{tooltipDown}</h4>
                </animated.div>
            </div> 
        </div>
    )
}

export default NavArrowDown