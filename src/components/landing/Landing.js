import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Particles } from 'react-particles-js';
import './Landing.css';

export class Landing extends React.Component {
    render() {
        return (
            <ParallaxBanner
                style={{
                    height: '100vh',
                }}
                className='banner-background'
                layers={[
                    {
                        children: (
                            <Particles
                                params={{
                                    particles: {
                                        number: {
                                            value: 100,
                                            density: {
                                                enable: true,
                                                value_area: 500,
                                            },
                                        },
                                        size: {
                                            value: 5,
                                            random: true,
                                            anim: {
                                                speed: 4,
                                                size_min: 0.3,
                                            },
                                        },
                                        line_linked: {
                                            enable: true,
                                            opacity: 1,
                                        },
                                        move: {
                                            random: true,
                                            speed: 3,
                                            direction: 'top',
                                            out_mode: 'out',
                                        },
                                    },
                                    interactivity: {
                                        events: {
                                            onhover: {
                                                enable: true,
                                                mode: 'bubble',
                                            },
                                            onclick: {
                                                enable: false,
                                            },
                                        },
                                        modes: {
                                            bubble: {
                                                distance: 300,
                                                duration: 1,
                                                size: 10,
                                                opacity: 1,
                                            },
                                        },
                                    },
                                }}
                            />
                        ),
                        amount: 0.3,
                        expanded: false,
                    },
                ]}
            >
                <div className='banner-children'>
                    <h1>
                        Hi, I'm <span className='my-name'>Derek</span>.
                        <br />
                        Welcome to my site!
                    </h1>
                </div>
            </ParallaxBanner>
        );
    }
}
