import React, { useEffect, useState, useRef } from 'react';
import "./Home.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "./content_option";
import styled from "styled-components";

// import { Link } from "react-router-dom";

var AsciiTable = require('ascii-table')

var table = new AsciiTable()


const desc = (w) => {
    const l = getTextWidth(introdata.description, "clacon2")
    const t = Math.floor(l / w)

    console.log(l)
    console.log(w)
    console.log(t)

    introdata.description.match(/.{1,6}/g).forEach((line) => {
        table.addRow(line)
    })

}

const getTextWidth = (text, font) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    context.font = font || getComputedStyle(document.body).font;

    return context.measureText(text).width;
}
// console.log(getTextWidth(introdata.description, "clacon2"))



export const Home = () => {
    const [width, setWidth] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        setWidth(elementRef.current.offsetWidth);
    }, []);

    return (
        <HelmetProvider>
            <Section id="home">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> {meta.title}</title>
                    <meta name="description" content={meta.description} />
                </Helmet>
                <Intro className="intro_sec d-block d-lg-flex align-items-center">
                    <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
                        <div className="align-self-center ">
                            <div className="intro mx-auto">
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
                                <Body ref={elementRef}>
                                    <pre>
                                        <code>
                                            {table.toString()}
                                            {console.log(width)}
                                            {desc(width)}

                                        </code>
                                    </pre>

                                </Body>
                                {/* <p className="mb-1x">{introdata.description}</p> */}
                                {/* <div className="intro_btn-action pb-5">
                                    <Link to="/portfolio" className="text_2">
                                        <div id="button_h" className="ac_btn btn ">
                                            Projects
                                            <div className="ring one"></div>
                                            <div className="ring two"></div>
                                            <div className="ring three"></div>
                                        </div>
                                    </Link>
                                    <Link to="/about">
                                        <div id="button_h" className="ac_btn btn">
                                            About Me
                                            <div className="ring one"></div>
                                            <div className="ring two"></div>
                                            <div className="ring three"></div>
                                        </div>
                                    </Link>
                                    <Link to="/contact">
                                        <div id="button_h" className="ac_btn btn">
                                            Contact Me
                                            <div className="ring one"></div>
                                            <div className="ring two"></div>
                                            <div className="ring three"></div>
                                        </div>
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </Intro>
            </Section>
        </HelmetProvider >
    );
};

const Section = styled.section`
    flex: 1 0 auto;
    position: relative;
    width: 100%;
    -webkit-transition: all .5s ease-in;
    -o-transition: all .5s ease-in;
    transition: all .5s ease-in;
`

const Intro = styled.div`
    height: calc(100vh - 60px);
    min-height: 700px;
    height: 100vh;
    margin-top: 40px;
    color: #fff;
`

const IntroH2 = styled.h2`
    font-family: "clacon2";
    color: #fff;
    font-size: 1.5rem;

`

const IntroH1 = styled.h1`
    color: rgb(32, 236, 83);
`
const Body = styled.div`
    height: 100%;
    width: 100%;
    font-weight: bold;
    font-family: "clacon2";
`