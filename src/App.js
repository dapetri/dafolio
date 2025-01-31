import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Map } from "./components/pages/Map";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import clacon2 from "./resources/clacon2.woff2";

function App() {
  useEffect(() => {
    const sayHello = async () => {
      await axios.get(`${process.env.REACT_APP_API_BASE_URL}/`);
    };
    sayHello();
  }, []);

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
