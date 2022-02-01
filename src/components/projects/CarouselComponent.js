import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import Developets from "../../assets/developets.png";
import Kemukupu from "../../assets/kemukupu.png";
import Houghlines from "../../assets/houghlines.png";
import Ocroutput from "../../assets/ocroutput.png";
import QualtricsPull from "../../assets/qualtricsPull.png";
import PullOutput from "../../assets/pullOutput.png";
import { colors } from "../../styling/colors";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
import 'pure-react-carousel/dist/react-carousel.es.css';

function CarouselComponent() {
    return (
      <CarouselProvider
        naturalSlideWidth={60}
        naturalSlideHeight={80}
        totalSlides={4}
        infinite={true}
        isPlaying={true}
        interval={7000}
      >
        <div className="carousel_wrapper">

          <ButtonBack className="button_back"><FaAngleLeft size="40px" color={colors.black}/></ButtonBack>

          <div className="carousel_center">
            <Slider className="carousel_slider">

              <Slide index={0}>
                <div className="carousel_slide">
                  <h1> Developets </h1>
                  <p> A 48 hour project that supports good code standards and team-bonding in development, built using the MERN stack. </p>
                  <ul>
                    <li>1st Place (Developers Society Hackathon)</li>
                    <li>Best Technical Implementation</li>
                    <li>Special Sponsor Prize (integrating NFT & Blockchain technology)</li>
                  </ul>
                  <img src={Developets} alt="menu screen for developets" className="slide_image"></img>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="carousel_slide">
                  <h1> Optical Character Recognition Tool </h1>
                  <p> Python based program to assist with extracting data laid out in tabular format from various file types, which are then extracted and piped to excel.
                    Primarily used for efficiently extracting business data to feed financial models built in excel.
                  </p>
                  <div className="slide_two_image">
                    <img src={Houghlines} alt="tabular date surrounded by coloured lines" className="slide_image"></img>
                    <img src={Ocroutput} alt="exemplar excel file" className="slide_image"></img>
                  </div>
                </div>
              </Slide>
              <Slide index={2}>
                <div className="carousel_slide">
                  <h1> Kēmu Kupu </h1>
                  <p> Java & Bash based educational platform designed on a quiz-format to promote learning of the native Māori language amongst young New Zealand children. </p>
                  <img src={Kemukupu} alt="educational quiz platform demonstration" className="slide_image"></img>
                </div>
              </Slide>
              <Slide index={3}>
                <div className="carousel_slide">
                  <h1> Data Webscraper </h1>
                  <p> Python based webscraper, used to access HTML and to extract all information fields of data objects from a Qualtrics dashboard (as such data is otherwise not easily accesible). Allows for automated reporting and tracking of Qualtrics dashboard data. </p>
                  <div className="slide_two_image">
                    <img src={QualtricsPull} alt="snippet of code" className="slide_image"></img>
                    <img src={PullOutput} alt="column of excel data" className="slide_image"></img>
                  </div>
                </div>
              </Slide>
            </Slider>

            <DotGroup className="carousel_dotgroup"></DotGroup>
          </div>

          <ButtonNext className="button_next"><FaAngleRight size="40px" color={colors.black}/></ButtonNext>
          
        </div>
      </CarouselProvider>
    );
}

export default CarouselComponent;

