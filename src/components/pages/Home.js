import React, { useRef } from "react";
import "./Home.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../resources/content_option";
import styled from "styled-components";
import ZerosOnes from "../particles/ZerosOnes";
import { Link } from "react-router-dom";

const bodyFontSize = "16px";
const bodyFontStyle = "BlinkMacSystemFont";
const bodyFontWeight = "bold";

export const Home = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  var AsciiTable = require("ascii-table");

  var table = new AsciiTable();
  table.setBorder("|", "-", "+", "+");

  const s =
    "[\\s\\S]{1," + (windowSize.current[0] < 1000 ? "30" : "40") + "}(?!\\S)";

  introdata.description.match(RegExp(s, "g"), "$&\n").forEach((line) => {
    table.addRow(line.trim());
  });

  var linkTable = new AsciiTable();
  linkTable.setBorder("░", "═", "═", "═");
  linkTable.addRow("MAP");

  var linkGitHub = new AsciiTable();
  linkGitHub.setBorder("░", "═", "═", "═");
  linkGitHub.addRow("GITHUB");

  var linkTableLinkedIn = new AsciiTable();
  linkTableLinkedIn.setBorder("░", "═", "═", "═");
  linkTableLinkedIn.addRow("LINKEDIN");

  var linkTableLeetCode = new AsciiTable();
  linkTableLeetCode.setBorder("░", "═", "═", "═");
  linkTableLeetCode.addRow("LEETCODE");

  return (
    <>
      <HelmetProvider>
        <ZerosOnes />
        <Section id="home">
          <Helmet>
            <meta charSet="utf-8" />
            <title> {meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>
          <Intro>
            <IntroH2 className="mb-1x">{introdata.title}</IntroH2>
            <IntroH1 className="fluidz-48 mb-1x">
              <Typewriter
                options={{
                  strings: [
                    introdata.animated.first,
                    introdata.animated.second,
                    introdata.animated.third,
                    introdata.animated.fourth,
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />
            </IntroH1>
            <Body>
              <pre>
                <code>{table.toString()}</code>
              </pre>
            </Body>

            <Space>* click *</Space>
            <Body>
              <pre>
                <code>
                  <Link to="https://leetcode.com/u/dapetri/">
                    <Button>{linkTableLeetCode.toString()}</Button>
                  </Link>
                </code>
              </pre>
              <pre>
                <code>
                  <Link to="https://www.linkedin.com/in/dapetri">
                    <Button>{linkTableLinkedIn.toString()}</Button>
                  </Link>
                </code>
              </pre>
              <pre>
                <code>
                  <Link to="https://www.github.com/dapetri">
                    <Button>{linkGitHub.toString()}</Button>
                  </Link>
                </code>
              </pre>
              <pre>
                <code>
                  <Link to="/map">
                    <Button>{linkTable.toString()}</Button>
                  </Link>
                </code>
              </pre>
            </Body>
          </Intro>
        </Section>
      </HelmetProvider>
    </>
  );
};

const Section = styled.section`
  flex: 1 0 auto;
  position: relative;
  -webkit-transition: all 0.5s ease-in;
  -o-transition: all 0.5s ease-in;
  transition: all 0.5s ease-in;
`;

const Intro = styled.div`
  color: #fff;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
`;

const IntroH2 = styled.h2`
  font-family: "clacon2";
  color: #fff;
  font-size: 1.5rem;
  margin-left: 5%;
  margin-right: 5%;
`;

const IntroH1 = styled.h1`
  color: rgb(32, 236, 83);
  height: 2rem;
  margin-left: 5%;
  margin-right: 5%;
`;
const Body = styled.div`
  width: fit-content;
  font-weight: ${bodyFontWeight};
  font-family: ${bodyFontStyle};
  font-size: ${bodyFontSize};
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  text-align: center;
  margin: auto;
`;

const Button = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  font-weight: ${bodyFontWeight};
  font-family: "clacon2";
  font-size: ${bodyFontSize};
`;

const Space = styled.div`
  text-align: center;
  height: 0.3rem;
  font-style: italic;
  font-size: 12px;
`;
