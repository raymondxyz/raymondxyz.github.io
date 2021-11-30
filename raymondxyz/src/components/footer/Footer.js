import React from 'react';
import { colors } from '../../styling/colors'

function Footer({

}) {
    return (
        <div 
          className="footer"
          style={{ backgroundColor: colors.green }}
        >
            <p>
                This is the footer
            </p>
        </div>
    )
}

export default Footer

