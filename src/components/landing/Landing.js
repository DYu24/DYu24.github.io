import React, { useEffect, useState } from 'react';
import { Fade, Grow, makeStyles, useTheme } from '@material-ui/core';
import { ParallaxBanner } from 'react-scroll-parallax';
import Img from 'react-image';

import githubLogo from '../../resources/github-logo.png';
import linkedinLogo from '../../resources/linkedin-logo.png';
import cvIcon from '../../resources/cv-icon.png';
import resume from '../../resources/resume.pdf';
import background from '../../resources/iceland-pool.jpg';

const useStyles = makeStyles({
    landingContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        color: 'white',
        '& h1': {
            fontSize: '5vmax',
            zIndex: 1,
        },
        '& h2': {
            fontSize: '3vmax',
            marginTop: '-1em',
            zIndex: 1,
        },
    },
    iconLinks: {
        margin: '0em 0.5em',
    },
    icons: {
        marginTop: '2.5em',
        zIndex: 1,
    },
    divider: {
        zIndex: 1,
        height: '4px',
        width: '100px',
        background: 'white',
    },
});

const Landing = () => {
    const { divider, icons, iconLinks, landingContainer } = useStyles();
    const theme = useTheme();

    const [githubLoaded, setGithubLoaded] = useState(false);
    const [linkedinLoaded, setLinkedinLoaded] = useState(false);
    const [cvLoaded, setCvLoaded] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const scrollListener = () => {
            const position = window.pageYOffset;
            const windowHeight = window.innerHeight;
            setScrollPosition(Math.min(100, (100 * position) / windowHeight));
        };

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    });

    return (
        <div>
            <ParallaxBanner
                layers={[
                    {
                        image: background,
                        amount: 0.25,
                    },
                ]}
                style={{ height: '100vh' }}
            >
                <Fade
                    in={true}
                    timeout={1000}
                    style={{ transitionDelay: '500ms' }}
                >
                    <div className={landingContainer}>
                        <h1>Derek Yu</h1>
                        <h2>Software Engineering Student</h2>
                        <div
                            className={divider}
                            style={{
                                background: `linear-gradient(to right, ${
                                    theme.palette.primary.main
                                } 0%, ${theme.palette.primary.main} ${
                                    1.75 * scrollPosition
                                }%, white ${
                                    1.75 * scrollPosition
                                }%, white 100%)`,
                            }}
                        ></div>
                        <div className={icons}>
                            <Grow
                                in={githubLoaded && linkedinLoaded && cvLoaded}
                                timeout={500}
                                style={{ transitionDelay: '1000ms' }}
                            >
                                <a
                                    href='https://github.com/DYu24'
                                    title='https://github.com/DYU24'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={iconLinks}
                                >
                                    <Img
                                        src={githubLogo}
                                        width='32px'
                                        height='32px'
                                        onLoad={() => setGithubLoaded(true)}
                                    />
                                </a>
                            </Grow>
                            <Grow
                                in={githubLoaded && linkedinLoaded && cvLoaded}
                                timeout={500}
                                style={{ transitionDelay: '1250ms' }}
                            >
                                <a
                                    href='https://www.linkedin.com/in/derek-yu/'
                                    title='https://www.linkedin.com/in/derek-yu/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={iconLinks}
                                >
                                    <Img
                                        src={linkedinLogo}
                                        width='32px'
                                        height='32px'
                                        onLoad={() => setLinkedinLoaded(true)}
                                    />
                                </a>
                            </Grow>
                            <Grow
                                in={githubLoaded && linkedinLoaded && cvLoaded}
                                timeout={500}
                                style={{ transitionDelay: '1500ms' }}
                            >
                                <a
                                    href={resume}
                                    title='CV'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={iconLinks}
                                >
                                    <Img
                                        src={cvIcon}
                                        width='32px'
                                        height='32px'
                                        onLoad={() => setCvLoaded(true)}
                                    />
                                </a>
                            </Grow>
                        </div>
                    </div>
                </Fade>
            </ParallaxBanner>
        </div>
    );
};

export default Landing;
