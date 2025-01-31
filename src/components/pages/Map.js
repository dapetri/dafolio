import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";
import AmongUs from "../particles/AmongUs";
import axios from "axios";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export const Map = () => {
  const mapContainer = useRef(null);
  var map = useRef(null);

  const [lng] = useState(8.4037);
  const [lat] = useState(49.0069);
  const [zoom] = useState(1.9);
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    const fetchGeojsonData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/locations`
        );
        setGeojsonData(response.data);
      } catch (error) {
        console.error("Error fetching GeoJSON data:", error);
      }
    };

    fetchGeojsonData();
  }, []);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/dapetri/clltnwgys00b201nz95d3cwp6",
      center: [lng, lat],
      zoom: zoom,
    });
  }, [lng, lat, zoom]); // Separate map initialization

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize

    // Function to add the data layer
    const addDataLayer = () => {
      // Load custom pin image
      map.current.loadImage(
        "/pin.png", // Path relative to public folder
        (error, image) => {
          if (error) throw error;

          // Add the image to the map
          if (!map.current.hasImage("custom-pin")) {
            map.current.addImage("custom-pin", image);
          }

          // Remove existing layer and source if they exist
          if (map.current.getLayer("points")) {
            map.current.removeLayer("points");
          }
          if (map.current.getSource("coordinates")) {
            map.current.removeSource("coordinates");
          }

          // Only add source and layer if we have data
          if (geojsonData) {
            map.current.addSource("coordinates", {
              type: "geojson",
              data: geojsonData,
            });

            map.current.addLayer({
              id: "points",
              type: "symbol",
              source: "coordinates",
              layout: {
                "icon-image": "custom-pin", // Use our custom pin
                "icon-size": 0.08,
                "icon-allow-overlap": true,
                "icon-anchor": "bottom",
              },
            });
          }
        }
      );
    };

    // If map is already loaded, add data layer immediately
    if (map.current.loaded()) {
      addDataLayer();
    } else {
      // Otherwise wait for load event
      map.current.once("load", addDataLayer);
    }

    // Cleanup remains the same
    return () => {
      if (map.current?.getLayer("points")) {
        map.current.removeLayer("points");
      }
      if (map.current?.getSource("coordinates")) {
        map.current.removeSource("coordinates");
      }
    };
  }, [geojsonData]);

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
