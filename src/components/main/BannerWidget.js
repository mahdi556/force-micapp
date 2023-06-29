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
            <Image src='../../../resources/images/wallpapers/30.jpg' height={width/3} width={width} alt="" />
        </div>
        </>
    )
}
export default BannerWidget