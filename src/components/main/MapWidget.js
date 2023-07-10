"use client";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";
import { useEffect, useState } from "react";
import { MedList } from "@/datalist/Medicals";
const MapWidget = () => {
  const [width, setWidth] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      console.log(width);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    const map = L.map("map").setView([32.682697, 51.6904068], 13);

    const tiles = L.tileLayer(
      "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
        attribution:
          '',
      }
    ).addTo(map);

    MedList.map((item, key) =>
      L.marker(item.location, {
        icon: L.icon({
          iconUrl: "/images/map/hosloc.svg",
          // shadowUrl: 'leaf-shadow.png',

          iconSize: [38, 95], // size of the icon
          shadowSize: [50, 64], // size of the shadow
          iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
          shadowAnchor: [4, 62], // the same for the shadow
          popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
        }),
      })
        .addTo(map)
        .bindPopup(`<b>${item.name}</b><br />`)
        // .openPopup()
    );

    const marker = L.marker([32.682697, 51.6904068], {
      icon: L.icon({
        iconUrl: "/images/map/userloc.svg",
        // shadowUrl: 'leaf-shadow.png',

        iconSize: [38, 95], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
      }),
    })
      .addTo(map)
      .bindPopup("<b>شما اینجا هستید!</b><br />")
      .openPopup();

    // function onMapClick(e) {
    //   popup
    //     .setLatLng(e.latlng)
    //     .setContent(`You clicked the map at ${e.latlng.toString()}`)
    //     .openOn(map);
    // }

    // map.on("click", onMapClick);
  }, []);
  return (
    <>
      <div
        className="mt-4"
        id="map"
        style={{
          height: width / 2,
        }}
      ></div>
    </>
  );
};
export default MapWidget;
