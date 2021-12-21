import React from 'react';
import { colors } from '../../styling/colors'
import NavArrowDown from '../miscellaneous/NavArrowDown';
import NavArrowUp from '../miscellaneous/NavArrowUp';

async function updateSpotify() {
    const playlistURL = "https://api.spotify.com/v1/playlists/3eoN9aPVkIvsqIM4B02ZCd"

    try {
        const response = await fetch(playlistURL, {
            headers: {
                "Authorization": "Bearer BQBoQp5YstUqpJLuVLvoZr00A8ctKX04NqEqvF12wMPDtVR-znBcEY1xh9vW6-6GY2w_6UMoN92_0e-ogzAXnUXR5pjmK2foAQDDydf1iuIWfQhTkRgJVy4ObL8hfVjev-MQf9IqWvxOtLK3j66HK98OaV-O5jQHH0s",
                "Accept": "*/*",
                "Content-Type": "application/x-www-form-urlencoded"

            }
        });
        var data = await response.json();
        console.log(data)
        // data.forEach(item => {
        //     console.log(item.name)
        // })
    } catch (err) {
        console.log(err)
    }
}

function Closing({
    scrollDown,
    scrollUp,
    tooltipDown,
    tooltipUp,
    id
}) {
    return (
        <div
          className="full_section"
          style={{ backgroundColor: colors.black }}
          id={id}
        >

            <div className="section_two_column">
                <div className="left_column_content">
                    <div className="arrow_section_up">
                        <NavArrowUp coloring={colors.white} scrollUp={scrollUp} tooltipUp={tooltipUp}></NavArrowUp>
                    </div>
                    <h1 style={{ color: colors.white, textAlign: "center" }}> Music? </h1>
                    <h3 style={{ color: colors.white, textAlign: "center" }}> 
                        Information information information information information information information information 
                    </h3>
                    <div className="arrow_section_down">
                        <NavArrowDown coloring={colors.white} scrollDown={scrollDown} tooltipDown={tooltipDown}></NavArrowDown>
                    </div>
                </div>

        
                <div className="right_column_content">
                    <div className="spotify_container">
                        <iframe src="https://open.spotify.com/embed/track/6vvoQKMci0NB7Zbo10t61N" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        <button className="spotify_button" onClick={updateSpotify}>REROLL</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Closing

