import React, { useLayoutEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Fab, useScrollTrigger, Zoom, makeStyles, useMediaQuery } from '@material-ui/core';
import { ExpandLess } from '@material-ui/icons';
import { useController } from 'react-scroll-parallax';
import { animateScroll as scroll } from 'react-scroll';

import NavBar from './components/navbar/NavBar';
import Landing from './components/landing/Landing';
import AboutMe from './components/about-me/AboutMe';
import WorkExperience from './components/work-experience/WorkExperience';
import Projects from './components/projects/Projects';

const useStyles = makeStyles((theme) => ({
    '@global': {
        body: {
            fontFamily: 'Raleway',
        },
        p: {
            fontSize: '1.1em',
            lineHeight: 1.5,
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
        bottom: '1.5em',
        right: '1.5em',
        '& span': {
            fontFamily: 'Raleway',
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
    
    const isWideScreen = useMediaQuery('screen and (min-width: 1025px)');
    // TODO: Refactor to calculate midway without hardcoding fab width
    const horizontalMidway = window.innerWidth / 2 - 73;

    const handleClick = () => {
        scroll.scrollToTop({ duration: 500 });
    };

    return (
        <Zoom in={trigger}>
            <div
                onClick={handleClick}
                role='presentation'
                className={fabContainer}
                style={isWideScreen ? {} : { right: `${horizontalMidway}px`}}
            >
                {children}
            </div>
        </Zoom>
    );
};

const App = (props) => {
    const App = useStyles();
    const { parallaxController } = useController();

    useLayoutEffect(() => {
        const handler = () => parallaxController.update();
        window.addEventListener('load', handler);
        return () => window.removeEventListener('load', handler);
    }, [parallaxController]);

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

export default App;
