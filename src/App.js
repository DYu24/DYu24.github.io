import React, { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Fab, useScrollTrigger, Zoom, makeStyles } from '@material-ui/core';
import { ExpandLess } from '@material-ui/icons';
import { withController } from 'react-scroll-parallax';

import NavBar from './components/navbar/NavBar';
import Landing from './components/landing/Landing';
import AboutMe from './components/about-me/AboutMe';
import WorkExperience from './components/work-experience/WorkExperience';
import Projects from './components/projects/Projects';

const useStyles = makeStyles((theme) => ({
    '@global': {
        body: {
            fontFamily: 'Lora',
            fontWeight: 400,
        },
        p: {
            fontSize: '1.1em',
            lineHeight: 1.5,
        },
        '* h1, h2, h3, h5': {
            fontWeight: 400,
        },
        '* .underline': {
            height: '4px',
            width: '100px',
            background: theme.palette.primary.main,
            marginBottom: '1em',
        },
        '* ::-webkit-scrollbar': {
            display: 'none',
        },
    },
}));

const fabStyle = makeStyles({
    fabContainer: {
        position: 'fixed',
        bottom: '2em',
        right: '2em',
        '& span': {
            fontFamily: 'Lora',
            fontWeight: 600,
        },
    },
});

const ScrollTop = (props) => {
    const { children } = props;

    const { fabContainer } = fabStyle();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
    });

    const handleClick = () => {
        if (window.history.pushState) {
            window.history.pushState('', '/', window.location.pathname);
        } else {
            window.location.hash = '';
        }

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Zoom in={trigger}>
            <div
                onClick={handleClick}
                role='presentation'
                className={fabContainer}
            >
                {children}
            </div>
        </Zoom>
    );
};

const App = (props) => {
    const App = useStyles();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'smooth',
                });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    useLayoutEffect(() => {
        const handler = () => props.parallaxController.update();
        window.addEventListener('load', handler);
        return () => window.removeEventListener('load', handler);
    }, [props.parallaxController]);

    return (
        <BrowserRouter>
            <div className={App}>
                <NavBar />
                <Landing />
                <AboutMe />
                <WorkExperience />
                <Projects />

                <ScrollTop {...props}>
                    <Fab
                        className='fab'
                        color='primary'
                        variant='extended'
                        size='medium'
                    >
                        <ExpandLess /> BACK TO TOP
                    </Fab>
                </ScrollTop>
            </div>
        </BrowserRouter>
    );
};

export default withController(App);
