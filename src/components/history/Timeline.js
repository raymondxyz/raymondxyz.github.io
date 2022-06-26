import React from 'react';
import atlassian from '../../assets/atlassian_logo.png';
import SAP from '../../assets/SAP_logo.png';
import university from '../../assets/uoa_logo.png';
import profile from '../../assets/profile_photo_GAN.png';
import { colors } from '../../styling/colors';

function Timeline() {
    return (
        <div className="timeline_container">
            <div className="timeline_bookend" style={{ marginBottom: "40px" }}>
                <div className="timeline_bookend_mark"></div>
            </div>
            <div className="timeline_element">
                <div className="timeline_content">
                    <div className="timeline_header_container">
                        <img className="timeline_image" src={atlassian}></img>
                        <div className="timeline_header_text">
                            <p> November 2022 </p>
                            <h4> Atlassian </h4>
                        </div>
                    </div>
                    <div className="timeline_text_container">
                        <p> A hop across the ditch to Sydney for backend development </p>
                    </div>
                </div>
                <div className="timeline_mark"></div>
            </div>
            <div className="timeline_element">
                <div className="timeline_content">
                    <div className="timeline_header_container">
                        <img className="timeline_image" src={SAP}></img>
                        <div className="timeline_header_text">
                            <p> November 2021 </p>
                            <h4> SAP </h4>
                        </div>
                    </div>
                    <div className="timeline_text_container">
                        <p> Swtiched from client-facing work to product engineering </p>
                    </div>
                </div>
                <div className="timeline_mark"></div>
            </div>
            <div className="timeline_element">
                <div className="timeline_content">
                    <div className="timeline_header_container">
                        <img className="timeline_image" src={SAP}></img>
                        <div className="timeline_header_text">
                            <p> January 2021 </p>
                            <h4> SAP </h4>
                        </div>
                    </div>
                    <div className="timeline_text_container">
                        <p> Started my corporate career in consulting / business advisory </p>
                    </div>
                </div>
                <div className="timeline_mark"></div>
            </div>
            <div className="timeline_element">
                <div className="timeline_content">
                    <div className="timeline_header_container">
                        <img className="timeline_image" src={university}></img>
                        <div className="timeline_header_text">
                            <p> March 2020 </p>
                            <h4> University of Auckland </h4>
                        </div>
                    </div>
                    <div className="timeline_text_container">
                        <p> A young me finally begins university </p>
                    </div>
                </div>
                <div className="timeline_mark"></div>
            </div>
            <div className="timeline_element">
                <div className="timeline_content">
                    <div className="timeline_header_container">
                        <img className="timeline_image" src={profile} style={{borderRadius: "1vw"}}></img>
                        <div className="timeline_header_text">
                            <p> September 2001 </p>
                            <h4> I'm born! </h4>
                        </div>
                    </div>
                    <div className="timeline_text_container">
                        <p> I needed an extra component to test timeline scrolling :) </p>
                    </div>
                </div>
                <div className="timeline_mark"></div>
            </div>
            <div className="timeline_bookend" style={{ marginTop: "40px" }}>
                <div className="timeline_bookend_mark"></div>
            </div>
        </div>
    )
}

export default Timeline