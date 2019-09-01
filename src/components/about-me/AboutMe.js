import React from 'react';
import LazyLoad from 'react-lazy-load';
import { ImageLoader } from '../common/ImageLoader';

import './AboutMe.css';

export class AboutMe extends React.Component {
    render() {
        return (
            <div className='about-me-container' id='about-me'>
                <h1>ABOUT ME</h1>
                <div className='underline'></div>
                <div className='content'>
                    <div className='profile-picture-container'>
                        <LazyLoad debounce={false} offsetVertical={500}>
                            <ImageLoader
                                style={{ height: '70vh' }}
                                src={require('../../resources/DSC_0376.jpg')}
                            />
                        </LazyLoad>
                    </div>

                    <div className='description'>
                        <p>
                            I'm a fourth-year software engineering student at 
                            Concordia University in Montreal, Canada. I first 
                            got into programming when I joined the robotics team at
                            school and instantly fell in love with all the creative 
                            possibilities that came with coding.
                        </p>
                        <p>
                            I find myself drawn to backend development as I'm most 
                            intrigued by the architectural and algorithmic challenges
                            that come with it. I have experience developing in several 
                            languages and frameworks (such as TypeScript, Java and Python 
                            to name a few).
                        </p>
                        <p>
                            Outside of my life of software development, I also love doing
                            photography, travelling & exploring, eating, and following
                            the latest tech news.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
