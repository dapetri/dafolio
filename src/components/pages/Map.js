import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import styled from "styled-components";
import AmongUs from "../particles/AmongUs";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export const Map = () => {
  const mapContainer = useRef(null);
  var map = useRef(null);

  const [lng] = useState(8.4037);
  const [lat] = useState(49.0069);
  const [zoom] = useState(1.9);
  const [countriesVisited] = useState([
    "DEU",
    "NLD",
    "ITA",
    "FRA",
    "ISL",
    "ESP",
    "LKA",
    "AUT",
    "GBR",
    "AND",
    "CHE",
    "HUN",
    "ROU",
    "GRC",
    "EGY",
    "MAR",
    "TUR",
    "ISR",
    "SVN",
    "HRV",
    "TUN",
    "USA",
    "MEX",
    "CUB",
    "DOM",
    "LUX",
    "BEL",
  ]);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/dapetri/clltnwgys00b201nz95d3cwp6",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("load", function () {
      map.current.addLayer(
        {
          id: "country-boundaries",
          source: {
            type: "vector",
            url: "mapbox://mapbox.country-boundaries-v1",
          },
          "source-layer": "country_boundaries",
          disputed: "false",
          type: "fill",
          paint: {
            "fill-pattern": "gray",
            "fill-opacity": 0.5,
          },
        },
        "country-label"
      );

      map.current.setFilter("country-boundaries", [
        "all",
        ["==", ["get", "disputed"], "false"],
        [
          "any",
          ["==", "all", ["get", "worldview"]],
          ["in", "US", ["get", "worldview"]],
        ],
        ["match", ["get", "iso_3166_1_alpha_3"], countriesVisited, false, true],
      ]);
    });
  });

  return (
    <>
      <AmongUs />
      <MapContainer ref={mapContainer} />
    </>
  );
};

const MapContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  -webkit-transition: all 0.5s ease-in;
  -o-transition: all 0.5s ease-in;
  transition: all 0.5s ease-in;
`;
