import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ParallaxBanner } from 'react-scroll-parallax';
import Img from 'react-image';

import githubLogo from '../../resources/github-logo.png';
import linkedinLogo from '../../resources/linkedin-logo.png';
import cvIcon from '../../resources/cv-icon.png';
import resume from '../../resources/resume.pdf';

import background from '../../resources/iceland-pool.JPG';

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
            fontSize: '4.5vw',
            zIndex: 1,
        },
        '& h2': {
            fontSize: '3vw',
            marginTop: '-0.5em',
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
                <div className={landingContainer}>
                    <h1>Derek Yu</h1>
                    <h2>Software Engineering Student</h2>
                    <div className={divider}></div>
                    <div className={icons}>
                        <a
                            href='https://github.com/DYu24'
                            title='https://github.com/DYU24'
                            target='_blank'
                            rel='noopener noreferrer'
                            className={iconLinks}
                        >
                            <Img src={githubLogo} width='32px' height='32px' />
                        </a>
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
                            />
                        </a>
                        <a
                            href={resume}
                            title='CV'
                            target='_blank'
                            rel='noopener noreferrer'
                            className={iconLinks}
                        >
                            <Img src={cvIcon} width='32px' height='32px' />
                        </a>
                    </div>
                </div>
            </ParallaxBanner>
        </div>
    );
};

export default Landing;
