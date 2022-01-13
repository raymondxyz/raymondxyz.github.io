import React from 'react';
import { colors } from '../../styling/colors'
import NavArrowDown from '../miscellaneous/NavArrowDown';
import NavArrowUp from '../miscellaneous/NavArrowUp';
import CarouselComponent from "./CarouselComponent";
import ScrollAnimation from 'react-animate-on-scroll';

function Projects({
    scrollDown,
    scrollUp,
    tooltipDown,
    tooltipUp,
    id
}) {
    return (
        <div
          className="full_section"
          id={id}
          style={{ background: "linear-gradient(90deg, #ECECEC 35%, #FFFFFF 35%)" }}
        >
            <div className="section_two_column">

                <ScrollAnimation animateIn={"animate__fadeInLeft"} delay="200" duration="0.7" animateOnce={true}>
                    <div className="left_column_content" style={{ backgroundColor: "#ECECEC" }}>
                        <div className="arrow_section_up">
                            <NavArrowUp coloring={colors.black} scrollUp={scrollUp} tooltipUp={tooltipUp}></NavArrowUp>
                        </div>
                        <h1 style={{ color: colors.green, textAlign: "center" }}> Projects </h1>
                        <h3 style={{ color: colors.black, textAlign: "center" }}> 
                            Some personal projects I've created. Get in touch to hear about what I've worked on professionally.
                        </h3>
                        <div className="arrow_section_down">
                            <NavArrowDown coloring={colors.black} scrollDown={scrollDown} tooltipDown={tooltipDown}></NavArrowDown>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn={"animate__fadeInRight"} delay="200" duration="0.7" animateOnce={true}>
                    <div className="project_right_column" style={{ backgroundColor: "#FFFFFF" }}>
                        <CarouselComponent></CarouselComponent>                    
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default Projects

