import React from 'react';
import Img from 'react-image';
import { Particles } from 'react-particles-js';
import './Landing.css';

export class Landing extends React.Component {
    render() {
        return (
            <div className='landing-container'>
                <div className='particles'>
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
                </div>
                <h1>Derek Yu</h1>
                <h2>Software Engineering Student</h2>
                <div className='divider'></div>
                <div className='icons'>
                    <a
                        href='https://github.com/DYu24'
                        title='https://github.com/DYU24'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='icon-links'
                    >
                        <Img src={require('../../resources/github-logo.png')} />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/derek-yu/'
                        title='https://www.linkedin.com/in/derek-yu/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='icon-links'
                    >
                        <Img
                            src={require('../../resources/linkedin-logo.png')}
                        />
                    </a>
                    <a
                        href={require('../../resources/resume.pdf')}
                        title='CV'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='icon-links'
                    >
                        <Img src={require('../../resources/cv-icon.png')} />
                    </a>
                </div>
            </div>
        );
    }
}
