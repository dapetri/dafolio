import "./App.css";
import { createGlobalStyle } from "styled-components";
import clacon2 from "./clacon2.woff2";
import { Home } from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Map } from "./Map";


function App() {
    return (
        <>
            <Style />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="cvmap" element={<Map />} />

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

// const Container = styled.div`
//   position: relative;
// `;
// const Background = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color:red;
// `;

// const Cont = styled.div`
//   min-height: 200vh;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 1;
// `;

const Style = createGlobalStyle`
  @font-face {
    font-family: "clacon2";
    src: local("clacon2"), url(${clacon2}) format("woff2");
  }
`;
