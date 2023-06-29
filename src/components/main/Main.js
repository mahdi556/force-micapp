"use client";
import { useContext, useEffect, useState } from "react";
import ToggleContext from "@/context/ToggleContext";
// import MegaSearch from "./MegaSearch";
// import Carousel from "./Carousel";
// import InsuarWidjet from "./InsuarWidjet";
// import ExpertWidget from "./ExpertWidget";
// import MedicalWidget from "./MedicalWidget";
// import BannerWidget from "./BannerWidget";
// import MapWidget from "./MapWidget";
import dynamic from "next/dynamic";

const MapWidget = dynamic(() => import("./MapWidget"), { ssr: false });
const MegaSearch = dynamic(() => import("./MegaSearch"), { ssr: false });
const Carousel = dynamic(() => import("./Carousel"), { ssr: false });
const InsuarWidjet = dynamic(() => import("./InsuarWidjet"), { ssr: false });
const ExpertWidget = dynamic(() => import("./ExpertWidget"), { ssr: false });
const BannerWidget = dynamic(() => import("./BannerWidget"), { ssr: false });
const MedicalWidget = dynamic(() => import("./MedicalWidget"), { ssr: false });
const Main = () => {
  useEffect(() => {}, []);
  return (
    <>
      <main
        style={{
          width: "100%",
        }}
      >
        <MegaSearch />
        <Carousel />
        <InsuarWidjet />
        <ExpertWidget />
        <BannerWidget />
        <MedicalWidget />
        <MapWidget />
      </main>
    </>
  );
};
export default Main;
