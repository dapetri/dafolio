import "./App.css";
import { createGlobalStyle } from "styled-components";
import clacon2 from "./resources/clacon2.woff2";
import { Home } from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Map } from "./components/pages/Map";

function App() {
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
