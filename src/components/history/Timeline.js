import React from 'react';
import { colors } from '../../styling/colors';

function Timeline() {
    return (
        <div className="timeline_container">
            <div className="timeline_bookend" style={{ marginBottom: "40px" }}>
                <div className="timeline_bookend_mark"></div>
            </div>
            <div className="timeline_element">
                <div className="timeline_content"></div>
                <div className="timeline_mark"></div>
            </div>
            <div className="timeline_element">
                <div className="timeline_content"></div>
                <div className="timeline_mark"></div>
            </div>
            <div className="timeline_element">
                <div className="timeline_content"></div>
                <div className="timeline_mark"></div>
            </div>
            <div className="timeline_element">
                <div className="timeline_content"></div>
                <div className="timeline_mark"></div>
            </div>
            <div className="timeline_element">
                <div className="timeline_content"></div>
                <div className="timeline_mark"></div>
            </div>
            <div className="timeline_element">
                <div className="timeline_content"></div>
                <div className="timeline_mark"></div>
            </div>
            <div className="timeline_element">
                <div className="timeline_content"></div>
                <div className="timeline_mark"></div>
            </div>
            <div className="timeline_bookend" style={{ marginTop: "40px" }}>
                <div className="timeline_bookend_mark"></div>
            </div>
        </div>
    )
}

export default Timeline