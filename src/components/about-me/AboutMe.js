import React from 'react';
import LazyLoad from 'react-lazy-load';
import { ImageLoader } from '../common/ImageLoader';

import './AboutMe.css';

export class AboutMe extends React.Component {
    render() {
        return (
            <div className='about-me-container' id='about-me'>
                <h1>ABOUT ME</h1>
                <div className='content'>
                    <div className='profile-picture-container'>
                        <LazyLoad debounce={false} offsetVertical={500}>
                            <ImageLoader
                                style={{ height: '70vh' }}
                                src={require('../../images/DSC_0376.jpg')}
                            />
                        </LazyLoad>
                    </div>

                    <div className='description'>
                        <p>
                            I'm a deer hunter. I go all the time with my dad.
                            One thing about deer: they have very good vision.
                            One thing about me: I'm better at hiding, than they
                            are at vision.
                        </p>
                        <p>
                            Do I feel bad about betraying Jim? Not at all.
                            That's the game. Convince him we're in an alliance,
                            get some information, throw him to the wolves.
                            That's politics baby! Get what you can out of
                            someone, then crush them.
                        </p>
                        <p>
                            I think Jim might have learned a very valuable
                            lesson. I was the youngest pilot in Pan Am history.
                            When I was four, the pilot let me ride in the
                            cockpit and fly the plane with him. And I was four,
                            and I was great and I would have landed it, but my
                            dad wanted us to go back to our seats.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
