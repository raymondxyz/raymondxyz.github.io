import React from 'react';
import { colors } from '../../styling/colors'
import NavArrowDown from '../miscellaneous/NavArrowDown';
import NavArrowUp from '../miscellaneous/NavArrowUp';

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
          style={{ backgroundColor: colors.white }}
          id={id}
        >
            <div
              className="section_main_content"
            >
                <NavArrowUp scrollUp={scrollUp} tooltipUp={tooltipUp}></NavArrowUp>
                    <h1> Projects Section </h1>
                <NavArrowDown scrollDown={scrollDown} tooltipDown={tooltipDown}></NavArrowDown>
            </div>
        </div>
    )
}

export default Projects

