import React, { useState } from "react";
import { colors } from "./../../styling/colors"
import { BsArrowDownCircle } from "react-icons/bs";
import { Link } from "react-scroll";
import { useSpring, animated, config } from  "react-spring";

function NavArrowDown({ 
    scrollDestination,
    destinationName
}) {
    const [isHover, setIsHover] = useState(false);

    const navArrow = useSpring({
        size: isHover ? "100px" : "30px",
        opacity: isHover? 1 : 0,
        config: config.slow
    });

    function toggleIsHover() {
        (setIsHover(!isHover))
    }

    return (
            <div>
            <animated.div
            style={{
                justifyContent: "row",
                display: "inline-flex",
                marginTop: "60px",
            }}
            >
            <Link
                onMouseEnter={toggleIsHover}
                onMouseLeave={toggleIsHover}
                to={scrollDestination}
                smooth={true}
                duration={500}
                ignoreCancelEvents={false}
            >
                <BsArrowDownCircle
                    color={colors.white}
                    size={navArrow.size}
                    style={{ cursor: "pointer", marginLeft: "30px", overflow: "hidden" }}
                ></BsArrowDownCircle>
            </Link>
            </animated.div><animated.div
                style={{
                    justifyContent: "row",
                    display: "inline-flex",
                    marginTop: "60px",
                    opacity: navArrow.opacity,
                    size: navArrow.size
                }}
            >
                <h4 style={{ color: colors.white, marginLeft: "20px" }}>{destinationName}</h4>
            </animated.div>
        </div> 
    )
}

export default NavArrowDown