import React, { useState, useEffect } from 'react';
import { colors } from '../../styling/colors'
import NavArrowUp from '../miscellaneous/NavArrowUp';
import data0 from "../../assets/response_offset0.json";
import data1 from "../../assets/response_offset100.json";
import data2 from "../../assets/response_offset200.json";
import data3 from "../../assets/response_offset300.json";
import data4 from "../../assets/response_offset400.json";
import data5 from "../../assets/response_offset500.json";
import data6 from "../../assets/response_offset600.json";
import ScrollAnimation from "react-animate-on-scroll";

var spotifyIdentifier = "6vvoQKMci0NB7Zbo10t61N";
var allIdentifiers = [];
var totalTracks = 1;

// To run a full live connection to spotify is possible but requires significant effort and concerns around security on my personal account/hard-coding sensitive information.
// Consequently, we will take the API response data as json files and read these static files stored along with our web-app's files.

// This function is crucial for the component to work. We need it to load the array of string IDs. We default the ID value
// to a meenoi song in case it doesn't load before the script loads, but otherwise this will load before user clicks reroll.
function loadSpotifyIDS() {

    const data = [data0, data1, data2, data3, data4, data5, data6];
    var sum = 0;
    data.forEach( jsonFile => {
        jsonFile.items.forEach(trackitem => {
            allIdentifiers.push(trackitem.track.id); 
            sum++;
        })
    })

    totalTracks = sum;
}

function Closing({
    scrollUp,
    tooltipUp,
    id
}) {

    const [track, setTrack] = useState();

    const updateSpotify = ()=> {
        
        var randomIndex = Math.round(Math.random()*totalTracks);
        spotifyIdentifier = allIdentifiers[randomIndex];

        // Reload the component
        setTrack(spotifyIdentifier);

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
          style={{ background: "linear-gradient(90deg, #000000 35%, #111111 35%)" }}
        >

            <div className="section_two_column">

                <ScrollAnimation animateIn={"animate__zoomIn"} delay="200" duration="0.7" animateOnce={true}>
                    <div className="left_column_content" style={{ backgroundColor: "#000000" }}>
                        <div className="arrow_section_up">
                            <NavArrowUp coloring={colors.white} scrollUp={scrollUp} tooltipUp={tooltipUp}></NavArrowUp>
                        </div>
                        <h1 style={{ color: colors.green, textAlign: "center" }}> ??? </h1>
                        <h3 style={{ color: colors.white, textAlign: "center" }}> 
                            I love music - explore the songs I've recently listened to on Spotify. Click refresh to randomly retrieve a different song. 
                        </h3>
                        <div className="arrow_section_down">
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn={"animate__zoomIn"} delay="200" duration="0.7" animateOnce={true}>
                    <div className="right_column_content" style={{ backgroundColor: "#111111" }}>
                        <div className="spotify_container">
                            <iframe
                                src={"https://open.spotify.com/embed/track/" + track}
                                title="Spotify Track"
                                width="100%"
                                height="380"
                                frameBorder="0"
                                allowFullScreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            ></iframe>
                            <button className="spotify_button" onClick={updateSpotify}>Refresh</button>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>

        </div>
    )
}

export default Closing

