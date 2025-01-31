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

  const addNoise = (value) => {
    const noise = (Math.random() - 0.5) * 0.08; // ±0.0001 degrees
    return value + noise;
  };

  useEffect(() => {
    const fetchGeojsonData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/locations`
        );
        const noisyData = {
          ...response.data,
          features: response.data.features.map((feature) => ({
            ...feature,
            geometry: {
              ...feature.geometry,
              coordinates: [
                addNoise(feature.geometry.coordinates[0]),
                addNoise(feature.geometry.coordinates[1]),
              ],
            },
          })),
        };

        setGeojsonData(noisyData);
      } catch (error) {
        console.error("Error fetching GeoJSON data:", error);
      }
    };

    fetchGeojsonData();
    const interval = setInterval(fetchGeojsonData, 10000); // Update every 30 seconds

    return () => clearInterval(interval);
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
    if (!map.current || !geojsonData) return;

    const addLocationLayer = () => {
      map.current.loadImage("/pin.png", (error, image) => {
        if (error) throw error;

        // Add image only if not exists
        if (!map.current.hasImage("custom-pin")) {
          map.current.addImage("custom-pin", image);
        }

        // Add source and layer only if they don't exist
        if (!map.current.getSource("coordinates")) {
          map.current.addSource("coordinates", {
            type: "geojson",
            data: geojsonData || { type: "FeatureCollection", features: [] },
          });

          map.current.addLayer({
            id: "points",
            type: "symbol",
            source: "coordinates",
            layout: {
              "icon-image": "custom-pin",
              "icon-size": 0.065,
              "icon-allow-overlap": true,
              "icon-anchor": "bottom",
            },
            minzoom: 0, // Show at minimum zoom level
            maxzoom: 22, // Show at maximum zoom level
          });
        } else {
          // Just update the source data if layer exists
          map.current.getSource("coordinates").setData(geojsonData);
        }
        if (map.current.getLayer("user-point")) {
          map.current.moveLayer("user-point");
        }
      });
    };

    if (map.current.loaded()) {
      addLocationLayer();
    } else {
      map.current.once("load", addLocationLayer);
    }
  }, [geojsonData]);

  useEffect(() => {
    if (!map.current) return;

    let isInitialLoad = true; // Flag for first load

    const updateUserLocation = (longitude, latitude) => {
      if (!map.current.getSource("user-location")) {
        map.current.addSource("user-location", {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [longitude, latitude],
            },
          },
        });

        map.current.addLayer({
          id: "user-point",
          type: "symbol",
          source: "user-location",
          layout: {
            "icon-image": "user-location",
            "icon-size": 0.075,
            "icon-allow-overlap": true,
            "icon-anchor": "bottom",
          },
          minzoom: 0, // Show at minimum zoom level
          maxzoom: 22, // Show at maximum zoom level
        });
      } else {
        map.current.getSource("user-location").setData({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
        });
      }

      if (isInitialLoad) {
        setTimeout(() => {
          map.current.flyTo({
            center: [longitude, latitude],
            zoom: 2,
            duration: 3000, // Duration in milliseconds (3 seconds)
            speed: 0.5, // Lower speed value makes movement slower
          });
          isInitialLoad = false;
        }, 2000);
      }
    };

    const postLocationData = async (data) => {
      await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/locations`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    };

    const addUserLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            const locationData = {
              ip: "0.0.0.0",
              continent_code: null,
              continent_name: null,
              country_code2: null,
              country_code3: null,
              country_name: null,
              city: null,
              zipcode: null,
              latitude,
              longitude,
              isp: null,
            };

            map.current.loadImage("/pointer.png", (error, image) => {
              if (error) throw error;
              if (!map.current.hasImage("user-location")) {
                map.current.addImage("user-location", image);
              }
              updateUserLocation(longitude, latitude);
            });

            postLocationData(locationData);
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      }
    };

    addUserLocation();

    return () => {
      if (map.current?.getLayer("user-point")) {
        map.current.removeLayer("user-point");
      }
      if (map.current?.getSource("user-location")) {
        map.current.removeSource("user-location");
      }
    };
  }, []);

  useEffect(() => {
    if (!map.current) return;

    // Create legend
    const legend = document.createElement("div");
    legend.style.cssText = `
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 7px;
      font-family: Arial, sans-serif;
      font-size: 12px;
      z-index: 1;
      color: white;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 6px;
    `;

    // Add pin legend item
    const pinItem = document.createElement("div");
    pinItem.style.cssText = `
      display: flex;
      align-items: center;
      margin-bottom: 5px;
    `;
    pinItem.innerHTML = `
      <img src="/pin.png" style="width: 20px; height: 20px; margin-right: 8px;"/>
      <span>Historical Accesses</span>
    `;
    legend.appendChild(pinItem);

    // Add pointer legend item if geolocation is available
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        () => {
          const pointerItem = document.createElement("div");
          pointerItem.style.cssText = `
            display: flex;
            align-items: center;
          `;
          pointerItem.innerHTML = `
            <img src="/pointer.png" style="width: 20px; height: 20px; margin-right: 8px;"/>
            <span>You</span>
          `;
          legend.appendChild(pointerItem);
        },
        () => {
          // Handle permission denial silently
        }
      );
    }

    // Add legend to map
    map.current.getContainer().appendChild(legend);

    // Cleanup on unmount
    return () => {
      const container = map.current?.getContainer();
      if (container && legend.parentNode === container) {
        container.removeChild(legend);
      }
    };
  }, []);

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
