"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [width, setWidth] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide mt-3 ">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <Image
              src="/images/wallpapers/29.jpg"
              className="d-block mx-auto  rounded-4"
              width={width * 0.9}
              height={150}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/images/wallpapers/20.jpg"
              className="d-block mx-auto rounded-4"
              width={width * 0.9}
              height={150}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/images/wallpapers/24.jpg"
              className="d-block mx-auto rounded-4" 
              width={width * 0.9}
              height={150}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default Carousel;
