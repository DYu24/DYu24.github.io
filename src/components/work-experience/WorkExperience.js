import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';
import JobInfo from './JobInfo';

import dottLogo from '../../resources/dott-logo.png';
import sqmLogo from '../../resources/sqm-logo.png';
import caeLogo from '../../resources/cae-logo.png';

const jobs = [
    {
        company: 'Dott',
        position: 'Software Engineer Intern',
        period: 'May 2019 - August 2019',
        src: dottLogo,
        description: `Dott is a European micro-mobility ridesharing startup based in Amsterdam. 
        At the company, I worked as a backend engineer on the platform and was responsible for 
        developing and maintaining features for the core functionality of the business (e.g. 
        vehicle parts management, payments).`,
        url: 'https://ridedott.com/',
        technologies: ['TypeScript', 'Node.Js', 'Google Cloud Platform'],
    },
    {
        company: 'Square-Enix Montreal',
        position: 'Intern Programmer',
        period: 'May 2018 - August 2018',
        src: sqmLogo,
        description: `Square-Enix Montreal, a subsidiary of Square-Enix, is a mobile games studio
        that has developed critically acclaimed games such as Hitman Go and Lara Croft Go. As a 
        fullstack developer, I primarily worked on an internal web portal for game management and 
        metrics tracking, as well as secondary tooling for auto-generation of code and documentation.`,
        url: 'https://www.square-enix-montreal.com/',
        technologies: ['TypeScript', 'C#', 'Angular', 'ASP.NET'],
    },
    {
        company: 'CAE Inc.',
        position: 'Intern Developer',
        period: 'September 2017 - December 2017',
        src: caeLogo,
        description: `CAE specializes in the development of simulators for training in civil aviation,
         defence & security, and for healthcare. I was part of the platform team and developed an automated 
         solution to build and deploy customized OS images for simulator computers. This helped to drastically 
         decrease maintenance and deployment time of these images as the majority of manual work had been cut away.`,
        url: 'https://www.cae.com/',
        technologies: [
            'PowerShell',
            'Batch',
            'VBScript',
            'Microsoft Deployment Toolkit',
        ],
    },
];

const useStyles = makeStyles({
    workExperienceContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '1em',
    },
    workExperienceContents: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '75vw',
    },
});

const WorkExperience = () => {
    const { workExperienceContainer, workExperienceContents } = useStyles();

    const [show, setShow] = useState(false);

    useEffect(() => {
        const onWorkExperienceEnter = () => {
            const position = window.pageYOffset;
            const windowHeight = window.innerHeight;

            if (position > 1.75 * windowHeight && position < 3 * windowHeight) {
                setShow(true);
            }
        };

        window.addEventListener('scroll', onWorkExperienceEnter);

        return () => {
            window.removeEventListener('scroll', onWorkExperienceEnter);
        };
    });

    const listJobs = () => {
        let timeout = 0;
        return jobs.map((job) => {
            const element = <JobInfo job={job} show={show} timeout={timeout} />;
            timeout += 500;
            return element;
        });
    };

    return (
        <div className={workExperienceContainer} id='work-experience'>
            <h1>WORK EXPERIENCE</h1>
            <Parallax x={['75%', '-25%']}>
                <div className='underline' />
            </Parallax>
            <div className={workExperienceContents}>{listJobs()}</div>
        </div>
    );
};

export default WorkExperience;
