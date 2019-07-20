import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { Fab } from '@material-ui/core';

import { NavBar } from './components/navbar/NavBar';
import { Landing } from './components/landing/Landing';
import { AboutMe } from './components/about-me/AboutMe';
import { Education } from './components/education/Education';

import './App.css';

class App extends React.Component {
    scrollToTop = () => {
        animateScroll.scrollToTop({
            smooth: 'easeOutCubic',
        });
    };

    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <NavBar />
                    <Landing />
                    <AboutMe />
                    <Education />
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <h1>
                        <em>SUPREME</em>
                    </h1>
                    <Fab
                        className='fab'
                        variant='extended'
                        color='primary'
                        onClick={this.scrollToTop}
                    >
                        Back to top
                    </Fab>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
