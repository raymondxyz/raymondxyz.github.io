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

          <ButtonBack className="button_back"><FaAngleLeft size="40px" color={colors.blue}/></ButtonBack>

          <div className="carousel_center">
            <Slider className="carousel_slider">

              <Slide index={0}>
                <div className="carousel_slide">
                  <h1 className="slide_title"> Developets </h1>
                  <p className="slide_info"> Information information information information information </p>
                  <img src={photo} className="slide_image"></img>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="carousel_slide">
                  <h1 className="slide_title"> OCR Tool </h1>
                  <p className="slide_info"> Information information information information information </p>
                  <img src={photo} className="slide_image"></img>
                </div>
              </Slide>
              <Slide index={2}>
                <div className="carousel_slide">
                  <h1 className="slide_title"> Something Else </h1>
                  <p className="slide_info"> Information information information information information </p>
                  <img src={photo} className="slide_image"></img>
                </div>
              </Slide>

            </Slider>

            <DotGroup className="carousel_dotgroup"></DotGroup>
          </div>

          <ButtonNext className="button_next"><FaAngleRight size="40px" color={colors.blue}/></ButtonNext>
          
        </div>
      </CarouselProvider>
    );
}

export default CarouselComponent;

