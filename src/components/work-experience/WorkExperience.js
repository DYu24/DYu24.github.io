import React from 'react';
import { JobInfo } from './JobInfo';

import './WorkExperience.css';

export class WorkExperience extends React.Component {
    render() {
        return (
            <div className='work-experience-container' id='work-experience'>
                <h1>WORK EXPERIENCE</h1>
                <div className='contents'>
                    <JobInfo company='Dott' position='Software Engineer Intern' src={require('../../images/dott-logo.png')} />
                    <JobInfo company='Square-Enix Montreal' position='Intern Programmer' src={require('../../images/sqm-logo.png')} />
                    <JobInfo company='CAE Inc.' position='Intern Developer' src={require('../../images/cae-logo.png')} />
                </div>
            </div>
        );
    }
}
