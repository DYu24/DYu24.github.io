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
                            // 'https://images.unsplash.com/photo-1557672172-298e090bd0f1',
                            'https://images.unsplash.com/photo-1560301622-c8eb948fa9ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=1080',
                        // 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner.jpg',
                        amount: 0.5,
                    },
                ]}
            >
                <div className='banner-children'>
                    <h1>(╯°□°)╯︵ ┻━┻ ┬─┬﻿ ノ( ゜-゜ノ)</h1>
                </div>
            </ParallaxBanner>
        );
    }
}
