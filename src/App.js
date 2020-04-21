import React, { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Fab, useScrollTrigger, Zoom } from '@material-ui/core';
import { ExpandLess } from '@material-ui/icons';
import { withController } from 'react-scroll-parallax';

import NavBar from './components/navbar/NavBar';
import Landing from './components/landing/Landing';
import AboutMe from './components/about-me/AboutMe';
import WorkExperience from './components/work-experience/WorkExperience';
import Projects from './components/projects/Projects';

import './App.css';

const ScrollTop = (props) => {
    const { children } = props;
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
                className='fab-container'
            >
                {children}
            </div>
        </Zoom>
    );
};

const App = (props) => {
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
            <div className='App'>
                <NavBar />
                <Landing />
                <AboutMe />
                <WorkExperience />
                <Projects />

                <ScrollTop {...props}>
                    <Fab className='fab' color='primary'>
                        <ExpandLess />
                    </Fab>
                </ScrollTop>
            </div>
        </BrowserRouter>
    );
};

export default withController(App);
