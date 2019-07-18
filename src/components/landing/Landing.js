import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import './Landing.css';

export class Landing extends React.Component {
    render() {
        return (
            <ParallaxBanner
                style={{
                    height: '100vh',
                }}
                className='banner-background'
                layers={[
                    {
                        image:
                            'https://images.unsplash.com/photo-1560301622-c8eb948fa9ce?w=1920&q=1080',
                        amount: 0.2,
                    },
                ]}
            >
                <div className='banner-children'>
                    <h1>DEREK YU</h1>
                </div>
            </ParallaxBanner>
        );
    }
}
