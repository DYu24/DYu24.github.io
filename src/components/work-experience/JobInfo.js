import React from 'react';
import { Chip } from '@material-ui/core';

import './JobInfo.css';
import { ImageLoader } from '../common/ImageLoader';

export class JobInfo extends React.Component {
    listTechnologies = (values) =>
        values.map((x) => (
            <Chip
                size='small'
                variant='outlined'
                label={x}
                color='primary'
                className='chip'
            />
        ));

    render() {
        const {
            company,
            position,
            period,
            src,
            description,
            url,
            technologies,
        } = this.props;

        return (
            <div className='job-info-container'>
                <div className='job-info-content'>
                    <h2>
                        <a href={url} title={url} target='_blank' rel='noopener noreferrer'>
                            {company}
                        </a>
                    </h2>
                    <h3>{position}</h3>
                    <h5>{period}</h5>
                    <p>{description}</p>
                    {this.listTechnologies(technologies)}
                </div>
                <div className='job-info-visual'>
                    <a href={url} title={url} target='_blank' rel='noopener noreferrer'>
                        <ImageLoader
                            style={{ maxHeight: '200px', maxWidth: '200px' }}
                            src={src}
                        />
                    </a>
                </div>
            </div>
        );
    }
}
