import React from "react";
import Particles from "react-tsparticles";

function ParticleBackground() {
    const particlesInit = (main) => {
        console.log(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <Particles
            className="particle_background"
            width="100vw"
            height="100vh"
            id="particlesEffect"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                color: {
                    value: "black",
                },
                },
                fpsLimit: 60,
                interactivity: {
                events: {
                    onHover: {
                    enable: true,
                    mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                    },
                    bounce: {
                    distance: 400,
                    },
                    push: {
                    quantity: 4,
                    },
                    repulse: {
                    distance: 110,
                    duration: 0.8,
                    },
                },
                },
                particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 200,
                    enable: true,
                    opacity: 0.4,
                    width: 1,
                },
                collisions: {
                    enable: false,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: true,
                    speed: 1.5,
                    straight: false,
                },
                number: {
                    density: {
                    enable: true,
                    area: 800,
                    },
                    value: 70,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    random: true,
                    value: 5,
                },
                },
                detectRetina: true,
            }}
    />
    )
}



export default ParticleBackground