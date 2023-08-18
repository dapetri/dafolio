import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Particles.css";

const Pa = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: false,
                    zIndex: 0,
                },
                fpsLimit: 120,
                particles: {
                    groups: {
                        z5000: {
                            number: {
                                value: 70,
                            },
                            zIndex: {
                                value: 5000,
                            },
                        },
                        z7500: {
                            number: {
                                value: 30,
                            },
                            zIndex: {
                                value: 75,
                            },
                        },
                        z2500: {
                            number: {
                                value: 50,
                            },
                            zIndex: {
                                value: 25,
                            },
                        },
                        z1000: {
                            number: {
                                value: 40,
                            },
                            zIndex: {
                                value: 10,
                            },
                        },
                    },
                    number: {
                        value: 200,
                        density: {
                            enable: false,
                            value_area: 800,
                        },
                    },
                    color: {
                        value: "#20c20e",
                        animation: {
                            enable: false,
                            speed: 20,
                            sync: true,
                        },
                    },
                    shape: {
                        type: "character",
                        options: {
                            character: [
                                {
                                    value: "0",
                                    weight: "100",
                                    font: "clacon2",
                                },
                                {
                                    value: "1",
                                    weight: "100",
                                    font: "clacon2",
                                },
                            ],
                        },
                    },
                    opacity: {
                        value: 1,
                        random: false,
                        animation: {
                            enable: false,
                            speed: 3,
                            minimumValue: 0.1,
                            sync: false,
                        },
                    },
                    size: {
                        value: 20,
                    },
                    links: {
                        enable: false,
                        distance: 100,
                        color: "#fff",
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        angle: {
                            value: 10,
                            offset: 0,
                        },
                        enable: true,
                        speed: 1,
                        direction: "down",
                        random: false,
                        straight: true,
                        outModes: {
                            default: "out",
                        },
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                    zIndex: {
                        value: 5,
                        opacityRate: 0.5,
                    },
                },
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            links: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 0.9,
                        },
                        repulse: {
                            distance: 200,
                        },
                        push: {
                            quantity: 4,
                            groups: ["z5000", "z7500", "z2500", "z1000"],
                        },
                        remove: {
                            quantity: 2,
                        },
                    },
                },
                detectRetina: true,
                background: {
                    color: "#000",
                    image: "",
                    position: "center",
                    repeat: "repeat",
                    size: "cover",
                },
                emitters: {
                    position: {
                        y: 55,
                        x: -30,
                    },
                    rate: {
                        delay: 7,
                        quantity: 1,
                    },
                    size: {
                        width: 0,
                        height: 0,
                    },
                    // particles: {
                    //     shape: {
                    //         type: "images",
                    //         options: {
                    //             images: [
                    //                 {
                    //                     // src: "https://pytorch.org/assets/images/pytorch-logo.png",
                    //                     src: "https://cdn.icon-icons.com/icons2/3404/PNG/512/debug_icon_215819.png",
                    //                 },
                    //             ],
                    //         },
                    //     },
                    //     size: {
                    //         value: 40,
                    //     },
                    //     move: {
                    //         speed: 5,
                    //         outModes: {
                    //             default: "destroy",
                    //             left: "none",
                    //         },
                    //         // straight: true,
                    //     },
                    //     zIndex: {
                    //         value: 20,
                    //     },
                    //     rotate: {
                    //         value: {
                    //             min: 0,
                    //             max: 360,
                    //         },
                    //         animation: {
                    //             enable: true,
                    //             speed: 0,
                    //             sync: true,
                    //         },
                    //     },
                    // },
                },
            }}
        />
    );
};
export default Pa;

