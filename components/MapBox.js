import React from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import { getCenter } from "geolib";
import Image from "next/image";
import mapPin from "../public/pin.png";
import { Result } from "postcss";

function MapBox({ searchResults }) {

  // transform the search results object into the object that we require
 
  const coordinates = searchResults.map((item) => {
    return {
      longitude: item.long,
      latitude: item.lat,
    };
  });

  // get center of coordinates

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });



  return (
    <Map
      mapStyle="mapbox://styles/knudcb28/clderq07p001501npw9loml1k"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_ID}
      {...viewport}
      onChange={(viewport) => setViewport(viewport)}
      onWheel={(viewport) => setViewport(viewport)}
    >
    </Map>
  );
}

export default MapBox;
