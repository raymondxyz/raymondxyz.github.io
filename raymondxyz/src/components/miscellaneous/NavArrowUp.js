import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-scroll";
import { useSpring, animated, config } from  "react-spring";

function NavArrowUp({ 
    scrollUp,
    tooltipUp,
    coloring
}) {

    const AnimatedIcon = animated(IoIosArrowUp)
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
        <div style={{ display: "block" }}>
            <div style={{ display: "flex" }}>
                <Link
                    onMouseEnter={toggleIsHover}
                    onMouseLeave={toggleIsHover}
                    to={scrollUp}
                    smooth={true}
                >
                    <AnimatedIcon
                        size={navArrow.size}
                        style={{ color: coloring, cursor: "pointer" }}
                    ></AnimatedIcon>
                </Link>

                <animated.div
                    style={{
                        opacity: navArrow.opacity,
                    }}
                >
                    <h4 style={{ color: coloring, marginLeft: "10px" }}>{tooltipUp}</h4>
                </animated.div>
            </div> 
        </div>
    )
}

export default NavArrowUp