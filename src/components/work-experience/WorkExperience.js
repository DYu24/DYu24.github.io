import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Parallax } from 'react-scroll-parallax';
import JobInfo from './JobInfo';
import jobs from './Jobs';

const useStyles = makeStyles({
    workExperienceContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '3em',
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

            if (position > 1.75 * windowHeight) {
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
