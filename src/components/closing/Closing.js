import React, { useState, useEffect } from 'react';
import { colors } from '../../styling/colors'
import NavArrowUp from '../miscellaneous/NavArrowUp';
import data0 from "../../assets/response_offset0.json";
import data1 from "../../assets/response_offset100.json";
import data2 from "../../assets/response_offset200.json";
import data3 from "../../assets/response_offset300.json";
import ScrollAnimation from "react-animate-on-scroll";

var spotifyIdentifier = "6vvoQKMci0NB7Zbo10t61N"
var allIdentifiers;
var totalTracks = 1;

// This function is crucial for the component to work. We need it to load the array of string IDs. We default the ID value
// to a meenoi song in case it doesn't load before the script loads, but otherwise this will load before user clicks reroll.
// We have not used an API (anymore) because it requires the use of authorisation (OAuth 2.0) and I don't want to
// hardcode sensitive data into the publicly available code.
function loadSpotifyIDS() {

    const data = [data0, data1, data2, data3];
    const identifiers = []
    var sum = 0;
    data.forEach( jsonFile => {
        jsonFile.items.forEach(trackitem => {
            identifiers.push(trackitem.track.id); 
            sum++;
        })
    })

    totalTracks = sum;
    allIdentifiers = identifiers;
}

function Closing({
    scrollDown,
    scrollUp,
    tooltipDown,
    tooltipUp,
    id
}) {

    const [track, setTrack] = useState();

    const updateSpotify = ()=> {
        
        var randomIndex = Math.round(Math.random()*totalTracks);
        spotifyIdentifier = allIdentifiers[randomIndex];

        // Reload the component
        setTrack({});

    }

    // On mount we want to do a load of data first (or an API call) and then update once to randomise initial song
    useEffect(() => {
        loadSpotifyIDS();
        updateSpotify();
    }, []);

    return (
        <div
          className="full_section"
          id={id}
        >

            <div className="section_two_column">

                <ScrollAnimation animateIn={"animate__zoomIn"} delay="200" duration="0.7" animateOnce={true}>
                    <div className="left_column_content" style={{ backgroundColor: "#000000" }}>
                        <div className="arrow_section_up">
                            <NavArrowUp coloring={colors.white} scrollUp={scrollUp} tooltipUp={tooltipUp}></NavArrowUp>
                        </div>
                        <h1 style={{ color: colors.green, textAlign: "center" }}> Bored? </h1>
                        <h3 style={{ color: colors.white, textAlign: "center" }}> 
                            Just for fun: explore the songs I've recently listened to and liked on spotify. Click refresh to randomly retrieve a different song. 
                        </h3>
                        <div className="arrow_section_down">
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn={"animate__zoomIn"} delay="200" duration="0.7" animateOnce={true}>
                    <div className="right_column_content" style={{ backgroundColor: "#111111" }}>
                        <div className="spotify_container">
                            <iframe src={"https://open.spotify.com/embed/track/"+spotifyIdentifier} width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                            <button className="spotify_button" onClick={updateSpotify}>Refresh</button>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>

        </div>
    )
}

export default Closing

