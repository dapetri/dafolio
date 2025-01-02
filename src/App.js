import "./App.css";
import { createGlobalStyle } from "styled-components";
import clacon2 from "./resources/clacon2.woff2";
import { Home } from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Map } from "./components/pages/Map";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [ipData, setIpData] = useState(null);

  useEffect(() => {
    const fetchIpData = async () => {
      try {
        const response = await axios.get(
          "https://api.ipgeolocation.io/ipgeo?apiKey=d485d0727145414b8fd97fc3a2194a46" // TODO remove api token and add to secrets
        );
        setIpData(response.data);
      } catch (err) {
        console.log("Error fetching IP location data:", err);
      }
    };

    fetchIpData();
  }, []);

  useEffect(() => {
    if (ipData) {
      console.log(ipData);
    }
  }, [ipData]);

  return (
    <>
      <Style />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

const Style = createGlobalStyle`
  @font-face {
    font-family: "clacon2";
    src: local("clacon2"), url(${clacon2}) format("woff2");
  }
`;
