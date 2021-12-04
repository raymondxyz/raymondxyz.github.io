import React from 'react';
import { colors } from '../../styling/colors'

function AboutMe({
  scrollDown,
  scrollUp,
  tooltipDown,
  tooltipUp,
  id
}) {
    return (
        <div 
          className="full_section"
          style={{ backgroundColor: colors.grey }}
          id={id}
        >
            <div 
              className="section_main_content"
            >
                <h1> About Me Section </h1>
            </div>
        </div>
    )
}

export default AboutMe