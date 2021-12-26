import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import photo from "../../assets/profile_photo.jpg";
import { colors } from "../../styling/colors"
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
import 'pure-react-carousel/dist/react-carousel.es.css';

function CarouselComponent() {
    return (
      <CarouselProvider
        naturalSlideWidth={60}
        naturalSlideHeight={80}
        totalSlides={3}
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
                  <img src={photo} alt="menu screen for developets" className="slide_image"></img>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="carousel_slide">
                  <h1> Optical Character Recognition Tool </h1>
                  <p> Python based program to assist with scanning documents in various visual formats, to then scan and recognise characters in tabular format, then pipe to excel.
                    Primarily used for efficiently extracting business data to feed financial models built in excel.
                  </p>
                  <img src={photo} alt="various demonstrations and excel files" className="slide_image"></img>
                </div>
              </Slide>
              <Slide index={2}>
                <div className="carousel_slide">
                  <h1> Kemu Kupu </h1>
                  <p> Java & Bash based educational platform based on a quiz-format to promote learning of the native maori language amongst young New Zealand children. </p>
                  <img src={photo} alt="educational quiz platform demonstration" className="slide_image"></img>
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

