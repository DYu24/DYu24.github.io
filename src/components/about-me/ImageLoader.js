import React from 'react';
import Img from 'react-image';

import './ImageLoader.css';

export class ImageLoader extends React.Component {
    state = {
        loaded: false,
    };

    onLoad = () => {
        this.setState(() => ({ loaded: true }));
    };

    render() {
        let { className, src, style } = this.props;
        className = `${className}-${this.state.loaded
            ? 'img-loaded'
            : 'img-loading'}`;

        return (
            <Img
                style={style}
                src={src}
                className={className}
                onLoad={this.onLoad}
            />
        );
    }
}
