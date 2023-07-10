"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const BannerWidget = () => {
  const [width, setWidth] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      console.log(width);
    };
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <>
      <div className="mt-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPPIOTQ6dRUAtKe05F8jiDqDNu5ES82OhBe4jfFGMVg9Uz-5ZkGPTff-uAOvyjrJJkFA&usqp=CAU"
          height={width / 3}
          width={width}
          alt=""
        />
      </div>
    </>
  );
};
export default BannerWidget;
