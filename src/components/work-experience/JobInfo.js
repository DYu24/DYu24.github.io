import React from 'react';

import './JobInfo.css';
import { ImageLoader } from '../common/ImageLoader';

export class JobInfo extends React.Component {
    render() {
        const { company, position, period, src, description, url } = this.props;

        return (
            <div className='job-info-container'>
                <div className='job-info-content'>
                    <h2>
                        <a href={url} target='_blank' rel='noopener noreferrer'>{company}</a>
                    </h2>
                    <h3>
                        {position} ({period})
                    </h3>
                    <p>{description}</p>
                </div>
                <div className='job-info-visual'>
                    <ImageLoader
                        style={{ maxHeight: '200px', maxWidth: '200px' }}
                        src={src}
                    />
                </div>
            </div>
        );
    }
}
