import React, { useState } from 'react';
import { colors } from '../../styling/colors'
import NavArrowDown from '../miscellaneous/NavArrowDown';
import NavArrowUp from '../miscellaneous/NavArrowUp';
import data0 from "../../assets/response_offset0.json";
import data1 from "../../assets/response_offset100.json";
import data2 from "../../assets/response_offset200.json";
import data3 from "../../assets/response_offset300.json";

var spotifyIdentifier = "6vvoQKMci0NB7Zbo10t61N"

// function getSpotifyIDS(data, key) {

// }

function Closing({
    scrollDown,
    scrollUp,
    tooltipDown,
    tooltipUp,
    id
}) {

    const [track, setTrack] = useState();

    const updateSpotify = ()=> {

        const data = [data0, data1, data2, data3];
        const identifiers = []
        var sum = 0;
        data.forEach( jsonFile => {
            jsonFile.items.forEach(trackitem => {
                identifiers.push(trackitem.track.id); 
                sum++;
            })
        })

        console.log(sum);
        
        var randomIndex = Math.round(Math.random()*sum);
        spotifyIdentifier = identifiers[randomIndex];
        console.log(spotifyIdentifier);
        setTrack({});
    }

    // componentDidMount() {
    //     updateSpotify();
    // }

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
                        <iframe src={"https://open.spotify.com/embed/track/"+spotifyIdentifier} width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        <button className="spotify_button" onClick={updateSpotify}>REROLL</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Closing

