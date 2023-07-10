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
            <img
              src="https://img.tebyan.net/big/1398/03/23620618017511732162172121811835832305438.jpg?w=380"
              className="d-block mx-auto  rounded-4"
              width={width * 0.9}
              height={150}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://afrateb.com/wp-content/uploads/2022/04/%D8%A8%D9%87%D8%AA%D8%B1%DB%8C%D9%86-%D8%A8%DB%8C%D9%85%D8%A7%D8%B1%D8%B3%D8%AA%D8%A7%D9%86-%D9%87%D8%A7%DB%8C-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86.jpg"
              className="d-block mx-auto rounded-4"
              width={width * 0.9}
              height={150}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoYZ-FX4nHOKvBZCXnUHo1n41NgVdljvCkGgyNWvaw-TYr2adrYD6BmmqnVcGJ1xfX8ZE&usqp=CAU"
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
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default Carousel;
