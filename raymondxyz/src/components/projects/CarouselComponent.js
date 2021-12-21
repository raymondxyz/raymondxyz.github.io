import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import photo from "../../assets/profile_photo.jpg";
import 'pure-react-carousel/dist/react-carousel.es.css';

function CarouselComponent() {
    return (
      <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={200}
        totalSlides={3}
        infinite={true}
      >
        <Slider className="carousel_container">
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
              <p className="slide_infoS"> Information information information information information </p>
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
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
}

export default CarouselComponent;

