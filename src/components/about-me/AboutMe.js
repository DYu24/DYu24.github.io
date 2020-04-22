import React, { useEffect, useState } from 'react';
import Img from 'react-image';
import { Fade, Link, makeStyles, useMediaQuery } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';

import profilePicture from '../../resources/DSC_0376.jpg';

const useStyles = makeStyles({
    aboutMeContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '1em',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        width: '70vw',
        padding: '2em 0em',
    },
    profilePictureContainer: {
        flexBasis: '35%',
        minWidth: '225px',
        maxWidth: '350px',
        margin: '0em 3em',
        '& Img': {
            width: '100%',
        },
    },
    description: {
        flexBasis: '55%',
        flexGrow: 1,
        wordWrap: 'break-word',
        textAlign: 'justify',
    },
});

const AboutMe = () => {
    const {
        aboutMeContainer,
        content,
        profilePictureContainer,
        description,
    } = useStyles();

    const isWideScreen = useMediaQuery('screen and (min-width: 1025px)');

    const [show, setShow] = useState(false);
    const [imageLoaded, setIsImageLoaded] = useState(false);
    const [displayDescription, setDisplayDescription] = useState(false);

    useEffect(() => {
        const onAboutMeEnter = () => {
            const position = window.pageYOffset;
            const windowHeight = window.innerHeight;

            if (position > 0.5 * windowHeight) {
                setShow(true);
            }
        };

        window.addEventListener('scroll', onAboutMeEnter);

        return () => {
            window.removeEventListener('scroll', onAboutMeEnter);
        };
    });

    useEffect(() => {
        if (show && imageLoaded) {
            setTimeout(() => setDisplayDescription(true), 1000);
        }
    }, [show, imageLoaded]);

    const handleOnLoad = () => {
        setIsImageLoaded(true);
    };

    return (
        <div
            className={aboutMeContainer}
            style={isWideScreen ? {} : { padding: '3em 0 1em 0' }}
            id='about-me'
        >
            <h1>ABOUT ME</h1>
            <Parallax x={['-70%', '30%']}>
                <div className='underline' />
            </Parallax>
            <div
                className={content}
                style={isWideScreen ? {} : { flexWrap: 'wrap' }}
            >
                <Fade in={show && imageLoaded}>
                    <div className={profilePictureContainer}>
                        <Img src={profilePicture} onLoad={handleOnLoad} />
                    </div>
                </Fade>
                <Fade in={show && displayDescription}>
                    <div className={description}>
                        <p>
                            I'm a fourth-year software engineering student at{' '}
                            <Link
                                href='https://www.concordia.ca/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Concordia University
                            </Link>{' '}
                            in Montreal, Canada. I first got into programming
                            when I joined the robotics team at school and
                            instantly fell in love with all the creative
                            possibilities that came with coding.
                        </p>
                        <p>
                            I find myself drawn to backend development, along
                            with the architectural and algorithmic challenges
                            that come with it. I've also dabbled with machine
                            learning and Big Data in a few course projects. I
                            have experience developing in several languages and
                            frameworks (such as TypeScript, Java and Python to
                            name a few).
                        </p>
                        <p>
                            My other interests, when I have a life, include:
                            photography, travelling & exploring, movies & video games,
                            watching cute dog videos, and eating{' '}
                            <span role='img' aria-hidden={true}>
                                🍕🍔🍜🍣
                            </span>
                        </p>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default AboutMe;
