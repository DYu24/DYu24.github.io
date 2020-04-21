import React, { useEffect, useState } from 'react';
import Img from 'react-image';
import { Fade, Link, makeStyles } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';

import profilePicture from '../../resources/DSC_0376.jpg';

const useStyles = makeStyles({
    aboutMeContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '1em',
    },
    content: {
        display: 'flex',
        padding: '2em',
    },
    profilePictureContainer: {
        height: '60vh',
        position: 'relative',
        margin: '0em 3em',
        '& Img': {
            height: '100%',
        },
    },
    description: {
        width: '40vw',
        position: 'relative',
        wordWrap: 'break-word',
        textAlign: 'justify',
        fontSize: '2.5vh',
        margin: '0em 1em',
    },
});

const AboutMe = () => {
    const {
        aboutMeContainer,
        content,
        profilePictureContainer,
        description,
    } = useStyles();

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
        <div className={aboutMeContainer} id='about-me'>
            <h1>ABOUT ME</h1>
            <Parallax x={['-75%', '25%']}>
                <div className='underline' />
            </Parallax>
            <div className={content}>
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
                            I find myself drawn to backend development as I'm
                            most intrigued by the architectural and algorithmic
                            challenges that come with it. I have experience
                            developing in several languages and frameworks (such
                            as TypeScript, Java and Python to name a few).
                        </p>
                        <p>
                            Outside of my life of software development, my other
                            interests include photography, travelling &
                            exploring, music and eating{' '}
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
