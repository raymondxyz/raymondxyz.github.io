import React from 'react';
import { colors } from '../../styling/colors'
import NavArrowDown from '../miscellaneous/NavArrowDown';
import NavArrowUp from '../miscellaneous/NavArrowUp';
import SkillsComponent from './SkillsComponent';

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
            <div className="section_two_column">
                <div className="left_column_content">
                    <div className="arrow_section_up">
                        <NavArrowUp coloring={colors.white} scrollUp={scrollUp} tooltipUp={tooltipUp}></NavArrowUp>
                    </div>
                    <h1 style={{ color: colors.white, textAlign: "center" }}> Skills </h1>
                    <h3 style={{ color: colors.white, textAlign: "center" }}> 
                        Information information information information information information information information 
                    </h3>
                    <div className="arrow_section_down">
                        <NavArrowDown coloring={colors.white} scrollDown={scrollDown} tooltipDown={tooltipDown}></NavArrowDown>
                    </div>
                </div>

        
                <div className="right_column_content">

                    <SkillsComponent currentClass="skills_section_large"></SkillsComponent>
                </div>
            </div>
        </div>
    )
}

export default Skills

