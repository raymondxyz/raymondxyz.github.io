import React from 'react';
import { colors } from '../../styling/colors'
import NavArrowDown from '../miscellaneous/NavArrowDown';
import NavArrowUp from '../miscellaneous/NavArrowUp';

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
          style={{ background: "linear-gradient(90deg, #000000 35%, #111111 35%)" }}
          id={id}
        >

            <div className="section_two_column">
                <div className="left_column_content">
                    <div className="arrow_section_up">
                        <NavArrowUp coloring={colors.white} scrollUp={scrollUp} tooltipUp={tooltipUp}></NavArrowUp>
                    </div>
                    <h1 style={{ color: colors.white, textAlign: "center" }}> History </h1>
                    <h3 style={{ color: colors.white, textAlign: "center" }}> 
                        A trip down memory lane: my academic and professional progression over the years. 
                    </h3>
                    <div className="arrow_section_down">
                        <NavArrowDown coloring={colors.white} scrollDown={scrollDown} tooltipDown={tooltipDown}></NavArrowDown>
                    </div>
                </div>

        
                <div className="right_column_content">

                   <h2 style={{ color: "white" }}> Haven't got around to this yet </h2>
                </div>
            </div>

        </div>
    )
}

export default History

