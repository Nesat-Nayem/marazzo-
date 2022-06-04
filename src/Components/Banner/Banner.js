import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <div className="sidebar">
            <header>
           
              <i class="fa fa-bars"></i> Catagores
            </header>
            <ul>
              <li>
              
                <i class="fa fa-leaf"></i> Home And Gerden
              </li>
              <li>
             
                <i class="fa fa-leaf"></i> Home And Gerden
              </li>
              <li>
            
                <i class="fa fa-leaf"></i> Home And Gerden
              </li>
              <li>
          
                <i class="fa fa-leaf"></i> Home And Gerden
              </li>
              <li>
               
                <i class="fa fa-leaf"></i> Home And Gerden
              </li>
              <li>
             
                <i class="fa fa-leaf"></i> Home And Gerden
              </li>
              <li>
              
                <i class="fa fa-leaf"></i> Home And Gerden
              </li>
              <li>
            
                <i class="fa fa-leaf"></i> Home And Gerden
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-9 col-xs-12 col-sm-12">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item
              className="carosel-height"
              style={{ height: "600px" }}
            >
              <img
                className="d-block w-100 h-100 img-fluid"
                src="https://i.ibb.co/bPmMVcN/banner-2.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>TOP BRANDS</h3>
                <h1>New Collections</h1>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item
              style={{ height: "600px" }}
              className=" carosel-height"
            >
              <img
                className="d-block w-100 h-100 img-fluid"
                src="https://i.ibb.co/NKn3gg3/banar-1.jpg"
                alt="Second slide"
              />
              <Carousel.Caption className="second-item ">
                <div className="carosel-text">
                  <h3>SPRING 2022</h3>
                  <h1>Women Fashion</h1>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Banner;
