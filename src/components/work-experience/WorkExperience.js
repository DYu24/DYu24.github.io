import React from 'react';
import { JobInfo } from './JobInfo';

import './WorkExperience.css';

const jobs = [
    {
        company: 'Dott',
        position: 'Software Engineer Intern',
        period: 'May 2019 - August 2019',
        src: require('../../images/dott-logo.png'),
        description: `My money's in that office, right? If she start giving me
        some bullshit about it ain't there, and we got to go
        someplace else and get it, I'm gonna shoot you in the
        head then and there. Then I'm gonna shoot that bitch in
        the kneecaps, find out where my goddamn money is. She
        gonna tell me too. Hey, look at me when I'm talking to
        you, motherfucker. You listen: we go in there, and that
        nigga Winston or anybody else is in there, you the first
        motherfucker to get shot. You understand?`,
        url: 'https://ridedott.com/',
    },
    {
        company: 'Square-Enix Montreal',
        position: 'Intern Programmer',
        period: 'May 2018 - August 2018',
        src: require('../../images/sqm-logo.png'),
        description: `My money's in that office, right? If she start giving me
        some bullshit about it ain't there, and we got to go
        someplace else and get it, I'm gonna shoot you in the
        head then and there. Then I'm gonna shoot that bitch in
        the kneecaps, find out where my goddamn money is. She
        gonna tell me too. Hey, look at me when I'm talking to
        you, motherfucker. You listen: we go in there, and that
        nigga Winston or anybody else is in there, you the first
        motherfucker to get shot. You understand?`,
        url: 'https://www.square-enix-montreal.com/',
    },
    {
        company: 'CAE Inc.',
        position: 'Intern Developer',
        period: 'September 2017 - December 2017',
        src: require('../../images/cae-logo.png'),
        description: `My money's in that office, right? If she start giving me
        some bullshit about it ain't there, and we got to go
        someplace else and get it, I'm gonna shoot you in the
        head then and there. Then I'm gonna shoot that bitch in
        the kneecaps, find out where my goddamn money is. She
        gonna tell me too. Hey, look at me when I'm talking to
        you, motherfucker. You listen: we go in there, and that
        nigga Winston or anybody else is in there, you the first
        motherfucker to get shot. You understand?`,
        url: 'https://www.cae.com/',
    },
];

export class WorkExperience extends React.Component {
    listJobs = () => {
        let jobList = [];

        jobs.forEach((job) => {
            jobList.push(
                <JobInfo
                    company={job.company}
                    period={job.period}
                    position={job.position}
                    src={job.src}
                    description={job.description}
                    url={job.url}
                />,
            );
        });

        return jobList;
    };

    render() {
        return (
            <div className='work-experience-container' id='work-experience'>
                <h1>WORK EXPERIENCE</h1>
                <div className='underline' />
                <div className='work-experience-contents'>
                    {this.listJobs()}
                </div>
            </div>
        );
    }
}
