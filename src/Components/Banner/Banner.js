import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
            <div className="sidebar">
                <header >Catagores</header>
                <ul >
                    <li> <i class="fa fa-leaf"></i> Home And Gerden</li>
                    <li> <i class="fa fa-leaf"></i> Home And Gerden</li>
                    <li> <i class="fa fa-leaf"></i> Home And Gerden</li>
                    <li> <i class="fa fa-leaf"></i> Home And Gerden</li>
                    <li> <i class="fa fa-leaf"></i> Home And Gerden</li>
                    <li> <i class="fa fa-leaf"></i> Home And Gerden</li>
                    <li> <i class="fa fa-leaf"></i> Home And Gerden</li>
                    <li> <i class="fa fa-leaf"></i> Home And Gerden</li>
                </ul>
            </div>
        </div>
        <div className="col-md-9 col-xs-12 col-sm-12">
          <Carousel  activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="carosel-height" style={{height:'600px'}}>
              <img
                className="d-block w-100 h-100 img-fluid"
                src="https://i.ibb.co/bPmMVcN/banner-2.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height:'600px'}} className="position-relative carosel-height">
              <img
                className="d-block w-100 h-100 img-fluid"
                src="https://i.ibb.co/NKn3gg3/banar-1.jpg"
                alt="Second slide"
              />
              <Carousel.Caption className="second-item position-absolute">
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Banner;
