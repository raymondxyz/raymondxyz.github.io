import React from 'react';
import { colors } from '../../styling/colors'
import NavArrowDown from '../miscellaneous/NavArrowDown';
import NavArrowUp from '../miscellaneous/NavArrowUp';

function Skills({
    scrollDown,
    scrollUp,
    tooltipDown,
    tooltipUp,
    id
}) {
    return (
        <div
          className="full_section"
          style={{ backgroundColor: colors.blue }}
          id={id}
        >
            <div className="main_background_left">

                <div className="left_column_content">
                    <div className="arrow_section" style={{ marginLeft: "90px", marginBottom: "-40px" }}>
                        <NavArrowUp coloring={colors.white} scrollUp={scrollUp} tooltipUp={tooltipUp}></NavArrowUp>
                    </div>

                    <h1 style={{ color: colors.white, textAlign: "center" }}> Skills </h1>
                    <h3 style={{ color: colors.white, textAlign: "center" }}> 
                        Information information information information information information information information 
                    </h3>

                    <div className="arrow_section" style={{ marginLeft: "70px", marginTop: "30px" }}>
                        <NavArrowDown coloring={colors.white} scrollDown={scrollDown} tooltipDown={tooltipDown}></NavArrowDown>
                    </div>
                </div>

            </div>

            <div className="main_background_right">
                <div className="right_column_content">

                    <p> testing testing </p>
                </div>
            </div>
        </div>
    )
}

export default Skills

