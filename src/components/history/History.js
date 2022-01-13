import React from 'react';
import { colors } from '../../styling/colors'
import NavArrowDown from '../miscellaneous/NavArrowDown';
import NavArrowUp from '../miscellaneous/NavArrowUp';
import ScrollAnimation from 'react-animate-on-scroll';

function History({
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
          style={{ background: "linear-gradient(90deg, #000000 35%, #111111 35%)" }}
        >

            <div className="section_two_column">

                <ScrollAnimation animateIn={"animate__fadeInLeft"} delay="200" duration="0.7" animateOnce={true}>
                    <div className="left_column_content" style={{ backgroundColor: "#000000" }}>
                        <div className="arrow_section_up">
                            <NavArrowUp coloring={colors.white} scrollUp={scrollUp} tooltipUp={tooltipUp}></NavArrowUp>
                        </div>
                        <h1 style={{ color: colors.green, textAlign: "center" }}> History </h1>
                        <h3 style={{ color: colors.white, textAlign: "center" }}> 
                            A trip down memory lane: my academic and professional progression over the years. 
                        </h3>
                        <div className="arrow_section_down">
                            <NavArrowDown coloring={colors.white} scrollDown={scrollDown} tooltipDown={tooltipDown}></NavArrowDown>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn={"animate__fadeInRight"} delay="200" duration="0.7" animateOnce={true}>
                    <div className="right_column_content" style={{ backgroundColor: "#111111" }}>

                        <h2 style={{ color: "white" }}> Haven't got around to this yet </h2>
                        
                    </div>
                </ScrollAnimation>
            </div>

        </div>
    )
}

export default History

