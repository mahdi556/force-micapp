'use client'
import Image from "next/image"
import { useEffect, useState } from "react";
 const BannerWidget=()=>{

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
      
    return(
        <>
        <div className="mt-3">
            <Image src='https://en.wikipedia.org/wiki/File:Bachalpsee_reflection.jpg' height={width/3} width={width} alt="" />
        </div>
        </>
    )
}
export default BannerWidget