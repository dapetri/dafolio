import "./App.css";
import { createGlobalStyle } from "styled-components";
import Pa from "./Particles";
import clacon2 from "./clacon2.woff2";
import { Home } from "./Home";

function App() {
    return (
        //     <Container>
        //         {/* <Background> */}
        //         <Pa />
        //         {/* </Background> */}
        //         {/* <h1 class="title">Blue and Small</h1>
        //   <h2 class="subtitle">.is-info .is-small</h2> */}
        //         <Cont>0</Cont>
        //     </Container >
        <>
            <Style />
            <Pa />
            <Home />
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
