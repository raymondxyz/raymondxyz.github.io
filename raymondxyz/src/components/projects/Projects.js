import React from 'react';
import { colors } from '../../styling/colors'
import NavArrowDown from '../miscellaneous/NavArrowDown';
import NavArrowUp from '../miscellaneous/NavArrowUp';
import CarouselComponent from "./CarouselComponent";

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
          style={{ background: "linear-gradient(90deg, #ECECEC 35%, #FFFFFF 35%)" }}
          id={id}
        >
            <div className="section_two_column">
                <div className="left_column_content">
                    <div className="arrow_section_up">
                        <NavArrowUp coloring={colors.black} scrollUp={scrollUp} tooltipUp={tooltipUp}></NavArrowUp>
                    </div>
                    <h1 style={{ color: colors.black, textAlign: "center" }}> Projects </h1>
                    <h3 style={{ color: colors.black, textAlign: "center" }}> 
                        Some personal projects I've created. Get in touch to hear about what I've worked on professionally.
                    </h3>
                    <div className="arrow_section_down">
                        <NavArrowDown coloring={colors.black} scrollDown={scrollDown} tooltipDown={tooltipDown}></NavArrowDown>
                    </div>
                </div>

        
                <div className="project_right_column">
                    <CarouselComponent></CarouselComponent>                    
                </div>
            </div>
        </div>
    )
}

export default Projects

